const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { email, mot_de_passe, prenom, nom } = req.body;

    if (!email || !mot_de_passe) {
        return res.status(400).json({ message: 'Email et mot de passe requis' });
    }

    try {
        const [existing] = await db.query('SELECT id FROM utilisateur WHERE email = ?', [email]);
        if (existing.length > 0) {
            return res.status(409).json({ message: 'Email déjà utilisé' });
        }

        const hash = await bcrypt.hash(mot_de_passe, 10);
        const [result] = await db.query(
            'INSERT INTO utilisateur (email, mot_de_passe, prenom, nom) VALUES (?, ?, ?, ?)',
            [email, hash, prenom || null, nom || null]
        );

        const token = jwt.sign(
            { id: result.insertId, email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.status(201).json({ message: 'Compte créé', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const login = async (req, res) => {
    const { email, mot_de_passe } = req.body;

    if (!email || !mot_de_passe) {
        return res.status(400).json({ message: 'Email et mot de passe requis' });
    }

    try {
        const [rows] = await db.query('SELECT * FROM utilisateur WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Identifiants incorrects' });
        }

        const user = rows[0];
        const valid = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
        if (!valid) {
            return res.status(401).json({ message: 'Identifiants incorrects' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            token,
            user: { id: user.id, email: user.email, prenom: user.prenom, nom: user.nom }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const me = async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT id, email, prenom, nom, telephone, created_at FROM utilisateur WHERE id = ?',
            [req.user.id]
        );
        if (rows.length === 0) return res.status(404).json({ message: 'Utilisateur introuvable' });
        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = { register, login, me };
