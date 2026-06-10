const db = require('../config/db');

const passerCommande = async (req, res) => {
    const { adresse_livraison_id } = req.body;
    const utilisateur_id = req.user.id;

    if (!adresse_livraison_id) {
        return res.status(400).json({ message: 'Adresse de livraison requise' });
    }

    try {
        const [paniers] = await db.query(
            'SELECT id FROM panier WHERE utilisateur_id = ?', [utilisateur_id]
        );
        if (paniers.length === 0) return res.status(400).json({ message: 'Panier vide' });

        const panier_id = paniers[0].id;
        const [lignes] = await db.query(`
            SELECT pl.*, p.prix, p.stock
            FROM panier_ligne pl
            JOIN produit p ON pl.produit_id = p.id
            WHERE pl.panier_id = ?
        `, [panier_id]);

        if (lignes.length === 0) return res.status(400).json({ message: 'Panier vide' });

        const total = lignes.reduce((sum, l) => sum + l.prix * l.quantite, 0);

        const [cmdResult] = await db.query(
            'INSERT INTO commande (utilisateur_id, adresse_livraison_id, total) VALUES (?, ?, ?)',
            [utilisateur_id, adresse_livraison_id, total.toFixed(2)]
        );
        const commande_id = cmdResult.insertId;

        for (const ligne of lignes) {
            await db.query(
                'INSERT INTO commande_ligne (commande_id, produit_id, taille_id, couleur_id, quantite, prix_unitaire) VALUES (?, ?, ?, ?, ?, ?)',
                [commande_id, ligne.produit_id, ligne.taille_id, ligne.couleur_id, ligne.quantite, ligne.prix]
            );
        }

        await db.query('DELETE FROM panier_ligne WHERE panier_id = ?', [panier_id]);

        res.status(201).json({ message: 'Commande passée avec succès', commande_id, total: total.toFixed(2) });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const getMesCommandes = async (req, res) => {
    try {
        const [commandes] = await db.query(`
            SELECT c.id, c.statut, c.total, c.created_at,
                   a.rue, a.ville, a.code_postal
            FROM commande c
            LEFT JOIN adresse a ON c.adresse_livraison_id = a.id
            WHERE c.utilisateur_id = ?
            ORDER BY c.created_at DESC
        `, [req.user.id]);

        for (const cmd of commandes) {
            const [lignes] = await db.query(`
                SELECT cl.quantite, cl.prix_unitaire,
                       p.nom, p.num_produit, c.slug, g.nom AS genre
                FROM commande_ligne cl
                JOIN produit p ON cl.produit_id = p.id
                JOIN categorie c ON p.categorie_id = c.id
                JOIN genre g ON c.genre_id = g.id
                WHERE cl.commande_id = ?
            `, [cmd.id]);
            cmd.lignes = lignes;
        }

        res.json(commandes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = { passerCommande, getMesCommandes };
