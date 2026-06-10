const express = require('express');
const router = express.Router();
const { rechercherAdresse, estimerLivraison } = require('../controllers/livraisonController');

router.get('/adresses', rechercherAdresse);

router.post('/estimer', estimerLivraison);

module.exports = router;