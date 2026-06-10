// Couche d'unification du catalogue : essaie l'API réelle, sinon utilise PRODUCTS_FALLBACK.
// Les images viennent toujours de PRODUCTS_FALLBACK (mêmes IDs que la BDD, copie locale
// dans frontend/assets) afin de contourner les bugs d'images du backend.

// Tables de référence (backend/sql/schema.sql et data.sql)
const TAILLE_IDS = { XS: 1, S: 2, M: 3, L: 4, XL: 5, XXL: 6 };

function findLocalProduct(id) {
    return PRODUCTS_FALLBACK.find((p) => p.id === Number(id));
}

function normalizeApiProduct(p, detail = false) {
    const local = findLocalProduct(p.id);
    const base = {
        id: p.id,
        nom: p.nom,
        description: p.description,
        prix: parseFloat(p.prix),
        genre: p.genre_nom,
        categorieSlug: p.categorie_slug,
        categorieNom: p.categorie_nom,
        numProduit: p.num_produit,
        images: local ? local.images : [],
    };
    if (detail) {
        base.tailles = (p.tailles || []).map((t) => ({ id: t.id, libelle: t.libelle }));
    }
    return base;
}

function normalizeFallbackProduct(p, detail = false) {
    const base = {
        id: p.id,
        nom: p.nom,
        description: p.description,
        prix: p.prix,
        genre: p.genre,
        categorieSlug: p.categorieSlug,
        categorieNom: p.categorieNom,
        numProduit: p.numProduit,
        images: p.images,
    };
    if (detail) {
        base.tailles = p.tailles.map((libelle) => ({ id: TAILLE_IDS[libelle], libelle }));
    }
    return base;
}

function sortProducts(produits, sort) {
    const sorted = [...produits];
    if (sort === 'price-asc') sorted.sort((a, b) => a.prix - b.prix);
    else if (sort === 'price-desc') sorted.sort((a, b) => b.prix - a.prix);
    return sorted;
}

const Catalog = {
    // Retourne les 11 catégories avec une image de vignette (1er produit, 1ère image)
    async getCategories() {
        return CATEGORIES.map((cat) => {
            const produit = PRODUCTS_FALLBACK.find((p) => p.categorieSlug === cat.slug && p.numProduit === 1);
            return {
                id: cat.id,
                slug: cat.slug,
                nom: cat.nom,
                genre: cat.genre,
                image: produit ? produit.images[0] : '',
            };
        });
    },

    async getProduits({ genre, categorie, sort } = {}) {
        try {
            const params = new URLSearchParams();
            if (genre) params.set('genre', genre);
            if (categorie) params.set('categorie', categorie);
            params.set('limit', '100');
            const data = await apiGet(`/api/produits?${params.toString()}`);
            const produits = (data.data || []).map((p) => normalizeApiProduct(p));
            return sortProducts(produits, sort);
        } catch (e) {
            const produits = PRODUCTS_FALLBACK
                .filter((p) => (!genre || p.genre === genre) && (!categorie || p.categorieSlug === categorie))
                .map((p) => normalizeFallbackProduct(p));
            return sortProducts(produits, sort);
        }
    },

    async getProduitById(id) {
        const numId = Number(id);
        try {
            const data = await apiGet(`/api/produits/${numId}`);
            return normalizeApiProduct(data, true);
        } catch (e) {
            const p = findLocalProduct(numId);
            return p ? normalizeFallbackProduct(p, true) : null;
        }
    },
};