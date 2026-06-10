const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { creerPaymentIntent, confirmerPaiement, getClePublique } = require('../controllers/paiementController');

router.get('/cles', getClePublique);

router.post('/intent', auth, creerPaymentIntent);

router.post('/confirmer', auth, confirmerPaiement);

module.exports = router;