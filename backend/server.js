const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const assetsPath = path.join(__dirname, process.env.ASSETS_PATH || '../assets');
app.use('/assets', express.static(assetsPath));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/produits', require('./routes/promo'));
app.use('/api/produits', require('./routes/produits'));
app.use('/api', require('./routes/shop'));
app.use('/api/livraison', require('./routes/livraison'));
app.use('/api/paiement', require('./routes/paiement'));

app.get('/api/categories', (req, res) => {
    const { getCategories } = require('./controllers/produitController');
    return getCategories(req, res);
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route introuvable' });
});

app.listen(PORT, () => {
    console.log(`Serveur YBoost démarré sur http://localhost:${PORT}`);
});
