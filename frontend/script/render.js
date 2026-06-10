// Helpers de rendu partagés : carte produit, carrousels, header (menu mobile, badges)

function formatPrice(prix) {
    return `${prix.toFixed(2).replace('.', ',')} €`;
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
}

const HEART_ICON = '<svg viewBox="0 0 24 24"><path d="M12 21s-7.2-4.6-9.8-9.3C0.6 8.6 2.3 5 6 5c2.1 0 3.7 1.1 4.5 2.7C11.4 6.1 13 5 15.1 5c3.7 0 5.4 3.6 3.8 6.7C19.2 16.4 12 21 12 21z"/></svg>';

function renderProductCard(produit) {
    const isFav = Wishlist.has(produit.id);
    const img1 = produit.images[0] || '';
    const img2 = produit.images[1] || img1;
    return `
        <div class="product-card" data-id="${produit.id}">
            <div class="product-card__image-wrap">
                <a href="produit.html?id=${produit.id}">
                    <img class="product-card__img" src="${img1}" alt="${escapeHtml(produit.nom)}" loading="lazy">
                    <img class="product-card__img--hover" src="${img2}" alt="" loading="lazy">
                </a>
                <button class="product-card__favorite${isFav ? ' is-active' : ''}" data-favorite="${produit.id}" aria-label="Ajouter aux favoris">
                    ${HEART_ICON}
                </button>
            </div>
            <a href="produit.html?id=${produit.id}" class="product-card__info">
                <p class="product-card__name">${escapeHtml(produit.nom)}</p>
                <p class="product-card__price">${formatPrice(produit.prix)}</p>
            </a>
        </div>
    `;
}

function bindFavoriteButtons(container) {
    container.querySelectorAll('[data-favorite]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const id = btn.dataset.favorite;
            const isActive = Wishlist.toggle(id);
            btn.classList.toggle('is-active', isActive);
        });
    });
}

function initCarousel(carouselEl) {
    const track = carouselEl.querySelector('.carousel__track');
    const prev = carouselEl.querySelector('.carousel__arrow--prev');
    const next = carouselEl.querySelector('.carousel__arrow--next');
    if (!track) return;
    const scrollAmount = () => track.clientWidth * 0.8;
    prev?.addEventListener('click', () => track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
    next?.addEventListener('click', () => track.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
}

// Initialisation commune du header : menu mobile, mega-menu tactile, recherche, badges
function initHeader() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    menuToggle?.addEventListener('click', () => {
        mainNav.classList.toggle('is-open');
    });

    const isMobile = window.matchMedia('(max-width: 900px)').matches;
    if (isMobile) {
        document.querySelectorAll('.main-nav__item').forEach((item) => {
            const link = item.querySelector('.main-nav__link');
            const mega = item.querySelector('.mega-menu');
            if (link && mega) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    item.classList.toggle('is-open');
                });
            }
        });
    }

    initSearch();
    Cart.updateBadge();
    Wishlist.updateBadge();
}

document.addEventListener('DOMContentLoaded', initHeader);