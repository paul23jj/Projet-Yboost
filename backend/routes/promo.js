const express = require('express');
const router = express.Router();
const { getPromos, setPromo, removePromo, updateStock } = require('../controllers/promoController');

router.get('/promos', getPromos);

router.put('/:id/promo', setPromo);

router.delete('/:id/promo', removePromo);

router.put('/:id/stock', updateStock);

module.exports = router;