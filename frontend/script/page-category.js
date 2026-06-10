// Page catégorie : ?genre=Femme&categorie=jeansF (categorie optionnel)

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const genre = params.get('genre') === 'Homme' ? 'Homme' : 'Femme';
    const categorie = params.get('categorie');

    const cats = CATEGORIES.filter((c) => c.genre === genre);
    const activeCat = categorie ? cats.find((c) => c.slug === categorie) : null;

    document.getElementById('page-title').textContent = activeCat ? activeCat.nom : genre;
    document.title = `YBOOST — ${activeCat ? activeCat.nom : genre}`;

    const tabsEl = document.getElementById('category-tabs');
    const tabs = [`<a href="categorie.html?genre=${genre}"${!categorie ? ' class="is-active"' : ''}>Tout</a>`];
    cats.forEach((c) => {
        const isActive = categorie === c.slug;
        tabs.push(
            `<a href="categorie.html?genre=${genre}&categorie=${encodeURIComponent(c.slug)}"${isActive ? ' class="is-active"' : ''}>${c.nom}</a>`
        );
    });
    tabsEl.innerHTML = tabs.join('');

    const sortSelect = document.getElementById('sort-select');
    const grid = document.getElementById('products-grid');
    const countEl = document.getElementById('product-count');
    const emptyEl = document.getElementById('empty-state');

    async function loadProducts() {
        const produits = await Catalog.getProduits({ genre, categorie, sort: sortSelect.value });
        countEl.textContent = `${produits.length} article${produits.length > 1 ? 's' : ''}`;

        if (produits.length === 0) {
            grid.innerHTML = '';
            emptyEl.style.display = 'block';
            return;
        }
        emptyEl.style.display = 'none';
        grid.innerHTML = produits.map(renderProductCard).join('');
        bindFavoriteButtons(grid);
    }

    sortSelect.addEventListener('change', loadProducts);
    loadProducts();
});
