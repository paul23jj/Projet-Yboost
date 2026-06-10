const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getPanier, ajouterAuPanier, modifierQuantite, supprimerDuPanier } = require('../controllers/panierController');
const { passerCommande, getMesCommandes } = require('../controllers/commandeController');

router.get('/panier', auth, getPanier);
router.post('/panier', auth, ajouterAuPanier);
router.put('/panier/:ligne_id', auth, modifierQuantite);
router.delete('/panier/:ligne_id', auth, supprimerDuPanier);

router.post('/commandes', auth, passerCommande);
router.get('/commandes', auth, getMesCommandes);

module.exports = router;
