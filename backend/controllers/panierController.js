const db = require('../config/db');

const getPanierOrCreate = async (utilisateur_id) => {
    const [rows] = await db.query(
        'SELECT id FROM panier WHERE utilisateur_id = ? LIMIT 1',
        [utilisateur_id]
    );
    if (rows.length > 0) return rows[0].id;

    const [result] = await db.query(
        'INSERT INTO panier (utilisateur_id) VALUES (?)',
        [utilisateur_id]
    );
    return result.insertId;
};

const getPanier = async (req, res) => {
    try {
        const panier_id = await getPanierOrCreate(req.user.id);
        const [lignes] = await db.query(`
            SELECT pl.id, pl.quantite,
                   p.id AS produit_id, p.nom, p.prix, p.num_produit,
                   c.slug AS categorie_slug, g.nom AS genre_nom,
                   t.libelle AS taille, col.nom AS couleur, col.hex_code
            FROM panier_ligne pl
            JOIN produit p ON pl.produit_id = p.id
            JOIN categorie c ON p.categorie_id = c.id
            JOIN genre g ON c.genre_id = g.id
            LEFT JOIN taille t ON pl.taille_id = t.id
            LEFT JOIN couleur col ON pl.couleur_id = col.id
            WHERE pl.panier_id = ?
        `, [panier_id]);

        const total = lignes.reduce((sum, l) => sum + l.prix * l.quantite, 0);
        res.json({ lignes, total: total.toFixed(2) });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const ajouterAuPanier = async (req, res) => {
    const { produit_id, taille_id, couleur_id, quantite = 1 } = req.body;
    if (!produit_id) return res.status(400).json({ message: 'produit_id requis' });

    try {
        const panier_id = await getPanierOrCreate(req.user.id);

        const [existing] = await db.query(
            'SELECT id, quantite FROM panier_ligne WHERE panier_id = ? AND produit_id = ? AND taille_id <=> ? AND couleur_id <=> ?',
            [panier_id, produit_id, taille_id || null, couleur_id || null]
        );

        if (existing.length > 0) {
            await db.query(
                'UPDATE panier_ligne SET quantite = quantite + ? WHERE id = ?',
                [quantite, existing[0].id]
            );
        } else {
            await db.query(
                'INSERT INTO panier_ligne (panier_id, produit_id, taille_id, couleur_id, quantite) VALUES (?, ?, ?, ?, ?)',
                [panier_id, produit_id, taille_id || null, couleur_id || null, quantite]
            );
        }

        res.status(201).json({ message: 'Produit ajouté au panier' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const modifierQuantite = async (req, res) => {
    const { ligne_id } = req.params;
    const { quantite } = req.body;

    if (!quantite || quantite < 1) {
        return res.status(400).json({ message: 'Quantité invalide' });
    }

    try {
        await db.query('UPDATE panier_ligne SET quantite = ? WHERE id = ?', [quantite, ligne_id]);
        res.json({ message: 'Quantité mise à jour' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const supprimerDuPanier = async (req, res) => {
    const { ligne_id } = req.params;
    try {
        await db.query('DELETE FROM panier_ligne WHERE id = ?', [ligne_id]);
        res.json({ message: 'Produit retiré du panier' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = { getPanier, ajouterAuPanier, modifierQuantite, supprimerDuPanier };
