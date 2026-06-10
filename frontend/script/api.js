// Couche d'accès à l'API réelle (backend Express, http://localhost:3000)
// + gestion de l'authentification (avec secours "compte local" si l'API est injoignable)

const API_BASE = 'http://localhost:3000';
const API_TIMEOUT = 1500;

function isNetworkError(e) {
    return e instanceof TypeError || e.name === 'AbortError';
}

async function apiRequest(path, { method = 'GET', body, auth = false, timeout = API_TIMEOUT } = {}) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const headers = { 'Content-Type': 'application/json' };
        if (auth) {
            const token = Auth.getToken();
            if (token) headers.Authorization = `Bearer ${token}`;
        }

        const res = await fetch(`${API_BASE}${path}`, {
            method,
            headers,
            body: body !== undefined ? JSON.stringify(body) : undefined,
            signal: controller.signal,
        });

        if (!res.ok) {
            let message = `Erreur ${res.status}`;
            try {
                const data = await res.json();
                if (data.message) message = data.message;
            } catch (_) { /* réponse non JSON */ }
            throw new Error(message);
        }

        if (res.status === 204) return null;
        return await res.json();
    } finally {
        clearTimeout(timeoutId);
    }
}

const apiGet = (path, auth = false) => apiRequest(path, { auth });
const apiPost = (path, body, auth = false) => apiRequest(path, { method: 'POST', body, auth });
const apiPut = (path, body, auth = false) => apiRequest(path, { method: 'PUT', body, auth });
const apiDelete = (path, auth = false) => apiRequest(path, { method: 'DELETE', auth });

// ----- Authentification -----
const Auth = {
    TOKEN_KEY: 'yboost_token',
    USER_KEY: 'yboost_user',
    LOCAL_ACCOUNTS_KEY: 'yboost_local_accounts',

    getToken() {
        return localStorage.getItem(this.TOKEN_KEY);
    },
    getUser() {
        const raw = localStorage.getItem(this.USER_KEY);
        return raw ? JSON.parse(raw) : null;
    },
    isLoggedIn() {
        return !!this.getToken();
    },
    isLocal() {
        const token = this.getToken();
        return !!token && token.startsWith('local-');
    },
    setSession(token, user) {
        localStorage.setItem(this.TOKEN_KEY, token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    },
    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
    },
    getLocalAccounts() {
        const raw = localStorage.getItem(this.LOCAL_ACCOUNTS_KEY);
        return raw ? JSON.parse(raw) : {};
    },
    saveLocalAccounts(accounts) {
        localStorage.setItem(this.LOCAL_ACCOUNTS_KEY, JSON.stringify(accounts));
    },

    async register({ email, motDePasse, prenom, nom }) {
        try {
            const data = await apiPost('/api/auth/register', { email, mot_de_passe: motDePasse, prenom, nom });
            this.setSession(data.token, { email, prenom, nom });
            return { ok: true };
        } catch (e) {
            if (isNetworkError(e)) return this._registerLocal({ email, motDePasse, prenom, nom });
            return { ok: false, error: e.message };
        }
    },

    _registerLocal({ email, motDePasse, prenom, nom }) {
        const accounts = this.getLocalAccounts();
        if (accounts[email]) {
            return { ok: false, error: 'Un compte existe déjà avec cet email.' };
        }
        const id = Date.now();
        accounts[email] = { motDePasse, prenom, nom, id };
        this.saveLocalAccounts(accounts);
        this.setSession(`local-${id}`, { id, email, prenom, nom });
        return { ok: true };
    },

    async login({ email, motDePasse }) {
        try {
            const data = await apiPost('/api/auth/login', { email, mot_de_passe: motDePasse });
            this.setSession(data.token, data.user);
            return { ok: true };
        } catch (e) {
            if (isNetworkError(e)) return this._loginLocal({ email, motDePasse });
            return { ok: false, error: e.message };
        }
    },

    _loginLocal({ email, motDePasse }) {
        const accounts = this.getLocalAccounts();
        const account = accounts[email];
        if (!account || account.motDePasse !== motDePasse) {
            return { ok: false, error: 'Email ou mot de passe incorrect.' };
        }
        this.setSession(`local-${account.id}`, { id: account.id, email, prenom: account.prenom, nom: account.nom });
        return { ok: true };
    },

    async me() {
        if (!this.isLoggedIn()) return null;
        if (this.isLocal()) return this.getUser();
        try {
            const data = await apiGet('/api/auth/me', true);
            this.setSession(this.getToken(), data);
            return data;
        } catch (e) {
            return this.getUser();
        }
    },
};

// ----- Panier (API réelle) -----
const CartAPI = {
    getPanier: () => apiGet('/api/panier', true),
    ajouter: (body) => apiPost('/api/panier', body, true),
    modifierQuantite: (ligneId, quantite) => apiPut(`/api/panier/${ligneId}`, { quantite }, true),
    supprimer: (ligneId) => apiDelete(`/api/panier/${ligneId}`, true),
};

// ----- Paiement (Stripe) -----
const PaiementAPI = {
    getClesPubliques: () => apiGet('/api/paiement/cles'),
    creerIntent: () => apiRequest('/api/paiement/intent', { method: 'POST', body: {}, auth: true, timeout: 10000 }),
    confirmer: (paymentIntentId, adresseLivraisonId) =>
        apiRequest('/api/paiement/confirmer', {
            method: 'POST',
            body: { payment_intent_id: paymentIntentId, adresse_livraison_id: adresseLivraisonId || null },
            auth: true,
            timeout: 10000,
        }),
};
