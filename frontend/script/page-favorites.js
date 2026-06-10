// Page favoris : grille des produits ajoutés aux favoris (localStorage)

document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('favorites-grid');
    const emptyEl = document.getElementById('empty-favorites');

    const ids = Wishlist.getIds();
    const produits = (await Promise.all(ids.map((id) => Catalog.getProduitById(id)))).filter(Boolean);

    if (produits.length === 0) {
        grid.innerHTML = '';
        emptyEl.style.display = 'block';
        return;
    }

    emptyEl.style.display = 'none';
    grid.innerHTML = produits.map(renderProductCard).join('');

    grid.querySelectorAll('.product-card').forEach((card) => {
        const btn = card.querySelector('[data-favorite]');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            Wishlist.toggle(btn.dataset.favorite);
            card.remove();
            if (grid.children.length === 0) {
                emptyEl.style.display = 'block';
            }
        });
    });
});
