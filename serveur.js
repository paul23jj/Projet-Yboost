//imports
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const aiServices = require('./Services/aiServices');

const app = express();
const PORT = process.env.PORT || 3000;

//autorise le site web à envoyer des requêtes au navigateur
app.use(cors());
//transforme le texte reçu par le client en JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API YBoost')
});
