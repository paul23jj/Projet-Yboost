// Page d'accueil : carrousels "Nouveautés" Femme et Homme

async function loadCarousel(genre, sectionId) {
    const section = document.getElementById(sectionId);
    const track = section.querySelector('.carousel__track');

    const produits = await Catalog.getProduits({ genre });
    const nouveautes = produits.filter((p) => p.numProduit === 1);

    track.innerHTML = nouveautes.map(renderProductCard).join('');
    bindFavoriteButtons(track);
    initCarousel(section.querySelector('.carousel'));
}

document.addEventListener('DOMContentLoaded', () => {
    loadCarousel('Femme', 'carousel-femme');
    loadCarousel('Homme', 'carousel-homme');
});