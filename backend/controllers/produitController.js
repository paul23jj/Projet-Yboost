const db = require('../config/db');

const buildImageUrls = (categorie_slug, genre_nom, num_produit, type_fichier, nb_images = 3) => {
    const base = `/assets/${genre_nom}/${categorie_slug}`;
    return {
        affiche: `${base}/affiche${num_produit}.jpg`,
        images: Array.from({ length: nb_images }, (_, i) =>
            `${base}/${type_fichier}${num_produit}.10img${i + 1}.3.jpg`
        )
    };
};

// Mapping slug -> préfixe de fichier image
const SLUG_TYPE_MAP = {
    jeansF: 'jean',
    pentalonsF: 'pantalon',
    robesF: 'robe',
    shortsF: 'short',
    TopF: 'top',
    jeansH: 'jean',
    pentalonsH: 'pantalon',
    'pull.giletsH': 'pull',
    sweatH: 'sweat',
    't-shirtH': 'tshirt',
    vestesH: 'veste'
};

const getAllProduits = async (req, res) => {
    const { genre, categorie, page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;

    try {
        let query = `
            SELECT p.*, c.nom AS categorie_nom, c.slug AS categorie_slug, g.nom AS genre_nom
            FROM produit p
            JOIN categorie c ON p.categorie_id = c.id
            JOIN genre g ON c.genre_id = g.id
            WHERE p.actif = 1
        `;
        const params = [];

        if (genre) {
            query += ' AND g.nom = ?';
            params.push(genre);
        }
        if (categorie) {
            query += ' AND c.slug = ?';
            params.push(categorie);
        }

        const [countResult] = await db.query(
            query.replace('SELECT p.*, c.nom AS categorie_nom, c.slug AS categorie_slug, g.nom AS genre_nom', 'SELECT COUNT(*) as total'),
            params
        );

        query += ' ORDER BY p.id ASC LIMIT ? OFFSET ?';
        params.push(parseInt(limit), parseInt(offset));

        const [produits] = await db.query(query, params);

        const produitsAvecImages = produits.map(p => ({
            ...p,
            urls_images: buildImageUrls(
                p.categorie_slug,
                p.genre_nom,
                p.num_produit,
                SLUG_TYPE_MAP[p.categorie_slug] || 'produit'
            )
        }));

        res.json({
            data: produitsAvecImages,
            pagination: {
                total: countResult[0].total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(countResult[0].total / limit)
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const getProduitById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query(`
            SELECT p.*, c.nom AS categorie_nom, c.slug AS categorie_slug, g.nom AS genre_nom
            FROM produit p
            JOIN categorie c ON p.categorie_id = c.id
            JOIN genre g ON c.genre_id = g.id
            WHERE p.id = ? AND p.actif = 1
        `, [id]);

        if (rows.length === 0) return res.status(404).json({ message: 'Produit introuvable' });

        const p = rows[0];

        const [tailles] = await db.query(`
            SELECT t.id, t.libelle, pt.stock_taille
            FROM produit_taille pt
            JOIN taille t ON pt.taille_id = t.id
            WHERE pt.produit_id = ?
        `, [id]);

        const [couleurs] = await db.query(`
            SELECT c.id, c.nom, c.hex_code
            FROM produit_couleur pc
            JOIN couleur c ON pc.couleur_id = c.id
            WHERE pc.produit_id = ?
        `, [id]);

        res.json({
            ...p,
            urls_images: buildImageUrls(
                p.categorie_slug,
                p.genre_nom,
                p.num_produit,
                SLUG_TYPE_MAP[p.categorie_slug] || 'produit'
            ),
            tailles,
            couleurs
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const getCategories = async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT c.*, g.nom AS genre_nom
            FROM categorie c
            JOIN genre g ON c.genre_id = g.id
            ORDER BY g.id, c.nom
        `);

        const grouped = rows.reduce((acc, cat) => {
            if (!acc[cat.genre_nom]) acc[cat.genre_nom] = [];
            acc[cat.genre_nom].push({
                id: cat.id,
                nom: cat.nom,
                slug: cat.slug,
                affiche: `/assets/${cat.genre_nom}/${cat.slug}/affiche.jpg`
            });
            return acc;
        }, {});

        res.json(grouped);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = { getAllProduits, getProduitById, getCategories };
