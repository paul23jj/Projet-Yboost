// Page panier : liste des articles, quantités, suppression, total

const TRASH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>';

document.addEventListener('DOMContentLoaded', () => {
    const itemsEl = document.getElementById('cart-items');
    const emptyEl = document.getElementById('empty-cart');
    const summaryEl = document.getElementById('cart-summary');
    const totalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const feedbackEl = document.getElementById('cart-feedback');

    async function render() {
        const items = await Cart.getItems();

        if (items.length === 0) {
            itemsEl.innerHTML = '';
            emptyEl.style.display = 'block';
            summaryEl.style.display = 'none';
            checkoutBtn.style.display = 'none';
            return;
        }

        emptyEl.style.display = 'none';
        summaryEl.style.display = 'flex';
        checkoutBtn.style.display = 'inline-flex';

        itemsEl.innerHTML = items.map((item) => `
            <div class="cart-item" data-ligne-id="${item.ligneId}">
                <img src="${item.image}" alt="">
                <div class="cart-item__info">
                    <p class="cart-item__name">${escapeHtml(item.nom)}</p>
                    <p class="cart-item__variant">${[item.taille ? `Taille ${item.taille}` : '', item.couleur || ''].filter(Boolean).map(escapeHtml).join(' · ')}</p>
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
    }

    checkoutBtn.addEventListener('click', () => {
        feedbackEl.textContent = "La validation de commande n'est pas disponible dans cette démo.";
    });

    render();
});
