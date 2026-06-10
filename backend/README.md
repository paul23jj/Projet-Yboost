# YBoost Backend — Clone Bershka

API REST Node.js/Express/MySQL pour le projet YBoost.

## 📁 Structure du projet

```
yboost-backend/
├── server.js               ← Point d'entrée
├── .env.example            ← Variables d'environnement
├── config/
│   └── db.js               ← Connexion MySQL
├── middleware/
│   └── auth.js             ← Middleware JWT
├── controllers/
│   ├── authController.js   ← Register / Login / Me
│   ├── produitController.js← Produits + Catégories
│   ├── panierController.js ← Panier
│   └── commandeController.js← Commandes
├── routes/
│   ├── auth.js
│   ├── produits.js
│   └── shop.js             ← Panier + Commandes
└── sql/
    └── schema.sql          ← Schéma complet + données initiales
```

## 🚀 Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Copier le fichier d'env
cp .env .env
# Remplir DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET

# 3. Créer la base de données
mysql -u root -p < sql/schema.sql

# 4. Démarrer
npm run dev
```

## 🖼️ Convention de nommage des assets

Tes images doivent être dans le dossier `assets/` **au même niveau** que `backend/` :

```
YBoost/
├── backend/          ← ce projet
└── assets/
    ├── Femme/
    │   ├── jeansF/
    │   │   ├── affiche.jpg          ← image de la catégorie
    │   │   ├── jean1.10img1.3.jpg   ← produit 1, image 1
    │   │   ├── jean1.10img2.3.jpg   ← produit 1, image 2
    │   │   ├── jean1.10img3.3.jpg   ← produit 1, image 3
    │   │   ├── jean2.10img1.3.jpg   ← produit 2, image 1
    │   │   └── ...
    │   ├── pentalonsF/
    │   ├── robesF/
    │   ├── shortsF/
    │   └── TopF/
    └── Homme/
        ├── jeansH/
        ├── pentalonsH/
        ├── pull.giletsH/
        ├── sweatH/
        ├── t-shirtH/
        └── vestesH/
```

## 🔗 Endpoints API

### Auth
| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/api/auth/register` | Inscription |
| POST | `/api/auth/login` | Connexion → retourne JWT |
| GET | `/api/auth/me` | Profil (auth requis) |

### Produits
| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/produits` | Liste (filtre: `?genre=Femme&categorie=jeansF&page=1`) |
| GET | `/api/produits/:id` | Détail d'un produit (tailles, couleurs, images) |
| GET | `/api/categories` | Toutes les catégories groupées par genre |

### Panier (auth requis)
| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/panier` | Voir le panier |
| POST | `/api/panier` | Ajouter un produit |
| PUT | `/api/panier/:ligne_id` | Modifier quantité |
| DELETE | `/api/panier/:ligne_id` | Supprimer une ligne |

### Commandes (auth requis)
| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/api/commandes` | Passer commande depuis le panier |
| GET | `/api/commandes` | Historique des commandes |

## 📦 Exemple de réponse produit

```json
{
  "id": 1,
  "nom": "Jean slim fit",
  "prix": "39.99",
  "categorie_slug": "jeansF",
  "genre_nom": "Femme",
  "num_produit": 1,
  "urls_images": {
    "affiche": "/assets/Femme/jeansF/affiche1.jpg",
    "images": [
      "/assets/Femme/jeansF/jean1.10img1.3.jpg",
      "/assets/Femme/jeansF/jean1.10img2.3.jpg",
      "/assets/Femme/jeansF/jean1.10img3.3.jpg"
    ]
  },
  "tailles": [
    { "id": 3, "libelle": "M", "stock_taille": 5 }
  ],
  "couleurs": [
    { "id": 1, "nom": "Bleu", "hex_code": "#1a3a5c" }
  ]
}
```
