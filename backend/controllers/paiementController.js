const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const db = require('../config/db');

const creerPaymentIntent = async (req, res) => {
    const utilisateur_id = req.user.id;

    try {
        // Récupère le panier de l'utilisateur
        const [paniers] = await db.query(
            'SELECT id FROM panier WHERE utilisateur_id = ?', [utilisateur_id]
        );

        if (paniers.length === 0) {
            return res.status(400).json({ message: 'Panier vide' });
        }

        const panier_id = paniers[0].id;
        const [lignes] = await db.query(`
            SELECT pl.quantite, p.prix
            FROM panier_ligne pl
            JOIN produit p ON pl.produit_id = p.id
            WHERE pl.panier_id = ?
        `, [panier_id]);

        if (lignes.length === 0) {
            return res.status(400).json({ message: 'Panier vide' });
        }

        const total = lignes.reduce((sum, l) => sum + l.prix * l.quantite, 0);
        const totalCentimes = Math.round(total * 100);

        const [users] = await db.query(
            'SELECT email FROM utilisateur WHERE id = ?', [utilisateur_id]
        );

        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalCentimes,
            currency: 'eur',
            receipt_email: users[0].email,
            metadata: {
                utilisateur_id: utilisateur_id.toString(),
                panier_id: panier_id.toString()
            },
            automatic_payment_methods: {
                enabled: true
            }
        });

        res.json({
            client_secret: paymentIntent.client_secret,
            montant: total.toFixed(2),
            montant_centimes: totalCentimes
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur lors de la création du paiement' });
    }
};

const confirmerPaiement = async (req, res) => {
    const { payment_intent_id, adresse_livraison_id } = req.body;
    const utilisateur_id = req.user.id;

    if (!payment_intent_id) {
        return res.status(400).json({ message: 'payment_intent_id requis' });
    }

    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent_id);

        if (paymentIntent.status !== 'succeeded') {
            return res.status(400).json({
                message: 'Paiement non confirmé',
                statut: paymentIntent.status
            });
        }

        const [paniers] = await db.query(
            'SELECT id FROM panier WHERE utilisateur_id = ?', [utilisateur_id]
        );
        if (paniers.length === 0) return res.status(400).json({ message: 'Panier introuvable' });

        const panier_id = paniers[0].id;
        const [lignes] = await db.query(`
            SELECT pl.*, p.prix
            FROM panier_ligne pl
            JOIN produit p ON pl.produit_id = p.id
            WHERE pl.panier_id = ?
        `, [panier_id]);

        const total = lignes.reduce((sum, l) => sum + l.prix * l.quantite, 0);

        const [cmdResult] = await db.query(
            `INSERT INTO commande 
             (utilisateur_id, adresse_livraison_id, statut, total) 
             VALUES (?, ?, 'payee', ?)`,
            [utilisateur_id, adresse_livraison_id || null, total.toFixed(2)]
        );
        const commande_id = cmdResult.insertId;

        for (const ligne of lignes) {
            await db.query(
                `INSERT INTO commande_ligne 
                 (commande_id, produit_id, taille_id, couleur_id, quantite, prix_unitaire) 
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [commande_id, ligne.produit_id, ligne.taille_id, ligne.couleur_id, ligne.quantite, ligne.prix]
            );
        }

        await db.query('DELETE FROM panier_ligne WHERE panier_id = ?', [panier_id]);

        res.json({
            message: 'Paiement confirmé, commande créée !',
            commande_id,
            total: total.toFixed(2),
            stripe_status: paymentIntent.status
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur lors de la confirmation du paiement' });
    }
};

const getClePublique = (req, res) => {
    res.json({ publishable_key: process.env.STRIPE_PUBLISHABLE_KEY });
};

module.exports = { creerPaymentIntent, confirmerPaiement, getClePublique };