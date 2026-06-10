const db = require('../config/db');

// ----------------------------------------------------------------
// GET /api/produits/promos
// Retourne tous les produits en promotion (prix_reduit non null
// et date_fin_promo pas encore passée)
// ----------------------------------------------------------------
const getPromos = async (req, res) => {
    try {
        const [produits] = await db.query(`
            SELECT p.*, c.nom AS categorie_nom, c.slug AS categorie_slug, g.nom AS genre_nom,
                   ROUND((1 - p.prix_reduit / p.prix) * 100) AS reduction_pct
            FROM produit p
            JOIN categorie c ON p.categorie_id = c.id
            JOIN genre g ON c.genre_id = g.id
            WHERE p.actif = 1
            AND p.prix_reduit IS NOT NULL
            AND (p.date_fin_promo IS NULL OR p.date_fin_promo > NOW())
            ORDER BY reduction_pct DESC
        `);

        const SLUG_TYPE_MAP = {
            jeansF: 'jean', pentalonsF: 'pent', robesF: 'robe',
            shortsF: 'short', TopF: 'top', jeansH: 'jean',
            pentalonsH: 'pent', 'pull.giletsH': 'pull',
            sweatH: 'sweat', 't-shirtH': 't-shirt', vestesH: 'veste'
        };

        const produitsAvecImages = produits.map(p => ({
            ...p,
            urls_images: {
                affiche: `/assets/${p.genre_nom}/${p.categorie_slug}/affiche${p.num_produit}.jpg`,
                images: Array.from({ length: 3 }, (_, i) =>
                    `/assets/${p.genre_nom}/${p.categorie_slug}/${SLUG_TYPE_MAP[p.categorie_slug]}${p.num_produit}.10img${i + 1}.3.jpg`
                )
            }
        }));

        res.json(produitsAvecImages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// ----------------------------------------------------------------
// PUT /api/produits/:id/promo
// Ajoute ou modifie une réduction sur un produit
// Body: { prix_reduit, date_fin_promo (optionnel) }
// ----------------------------------------------------------------
const setPromo = async (req, res) => {
    const { id } = req.params;
    const { prix_reduit, date_fin_promo } = req.body;

    if (!prix_reduit) {
        return res.status(400).json({ message: 'prix_reduit requis' });
    }

    try {
        // Vérifie que le produit existe
        const [rows] = await db.query('SELECT prix FROM produit WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Produit introuvable' });

        const prixOriginal = rows[0].prix;

        if (parseFloat(prix_reduit) >= parseFloat(prixOriginal)) {
            return res.status(400).json({ message: 'Le prix réduit doit être inférieur au prix original' });
        }

        await db.query(
            'UPDATE produit SET prix_reduit = ?, date_fin_promo = ? WHERE id = ?',
            [prix_reduit, date_fin_promo || null, id]
        );

        const reduction = Math.round((1 - prix_reduit / prixOriginal) * 100);

        res.json({
            message: 'Promotion appliquée',
            prix_original: prixOriginal,
            prix_reduit: parseFloat(prix_reduit),
            reduction_pct: reduction,
            date_fin_promo: date_fin_promo || 'Sans limite'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// ----------------------------------------------------------------
// DELETE /api/produits/:id/promo
// Supprime la réduction d'un produit
// ----------------------------------------------------------------
const removePromo = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query(
            'UPDATE produit SET prix_reduit = NULL, date_fin_promo = NULL WHERE id = ?',
            [id]
        );
        res.json({ message: 'Promotion supprimée' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// ----------------------------------------------------------------
// PUT /api/produits/:id/stock
// Modifier le stock d'un produit
// Body: { stock } ou { taille_id, stock_taille }
// ----------------------------------------------------------------
const updateStock = async (req, res) => {
    const { id } = req.params;
    const { stock, taille_id, stock_taille } = req.body;

    try {
        if (taille_id && stock_taille !== undefined) {
            // Met à jour le stock pour une taille spécifique
            await db.query(
                'UPDATE produit_taille SET stock_taille = ? WHERE produit_id = ? AND taille_id = ?',
                [stock_taille, id, taille_id]
            );
            res.json({ message: 'Stock par taille mis à jour' });
        } else if (stock !== undefined) {
            // Met à jour le stock global
            await db.query('UPDATE produit SET stock = ? WHERE id = ?', [stock, id]);
            res.json({ message: 'Stock global mis à jour' });
        } else {
            res.status(400).json({ message: 'stock ou (taille_id + stock_taille) requis' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = { getPromos, setPromo, removePromo, updateStock };