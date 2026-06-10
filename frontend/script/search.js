// Recherche instantanée dans le catalogue (basée sur PRODUCTS_FALLBACK, toujours disponible)

function initSearch() {
    const toggle = document.getElementById('search-toggle');
    const bar = document.getElementById('search-bar');
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    if (!toggle || !bar || !input || !results) return;

    toggle.addEventListener('click', () => {
        bar.classList.toggle('is-open');
        if (bar.classList.contains('is-open')) {
            input.focus();
        } else {
            results.classList.remove('is-open');
        }
    });

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();
        if (query.length < 2) {
            results.classList.remove('is-open');
            results.innerHTML = '';
            return;
        }

        const matches = PRODUCTS_FALLBACK
            .filter((p) => p.nom.toLowerCase().includes(query) || p.categorieNom.toLowerCase().includes(query))
            .slice(0, 8);

        if (matches.length === 0) {
            results.innerHTML = '<div class="search-results__empty">Aucun résultat</div>';
        } else {
            results.innerHTML = matches.map((p) => `
                <a class="search-results__item" href="produit.html?id=${p.id}">
                    <img src="${p.images[0]}" alt="">
                    <div>
                        <div class="search-results__name">${escapeHtml(p.nom)}</div>
                        <div class="search-results__price">${formatPrice(p.prix)}</div>
                    </div>
                </a>
            `).join('');
        }
        results.classList.add('is-open');
    });

    document.addEventListener('click', (e) => {
        if (!bar.contains(e.target) && !toggle.contains(e.target)) {
            results.classList.remove('is-open');
        }
    });
}