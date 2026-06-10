// Page panier : liste des articles, quantités, suppression, total

const TRASH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>';

document.addEventListener('DOMContentLoaded', () => {
    const itemsEl = document.getElementById('cart-items');
    const emptyEl = document.getElementById('empty-cart');
    const summaryEl = document.getElementById('cart-summary');
    const totalEl = document.getElementById('cart-total');
    const feedbackEl = document.getElementById('cart-feedback');
    const checkoutSection = document.getElementById('checkout-section');
    const loginRequiredEl = document.getElementById('login-required');
    const paymentErrorEl = document.getElementById('payment-error');
    const payBtn = document.getElementById('pay-btn');

    let stripe = null;
    let cardElement = null;
    let stripeReady = false;

    async function initStripe() {
        if (stripeReady) return true;
        if (typeof Stripe !== 'function') return false;
        try {
            const { publishable_key } = await PaiementAPI.getClesPubliques();
            if (!publishable_key) return false;
            stripe = Stripe(publishable_key);
            cardElement = stripe.elements().create('card');
            cardElement.mount('#card-element');
            stripeReady = true;
            return true;
        } catch (e) {
            return false;
        }
    }

    async function render() {
        const items = await Cart.getItems();

        if (items.length === 0) {
            itemsEl.innerHTML = '';
            emptyEl.style.display = 'block';
            summaryEl.style.display = 'none';
            checkoutSection.style.display = 'none';
            loginRequiredEl.style.display = 'none';
            return;
        }

        emptyEl.style.display = 'none';
        summaryEl.style.display = 'flex';

        itemsEl.innerHTML = items.map((item) => `
            <div class="cart-item" data-ligne-id="${item.ligneId}">
                <img src="${item.image}" alt="">
                <div class="cart-item__info">
                    <p class="cart-item__name">${escapeHtml(item.nom)}</p>
                    <p class="cart-item__variant">${item.taille ? escapeHtml(`Taille ${item.taille}`) : ''}</p>
                </div>
                <div class="cart-item__qty">
                    <button type="button" data-action="decrease" aria-label="Diminuer la quantité">-</button>
                    <span>${item.quantite}</span>
                    <button type="button" data-action="increase" aria-label="Augmenter la quantité">+</button>
                </div>
                <p class="cart-item__price">${formatPrice(item.prix * item.quantite)}</p>
                <button type="button" class="cart-item__remove" data-action="remove" aria-label="Supprimer cet article">${TRASH_ICON}</button>
            </div>
        `).join('');

        const total = items.reduce((sum, i) => sum + i.prix * i.quantite, 0);
        totalEl.textContent = formatPrice(total);

        itemsEl.querySelectorAll('.cart-item').forEach((el) => {
            const ligneId = el.dataset.ligneId;
            const item = items.find((i) => String(i.ligneId) === ligneId);

            el.querySelector('[data-action="increase"]').addEventListener('click', async () => {
                await Cart.updateQuantity(item.ligneId, item.quantite + 1);
                Cart.updateBadge();
                render();
            });

            el.querySelector('[data-action="decrease"]').addEventListener('click', async () => {
                if (item.quantite <= 1) return;
                await Cart.updateQuantity(item.ligneId, item.quantite - 1);
                Cart.updateBadge();
                render();
            });

            el.querySelector('[data-action="remove"]').addEventListener('click', async () => {
                await Cart.removeItem(item.ligneId);
                Cart.updateBadge();
                render();
            });
        });

        if (Cart.useApi()) {
            loginRequiredEl.style.display = 'none';
            const ready = await initStripe();
            checkoutSection.style.display = ready ? 'block' : 'none';
            if (!ready) feedbackEl.textContent = "Le paiement n'est pas disponible pour le moment.";
        } else {
            checkoutSection.style.display = 'none';
            loginRequiredEl.style.display = 'block';
        }
    }

    payBtn.addEventListener('click', async () => {
        paymentErrorEl.textContent = '';
        feedbackEl.textContent = '';
        feedbackEl.classList.remove('form-success');

        if (!stripeReady) {
            paymentErrorEl.textContent = "Le paiement n'est pas disponible pour le moment.";
            return;
        }

        payBtn.disabled = true;
        payBtn.textContent = 'Paiement en cours...';

        try {
            const intent = await PaiementAPI.creerIntent();
            const result = await stripe.confirmCardPayment(intent.client_secret, {
                payment_method: { card: cardElement },
            });

            if (result.error) {
                paymentErrorEl.textContent = result.error.message || 'Le paiement a échoué.';
                return;
            }

            await PaiementAPI.confirmer(result.paymentIntent.id);
            feedbackEl.textContent = 'Paiement réussi, votre commande a été enregistrée !';
            feedbackEl.classList.add('form-success');
            cardElement.clear();
            Cart.updateBadge();
            await render();
        } catch (e) {
            paymentErrorEl.textContent = e.message || 'Une erreur est survenue.';
        } finally {
            payBtn.disabled = false;
            payBtn.textContent = 'Payer';
        }
    });

    render();
});
