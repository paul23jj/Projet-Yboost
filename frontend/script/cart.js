// Panier unifié : API réelle (utilisateur connecté + backend dispo) ou localStorage (invité)

const Cart = {
    LOCAL_KEY: 'yboost_cart_local',

    useApi() {
        return Auth.isLoggedIn() && !Auth.isLocal();
    },

    _getLocal() {
        const raw = localStorage.getItem(this.LOCAL_KEY);
        return raw ? JSON.parse(raw) : [];
    },

    _saveLocal(items) {
        localStorage.setItem(this.LOCAL_KEY, JSON.stringify(items));
        this.updateBadge();
    },

    async getItems() {
        if (this.useApi()) {
            try {
                const data = await CartAPI.getPanier();
                return (data.lignes || []).map((l) => {
                    const local = findLocalProduct(l.produit_id);
                    return {
                        ligneId: l.id,
                        produitId: l.produit_id,
                        nom: l.nom,
                        prix: parseFloat(l.prix),
                        taille: l.taille,
                        couleur: l.couleur,
                        quantite: l.quantite,
                        image: local ? local.images[0] : '',
                    };
                });
            } catch (e) {
                return [];
            }
        }
        return this._getLocal();
    },

    async getTotal() {
        const items = await this.getItems();
        return items.reduce((sum, i) => sum + i.prix * i.quantite, 0);
    },

    async addItem({ produit, tailleLibelle, tailleId, couleurNom, couleurId, quantite = 1 }) {
        if (this.useApi()) {
            try {
                await CartAPI.ajouter({ produit_id: produit.id, taille_id: tailleId || null, couleur_id: couleurId || null, quantite });
                this.updateBadge();
                return { ok: true };
            } catch (e) {
                return { ok: false, error: e.message };
            }
        }

        const items = this._getLocal();
        const existing = items.find(
            (i) => i.produitId === produit.id && i.taille === (tailleLibelle || null) && i.couleur === (couleurNom || null)
        );
        if (existing) {
            existing.quantite += quantite;
        } else {
            items.push({
                ligneId: `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                produitId: produit.id,
                nom: produit.nom,
                prix: produit.prix,
                taille: tailleLibelle || null,
                couleur: couleurNom || null,
                quantite,
                image: produit.images[0] || '',
            });
        }
        this._saveLocal(items);
        return { ok: true };
    },

    async updateQuantity(ligneId, quantite) {
        if (this.useApi() && !String(ligneId).startsWith('local-')) {
            try {
                await CartAPI.modifierQuantite(ligneId, quantite);
                return { ok: true };
            } catch (e) {
                return { ok: false, error: e.message };
            }
        }
        const items = this._getLocal();
        const item = items.find((i) => i.ligneId === ligneId);
        if (item) item.quantite = quantite;
        this._saveLocal(items);
        return { ok: true };
    },

    async removeItem(ligneId) {
        if (this.useApi() && !String(ligneId).startsWith('local-')) {
            try {
                await CartAPI.supprimer(ligneId);
                return { ok: true };
            } catch (e) {
                return { ok: false, error: e.message };
            }
        }
        const items = this._getLocal().filter((i) => i.ligneId !== ligneId);
        this._saveLocal(items);
        return { ok: true };
    },

    async getCount() {
        const items = await this.getItems();
        return items.reduce((sum, i) => sum + i.quantite, 0);
    },

    async updateBadge() {
        const badge = document.getElementById('cart-badge');
        if (!badge) return;
        const count = await this.getCount();
        badge.textContent = String(count);
        badge.dataset.count = String(count);
    },
};