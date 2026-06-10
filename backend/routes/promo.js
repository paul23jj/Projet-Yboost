const express = require('express');
const router = express.Router();
const { getPromos, setPromo, removePromo, updateStock } = require('../controllers/promoController');

// GET /api/produits/promos — tous les produits en promo
router.get('/promos', getPromos);

// PUT /api/produits/:id/promo — appliquer une réduction
router.put('/:id/promo', setPromo);

// DELETE /api/produits/:id/promo — supprimer une réduction
router.delete('/:id/promo', removePromo);

// PUT /api/produits/:id/stock — modifier le stock
router.put('/:id/stock', updateStock);

module.exports = router;