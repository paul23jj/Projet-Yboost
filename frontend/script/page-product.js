// Page produit : ?id=N

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const produit = id ? await Catalog.getProduitById(id) : null;

    if (!produit) {
        document.getElementById('product-detail').style.display = 'none';
        document.getElementById('not-found').style.display = 'block';
        return;
    }

    document.title = `YBOOST — ${produit.nom}`;

    document.getElementById('breadcrumb').innerHTML =
        `<a href="index.html">Accueil</a> / <a href="categorie.html?genre=${produit.genre}">${produit.genre}</a> / ` +
        `<a href="categorie.html?genre=${produit.genre}&categorie=${encodeURIComponent(produit.categorieSlug)}">${produit.categorieNom}</a>`;

    // Galerie
    const mainImage = document.getElementById('main-image');
    mainImage.src = produit.images[0] || '';
    mainImage.alt = produit.nom;

    const thumbsEl = document.getElementById('gallery-thumbs');
    thumbsEl.innerHTML = produit.images
        .map((img, i) => `<img src="${img}" alt="" class="${i === 0 ? 'is-active' : ''}">`)
        .join('');
    thumbsEl.querySelectorAll('img').forEach((thumb) => {
        thumb.addEventListener('click', () => {
            mainImage.src = thumb.src;
            thumbsEl.querySelectorAll('img').forEach((t) => t.classList.remove('is-active'));
            thumb.classList.add('is-active');
        });
    });

    // Infos
    document.getElementById('product-name').textContent = produit.nom;
    document.getElementById('product-price').textContent = formatPrice(produit.prix);
    document.getElementById('product-description').textContent = produit.description;

    // Tailles
    let selectedTaille = null;
    const sizeEl = document.getElementById('size-options');
    sizeEl.innerHTML = produit.tailles
        .map((t) => `<button type="button" data-id="${t.id}" data-libelle="${escapeHtml(t.libelle)}">${escapeHtml(t.libelle)}</button>`)
        .join('');
    sizeEl.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
            sizeEl.querySelectorAll('button').forEach((b) => b.classList.remove('is-selected'));
            btn.classList.add('is-selected');
            selectedTaille = { id: Number(btn.dataset.id), libelle: btn.dataset.libelle };
            feedbackEl.textContent = '';
        });
    });

    // Couleurs
    let selectedCouleur = null;
    const colorEl = document.getElementById('color-options');
    colorEl.innerHTML = produit.couleurs
        .map((c) => `<button type="button" class="color-swatch" style="background:${c.hex}" data-id="${c.id}" data-nom="${escapeHtml(c.nom)}" title="${escapeHtml(c.nom)}" aria-label="${escapeHtml(c.nom)}"></button>`)
        .join('');
    colorEl.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
            colorEl.querySelectorAll('button').forEach((b) => b.classList.remove('is-selected'));
            btn.classList.add('is-selected');
            selectedCouleur = { id: Number(btn.dataset.id), nom: btn.dataset.nom };
        });
    });

    // Favoris
    const favBtn = document.getElementById('favorite-btn');
    favBtn.classList.toggle('is-active', Wishlist.has(produit.id));
    favBtn.addEventListener('click', () => {
        const isActive = Wishlist.toggle(produit.id);
        favBtn.classList.toggle('is-active', isActive);
    });

    // Ajout au panier
    const addBtn = document.getElementById('add-to-cart-btn');
    const feedbackEl = document.getElementById('product-feedback');
    addBtn.addEventListener('click', async () => {
        if (produit.tailles.length > 0 && !selectedTaille) {
            feedbackEl.textContent = 'Merci de sélectionner une taille.';
            return;
        }

        addBtn.disabled = true;
        const result = await Cart.addItem({
            produit,
            tailleLibelle: selectedTaille ? selectedTaille.libelle : null,
            tailleId: selectedTaille ? selectedTaille.id : null,
            couleurNom: selectedCouleur ? selectedCouleur.nom : null,
            couleurId: selectedCouleur ? selectedCouleur.id : null,
            quantite: 1,
        });
        addBtn.disabled = false;

        feedbackEl.textContent = result.ok ? 'Ajouté au panier !' : (result.error || "Erreur lors de l'ajout au panier.");
    });
});