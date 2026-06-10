const express = require('express');
const router = express.Router();
const { getAllProduits, getProduitById, getCategories } = require('../controllers/produitController');

router.get('/', getAllProduits);

router.get('/:id', getProduitById);

router.get('/categories/all', getCategories);

module.exports = router;
