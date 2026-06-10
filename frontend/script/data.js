// Fichier généré automatiquement à partir de backend/sql/data.sql et backend/assets.
// CATEGORIES : les 11 sous-catégories (ordre = categorie_id 1-11 du schema.sql)
// PRODUCTS_FALLBACK : catalogue complet utilisé quand l'API n'est pas disponible

const CATEGORIES = [
  {
    "id": 1,
    "slug": "jeansF",
    "nom": "Jeans",
    "genre": "Femme"
  },
  {
    "id": 2,
    "slug": "pentalonsF",
    "nom": "Pantalons",
    "genre": "Femme"
  },
  {
    "id": 3,
    "slug": "robesF",
    "nom": "Robes",
    "genre": "Femme"
  },
  {
    "id": 4,
    "slug": "shortsF",
    "nom": "Shorts",
    "genre": "Femme"
  },
  {
    "id": 5,
    "slug": "TopF",
    "nom": "Tops",
    "genre": "Femme"
  },
  {
    "id": 6,
    "slug": "jeansH",
    "nom": "Jeans",
    "genre": "Homme"
  },
  {
    "id": 7,
    "slug": "pentalonsH",
    "nom": "Pantalons",
    "genre": "Homme"
  },
  {
    "id": 8,
    "slug": "pull.giletsH",
    "nom": "Pulls & Gilets",
    "genre": "Homme"
  },
  {
    "id": 9,
    "slug": "sweatH",
    "nom": "Sweats",
    "genre": "Homme"
  },
  {
    "id": 10,
    "slug": "t-shirtH",
    "nom": "T-shirts",
    "genre": "Homme"
  },
  {
    "id": 11,
    "slug": "vestesH",
    "nom": "Vestes",
    "genre": "Homme"
  }
];

const PRODUCTS_FALLBACK = [
  {
    "id": 1,
    "nom": "Jean slim taille haute",
    "description": "Jean slim fit taille haute, coupe moderne et confortable",
    "prix": 35.99,
    "genre": "Femme",
    "categorieSlug": "jeansF",
    "categorieNom": "Jeans",
    "numProduit": 1,
    "images": [
      "assets/Femme/jeansF/jean1.10img1.3.jpg",
      "assets/Femme/jeansF/jean1.10img2.3.jpg",
      "assets/Femme/jeansF/jean1.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Bleu clair",
        "hex": "#5b8db8"
      }
    ]
  },
  {
    "id": 2,
    "nom": "Jean wide leg",
    "description": "Jean large tendance, style décontracté",
    "prix": 39.99,
    "genre": "Femme",
    "categorieSlug": "jeansF",
    "categorieNom": "Jeans",
    "numProduit": 2,
    "images": [
      "assets/Femme/jeansF/jean2.10img1.3.jpg",
      "assets/Femme/jeansF/jean2.10img2.3.jpg",
      "assets/Femme/jeansF/jean2.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Bleu clair",
        "hex": "#5b8db8"
      }
    ]
  },
  {
    "id": 3,
    "nom": "Jean boyfriend",
    "description": "Jean boyfriend vintage légèrement délavé",
    "prix": 37.99,
    "genre": "Femme",
    "categorieSlug": "jeansF",
    "categorieNom": "Jeans",
    "numProduit": 3,
    "images": [
      "assets/Femme/jeansF/jean3.10img1.3.jpg",
      "assets/Femme/jeansF/jean3.10img2.3.jpg",
      "assets/Femme/jeansF/jean3.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Bleu clair",
        "hex": "#5b8db8"
      }
    ]
  },
  {
    "id": 4,
    "nom": "Jean skinny noir",
    "description": "Jean skinny noir stretch très confortable",
    "prix": 33.99,
    "genre": "Femme",
    "categorieSlug": "jeansF",
    "categorieNom": "Jeans",
    "numProduit": 4,
    "images": [
      "assets/Femme/jeansF/jean4.10img1.3.jpg",
      "assets/Femme/jeansF/jean4.10img2.3.jpg",
      "assets/Femme/jeansF/jean4.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Bleu clair",
        "hex": "#5b8db8"
      }
    ]
  },
  {
    "id": 5,
    "nom": "Jean mom fit",
    "description": "Jean mom taille haute coupe droite",
    "prix": 36.99,
    "genre": "Femme",
    "categorieSlug": "jeansF",
    "categorieNom": "Jeans",
    "numProduit": 5,
    "images": [
      "assets/Femme/jeansF/jean5.10img1.3.jpg",
      "assets/Femme/jeansF/jean5.10img2.3.jpg",
      "assets/Femme/jeansF/jean5.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Bleu clair",
        "hex": "#5b8db8"
      }
    ]
  },
  {
    "id": 6,
    "nom": "Jean flare",
    "description": "Jean évasé style 70s tendance",
    "prix": 41.99,
    "genre": "Femme",
    "categorieSlug": "jeansF",
    "categorieNom": "Jeans",
    "numProduit": 6,
    "images": [
      "assets/Femme/jeansF/jean6.10img1.3.jpg",
      "assets/Femme/jeansF/jean6.10img2.3.jpg",
      "assets/Femme/jeansF/jean6.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Bleu clair",
        "hex": "#5b8db8"
      }
    ]
  },
  {
    "id": 7,
    "nom": "Jean cropped",
    "description": "Jean court cheville coupe slim",
    "prix": 34.99,
    "genre": "Femme",
    "categorieSlug": "jeansF",
    "categorieNom": "Jeans",
    "numProduit": 7,
    "images": [
      "assets/Femme/jeansF/jean7.10img1.3.jpg",
      "assets/Femme/jeansF/jean7.10img2.3.jpg",
      "assets/Femme/jeansF/jean7.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Bleu clair",
        "hex": "#5b8db8"
      }
    ]
  },
  {
    "id": 8,
    "nom": "Jean baggy",
    "description": "Jean baggy oversize ultra tendance",
    "prix": 43.99,
    "genre": "Femme",
    "categorieSlug": "jeansF",
    "categorieNom": "Jeans",
    "numProduit": 8,
    "images": [
      "assets/Femme/jeansF/jean8.10img1.3.jpg",
      "assets/Femme/jeansF/jean8.10img2.3.jpg",
      "assets/Femme/jeansF/jean8.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Bleu clair",
        "hex": "#5b8db8"
      }
    ]
  },
  {
    "id": 9,
    "nom": "Jean déchiré",
    "description": "Jean slim avec déchirures aux genoux",
    "prix": 38.99,
    "genre": "Femme",
    "categorieSlug": "jeansF",
    "categorieNom": "Jeans",
    "numProduit": 9,
    "images": [
      "assets/Femme/jeansF/jean9.10img1.3.jpg",
      "assets/Femme/jeansF/jean9.10img2.3.jpg",
      "assets/Femme/jeansF/jean9.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Bleu clair",
        "hex": "#5b8db8"
      }
    ]
  },
  {
    "id": 10,
    "nom": "Jean cargo denim",
    "description": "Jean avec poches cargo style streetwear",
    "prix": 44.99,
    "genre": "Femme",
    "categorieSlug": "jeansF",
    "categorieNom": "Jeans",
    "numProduit": 10,
    "images": [
      "assets/Femme/jeansF/jean10.10img1.3.jpg",
      "assets/Femme/jeansF/jean10.10img2.3.jpg",
      "assets/Femme/jeansF/jean10.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Bleu clair",
        "hex": "#5b8db8"
      }
    ]
  },
  {
    "id": 11,
    "nom": "Pantalon large beige",
    "description": "Pantalon large fluide style casual chic",
    "prix": 32.99,
    "genre": "Femme",
    "categorieSlug": "pentalonsF",
    "categorieNom": "Pantalons",
    "numProduit": 1,
    "images": [
      "assets/Femme/pentalonsF/pent1.10img1.3.jpg",
      "assets/Femme/pentalonsF/pent1.10img2.3.jpg",
      "assets/Femme/pentalonsF/pent1.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 12,
    "nom": "Pantalon tailleur",
    "description": "Pantalon tailleur coupe droite élégante",
    "prix": 39.99,
    "genre": "Femme",
    "categorieSlug": "pentalonsF",
    "categorieNom": "Pantalons",
    "numProduit": 2,
    "images": [
      "assets/Femme/pentalonsF/pent2.10img1.3.jpg",
      "assets/Femme/pentalonsF/pent2.10img2.3.jpg",
      "assets/Femme/pentalonsF/pent2.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 13,
    "nom": "Pantalon cargo kaki",
    "description": "Pantalon cargo avec poches latérales",
    "prix": 37.99,
    "genre": "Femme",
    "categorieSlug": "pentalonsF",
    "categorieNom": "Pantalons",
    "numProduit": 3,
    "images": [
      "assets/Femme/pentalonsF/pent3.10img1.3.jpg",
      "assets/Femme/pentalonsF/pent3.10img2.3.jpg",
      "assets/Femme/pentalonsF/pent3.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 14,
    "nom": "Pantalon satiné",
    "description": "Pantalon satiné brillant pour soirée",
    "prix": 42.99,
    "genre": "Femme",
    "categorieSlug": "pentalonsF",
    "categorieNom": "Pantalons",
    "numProduit": 4,
    "images": [
      "assets/Femme/pentalonsF/pent4.10img1.3.jpg",
      "assets/Femme/pentalonsF/pent4.10img2.3.jpg",
      "assets/Femme/pentalonsF/pent4.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 15,
    "nom": "Pantalon jogger",
    "description": "Pantalon jogger confortable taille élastique",
    "prix": 29.99,
    "genre": "Femme",
    "categorieSlug": "pentalonsF",
    "categorieNom": "Pantalons",
    "numProduit": 5,
    "images": [
      "assets/Femme/pentalonsF/pent5.10img1.3.jpg",
      "assets/Femme/pentalonsF/pent5.10img2.3.jpg",
      "assets/Femme/pentalonsF/pent5.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 16,
    "nom": "Pantalon imprimé",
    "description": "Pantalon à motif floral tendance",
    "prix": 34.99,
    "genre": "Femme",
    "categorieSlug": "pentalonsF",
    "categorieNom": "Pantalons",
    "numProduit": 6,
    "images": [
      "assets/Femme/pentalonsF/pent6.10img1.3.jpg",
      "assets/Femme/pentalonsF/pent6.10img2.3.jpg",
      "assets/Femme/pentalonsF/pent6.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 17,
    "nom": "Pantalon cuir synthétique",
    "description": "Pantalon effet cuir coupe slim",
    "prix": 44.99,
    "genre": "Femme",
    "categorieSlug": "pentalonsF",
    "categorieNom": "Pantalons",
    "numProduit": 7,
    "images": [
      "assets/Femme/pentalonsF/pent7.10img1.3.jpg",
      "assets/Femme/pentalonsF/pent7.10img2.3.jpg",
      "assets/Femme/pentalonsF/pent7.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 18,
    "nom": "Pantalon palazzo",
    "description": "Pantalon palazzo très large ultra fluide",
    "prix": 36.99,
    "genre": "Femme",
    "categorieSlug": "pentalonsF",
    "categorieNom": "Pantalons",
    "numProduit": 8,
    "images": [
      "assets/Femme/pentalonsF/pent8.10img1.3.jpg",
      "assets/Femme/pentalonsF/pent8.10img2.3.jpg",
      "assets/Femme/pentalonsF/pent8.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 19,
    "nom": "Pantalon cigarette",
    "description": "Pantalon cigarette coupe droite classique",
    "prix": 33.99,
    "genre": "Femme",
    "categorieSlug": "pentalonsF",
    "categorieNom": "Pantalons",
    "numProduit": 9,
    "images": [
      "assets/Femme/pentalonsF/pent9.10img1.3.jpg",
      "assets/Femme/pentalonsF/pent9.10img2.3.jpg",
      "assets/Femme/pentalonsF/pent9.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 20,
    "nom": "Pantalon velours",
    "description": "Pantalon en velours côtelé tendance",
    "prix": 38.99,
    "genre": "Femme",
    "categorieSlug": "pentalonsF",
    "categorieNom": "Pantalons",
    "numProduit": 10,
    "images": [
      "assets/Femme/pentalonsF/pent10.10img1.3.jpg",
      "assets/Femme/pentalonsF/pent10.10img2.3.jpg",
      "assets/Femme/pentalonsF/pent10.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 21,
    "nom": "Robe midi fleurie",
    "description": "Robe midi à fleurs légère et féminine",
    "prix": 35.99,
    "genre": "Femme",
    "categorieSlug": "robesF",
    "categorieNom": "Robes",
    "numProduit": 1,
    "images": [
      "assets/Femme/robesF/robe1.10img1.3.jpg",
      "assets/Femme/robesF/robe1.10img2.3.jpg",
      "assets/Femme/robesF/robe1.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      }
    ]
  },
  {
    "id": 22,
    "nom": "Robe mini noire",
    "description": "Robe courte noire intemporelle",
    "prix": 29.99,
    "genre": "Femme",
    "categorieSlug": "robesF",
    "categorieNom": "Robes",
    "numProduit": 2,
    "images": [
      "assets/Femme/robesF/robe2.10img1.3.jpg",
      "assets/Femme/robesF/robe2.10img2.3.jpg",
      "assets/Femme/robesF/robe2.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      }
    ]
  },
  {
    "id": 23,
    "nom": "Robe longue bohème",
    "description": "Robe longue style bohème avec broderies",
    "prix": 49.99,
    "genre": "Femme",
    "categorieSlug": "robesF",
    "categorieNom": "Robes",
    "numProduit": 3,
    "images": [
      "assets/Femme/robesF/robe3.10img1.3.jpg",
      "assets/Femme/robesF/robe3.10img2.3.jpg",
      "assets/Femme/robesF/robe3.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      }
    ]
  },
  {
    "id": 24,
    "nom": "Robe chemise",
    "description": "Robe chemise décontractée oversize",
    "prix": 34.99,
    "genre": "Femme",
    "categorieSlug": "robesF",
    "categorieNom": "Robes",
    "numProduit": 4,
    "images": [
      "assets/Femme/robesF/robe4.10img1.3.jpg",
      "assets/Femme/robesF/robe4.10img2.3.jpg",
      "assets/Femme/robesF/robe4.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      }
    ]
  },
  {
    "id": 25,
    "nom": "Robe à bretelles",
    "description": "Robe d'été légère à bretelles",
    "prix": 27.99,
    "genre": "Femme",
    "categorieSlug": "robesF",
    "categorieNom": "Robes",
    "numProduit": 5,
    "images": [
      "assets/Femme/robesF/robe5.10img1.3.jpg",
      "assets/Femme/robesF/robe5.10img2.3.jpg",
      "assets/Femme/robesF/robe5.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      }
    ]
  },
  {
    "id": 26,
    "nom": "Robe satinée",
    "description": "Robe satinée brillante pour soirée",
    "prix": 44.99,
    "genre": "Femme",
    "categorieSlug": "robesF",
    "categorieNom": "Robes",
    "numProduit": 6,
    "images": [
      "assets/Femme/robesF/robe6.10img1.3.jpg",
      "assets/Femme/robesF/robe6.10img2.3.jpg",
      "assets/Femme/robesF/robe6.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      }
    ]
  },
  {
    "id": 27,
    "nom": "Robe pull",
    "description": "Robe pull en maille douce et confortable",
    "prix": 32.99,
    "genre": "Femme",
    "categorieSlug": "robesF",
    "categorieNom": "Robes",
    "numProduit": 7,
    "images": [
      "assets/Femme/robesF/robe7.10img1.3.jpg",
      "assets/Femme/robesF/robe7.10img2.3.jpg",
      "assets/Femme/robesF/robe7.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      }
    ]
  },
  {
    "id": 28,
    "nom": "Robe asymétrique",
    "description": "Robe asymétrique tendance et originale",
    "prix": 39.99,
    "genre": "Femme",
    "categorieSlug": "robesF",
    "categorieNom": "Robes",
    "numProduit": 8,
    "images": [
      "assets/Femme/robesF/robe8.10img1.3.jpg",
      "assets/Femme/robesF/robe8.10img2.3.jpg",
      "assets/Femme/robesF/robe8.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      }
    ]
  },
  {
    "id": 29,
    "nom": "Robe moulante",
    "description": "Robe moulante stretch élégante",
    "prix": 37.99,
    "genre": "Femme",
    "categorieSlug": "robesF",
    "categorieNom": "Robes",
    "numProduit": 9,
    "images": [
      "assets/Femme/robesF/robe9.10img1.3.jpg",
      "assets/Femme/robesF/robe9.10img2.3.jpg",
      "assets/Femme/robesF/robe9.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      }
    ]
  },
  {
    "id": 30,
    "nom": "Robe babydoll",
    "description": "Robe babydoll romantique avec dentelle",
    "prix": 31.99,
    "genre": "Femme",
    "categorieSlug": "robesF",
    "categorieNom": "Robes",
    "numProduit": 10,
    "images": [
      "assets/Femme/robesF/robe10.10img1.3.jpg",
      "assets/Femme/robesF/robe10.10img2.3.jpg",
      "assets/Femme/robesF/robe10.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      }
    ]
  },
  {
    "id": 31,
    "nom": "Short jean taille haute",
    "description": "Short en jean taille haute coupe vintage",
    "prix": 25.99,
    "genre": "Femme",
    "categorieSlug": "shortsF",
    "categorieNom": "Shorts",
    "numProduit": 1,
    "images": [
      "assets/Femme/shortsF/short1.10img1.3.jpg",
      "assets/Femme/shortsF/short1.10img2.3.jpg",
      "assets/Femme/shortsF/short1.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      }
    ]
  },
  {
    "id": 32,
    "nom": "Short cycliste",
    "description": "Short cycliste moulant sport et casual",
    "prix": 22.99,
    "genre": "Femme",
    "categorieSlug": "shortsF",
    "categorieNom": "Shorts",
    "numProduit": 2,
    "images": [
      "assets/Femme/shortsF/short2.10img1.3.jpg",
      "assets/Femme/shortsF/short2.10img2.3.jpg",
      "assets/Femme/shortsF/short2.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      }
    ]
  },
  {
    "id": 33,
    "nom": "Short fluide imprimé",
    "description": "Short fluide à motif tropical",
    "prix": 24.99,
    "genre": "Femme",
    "categorieSlug": "shortsF",
    "categorieNom": "Shorts",
    "numProduit": 3,
    "images": [
      "assets/Femme/shortsF/short3.10img1.3.jpg",
      "assets/Femme/shortsF/short3.10img2.3.jpg",
      "assets/Femme/shortsF/short3.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      }
    ]
  },
  {
    "id": 34,
    "nom": "Short cargo",
    "description": "Short cargo avec poches latérales",
    "prix": 29.99,
    "genre": "Femme",
    "categorieSlug": "shortsF",
    "categorieNom": "Shorts",
    "numProduit": 4,
    "images": [
      "assets/Femme/shortsF/short4.10img1.3.jpg",
      "assets/Femme/shortsF/short4.10img2.3.jpg",
      "assets/Femme/shortsF/short4.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      }
    ]
  },
  {
    "id": 35,
    "nom": "Short satiné",
    "description": "Short satiné brillant style loungewear",
    "prix": 27.99,
    "genre": "Femme",
    "categorieSlug": "shortsF",
    "categorieNom": "Shorts",
    "numProduit": 5,
    "images": [
      "assets/Femme/shortsF/short5.10img1.3.jpg",
      "assets/Femme/shortsF/short5.10img2.3.jpg",
      "assets/Femme/shortsF/short5.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      }
    ]
  },
  {
    "id": 36,
    "nom": "Short bermuda",
    "description": "Bermuda long décontracté",
    "prix": 26.99,
    "genre": "Femme",
    "categorieSlug": "shortsF",
    "categorieNom": "Shorts",
    "numProduit": 6,
    "images": [
      "assets/Femme/shortsF/short6.10img1.3.jpg",
      "assets/Femme/shortsF/short6.10img2.3.jpg",
      "assets/Femme/shortsF/short6.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      }
    ]
  },
  {
    "id": 37,
    "nom": "Short en lin",
    "description": "Short en lin léger pour l'été",
    "prix": 28.99,
    "genre": "Femme",
    "categorieSlug": "shortsF",
    "categorieNom": "Shorts",
    "numProduit": 7,
    "images": [
      "assets/Femme/shortsF/short7.10img1.3.jpg",
      "assets/Femme/shortsF/short7.10img2.3.jpg",
      "assets/Femme/shortsF/short7.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      }
    ]
  },
  {
    "id": 38,
    "nom": "Short sport",
    "description": "Short de sport avec élastique et cordon",
    "prix": 21.99,
    "genre": "Femme",
    "categorieSlug": "shortsF",
    "categorieNom": "Shorts",
    "numProduit": 8,
    "images": [
      "assets/Femme/shortsF/short8.10img1.3.jpg",
      "assets/Femme/shortsF/short8.10img2.3.jpg",
      "assets/Femme/shortsF/short8.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      }
    ]
  },
  {
    "id": 39,
    "nom": "Short cuir synthétique",
    "description": "Short effet cuir coupe slim tendance",
    "prix": 32.99,
    "genre": "Femme",
    "categorieSlug": "shortsF",
    "categorieNom": "Shorts",
    "numProduit": 9,
    "images": [
      "assets/Femme/shortsF/short9.10img1.3.jpg",
      "assets/Femme/shortsF/short9.10img2.3.jpg",
      "assets/Femme/shortsF/short9.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      }
    ]
  },
  {
    "id": 40,
    "nom": "Short à volants",
    "description": "Short avec volants romantique et féminin",
    "prix": 23.99,
    "genre": "Femme",
    "categorieSlug": "shortsF",
    "categorieNom": "Shorts",
    "numProduit": 10,
    "images": [
      "assets/Femme/shortsF/short10.10img1.3.jpg",
      "assets/Femme/shortsF/short10.10img2.3.jpg",
      "assets/Femme/shortsF/short10.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      }
    ]
  },
  {
    "id": 41,
    "nom": "Top brassière",
    "description": "Top brassière sport et casual",
    "prix": 18.99,
    "genre": "Femme",
    "categorieSlug": "TopF",
    "categorieNom": "Tops",
    "numProduit": 1,
    "images": [
      "assets/Femme/TopF/top1.10img1.3.jpg",
      "assets/Femme/TopF/top1.10img2.3.jpg",
      "assets/Femme/TopF/top1.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      }
    ]
  },
  {
    "id": 42,
    "nom": "Top crop basique",
    "description": "T-shirt crop top basique indispensable",
    "prix": 15.99,
    "genre": "Femme",
    "categorieSlug": "TopF",
    "categorieNom": "Tops",
    "numProduit": 2,
    "images": [
      "assets/Femme/TopF/top2.10img1.3.jpg",
      "assets/Femme/TopF/top2.10img2.3.jpg",
      "assets/Femme/TopF/top2.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      }
    ]
  },
  {
    "id": 43,
    "nom": "Top à nouer",
    "description": "Top à nouer dans le dos tendance",
    "prix": 22.99,
    "genre": "Femme",
    "categorieSlug": "TopF",
    "categorieNom": "Tops",
    "numProduit": 3,
    "images": [
      "assets/Femme/TopF/top3.10img1.3.jpg",
      "assets/Femme/TopF/top3.10img2.3.jpg",
      "assets/Femme/TopF/top3.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      }
    ]
  },
  {
    "id": 44,
    "nom": "Top imprimé",
    "description": "Top à imprimé graphique tendance",
    "prix": 19.99,
    "genre": "Femme",
    "categorieSlug": "TopF",
    "categorieNom": "Tops",
    "numProduit": 4,
    "images": [
      "assets/Femme/TopF/top4.10img1.3.jpg",
      "assets/Femme/TopF/top4.10img2.3.jpg",
      "assets/Femme/TopF/top4.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      }
    ]
  },
  {
    "id": 45,
    "nom": "Top épaules dénudées",
    "description": "Top avec épaules dénudées élégant",
    "prix": 24.99,
    "genre": "Femme",
    "categorieSlug": "TopF",
    "categorieNom": "Tops",
    "numProduit": 5,
    "images": [
      "assets/Femme/TopF/top5.10img1.3.jpg",
      "assets/Femme/TopF/top5.10img2.3.jpg",
      "assets/Femme/TopF/top5.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      }
    ]
  },
  {
    "id": 46,
    "nom": "Top crochet",
    "description": "Top en crochet style bohème",
    "prix": 27.99,
    "genre": "Femme",
    "categorieSlug": "TopF",
    "categorieNom": "Tops",
    "numProduit": 6,
    "images": [
      "assets/Femme/TopF/top6.10img1.3.jpg",
      "assets/Femme/TopF/top6.10img2.3.jpg",
      "assets/Femme/TopF/top6.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      }
    ]
  },
  {
    "id": 47,
    "nom": "Top strappy",
    "description": "Top à fines bretelles croisées dans le dos",
    "prix": 20.99,
    "genre": "Femme",
    "categorieSlug": "TopF",
    "categorieNom": "Tops",
    "numProduit": 7,
    "images": [
      "assets/Femme/TopF/top7.10img1.3.jpg",
      "assets/Femme/TopF/top7.10img2.3.jpg",
      "assets/Femme/TopF/top7.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      }
    ]
  },
  {
    "id": 48,
    "nom": "Top maille côtelée",
    "description": "Top en maille côtelée slim",
    "prix": 17.99,
    "genre": "Femme",
    "categorieSlug": "TopF",
    "categorieNom": "Tops",
    "numProduit": 8,
    "images": [
      "assets/Femme/TopF/top8.10img1.3.jpg",
      "assets/Femme/TopF/top8.10img2.3.jpg",
      "assets/Femme/TopF/top8.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      }
    ]
  },
  {
    "id": 49,
    "nom": "Top pailleté",
    "description": "Top pailleté pour soirée festive",
    "prix": 29.99,
    "genre": "Femme",
    "categorieSlug": "TopF",
    "categorieNom": "Tops",
    "numProduit": 9,
    "images": [
      "assets/Femme/TopF/top9.10img1.3.jpg",
      "assets/Femme/TopF/top9.10img2.3.jpg",
      "assets/Femme/TopF/top9.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      }
    ]
  },
  {
    "id": 50,
    "nom": "Top corset",
    "description": "Top corset tendance style vintage",
    "prix": 26.99,
    "genre": "Femme",
    "categorieSlug": "TopF",
    "categorieNom": "Tops",
    "numProduit": 10,
    "images": [
      "assets/Femme/TopF/top10.10img1.3.jpg",
      "assets/Femme/TopF/top10.10img2.3.jpg",
      "assets/Femme/TopF/top10.10img3.3.jpg"
    ],
    "tailles": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Rose",
        "hex": "#FFB6C1"
      }
    ]
  },
  {
    "id": 51,
    "nom": "Jean slim basique",
    "description": "Jean slim fit classique indispensable",
    "prix": 35.99,
    "genre": "Homme",
    "categorieSlug": "jeansH",
    "categorieNom": "Jeans",
    "numProduit": 1,
    "images": [
      "assets/Homme/jeansH/jean1.10img1.3.jpg",
      "assets/Homme/jeansH/jean1.10img2.3.jpg",
      "assets/Homme/jeansH/jean1.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 52,
    "nom": "Jean straight",
    "description": "Jean coupe droite intemporel",
    "prix": 37.99,
    "genre": "Homme",
    "categorieSlug": "jeansH",
    "categorieNom": "Jeans",
    "numProduit": 2,
    "images": [
      "assets/Homme/jeansH/jean2.10img1.3.jpg",
      "assets/Homme/jeansH/jean2.10img2.3.jpg",
      "assets/Homme/jeansH/jean2.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 53,
    "nom": "Jean baggy homme",
    "description": "Jean baggy oversize streetwear",
    "prix": 43.99,
    "genre": "Homme",
    "categorieSlug": "jeansH",
    "categorieNom": "Jeans",
    "numProduit": 3,
    "images": [
      "assets/Homme/jeansH/jean3.10img1.3.jpg",
      "assets/Homme/jeansH/jean3.10img2.3.jpg",
      "assets/Homme/jeansH/jean3.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 54,
    "nom": "Jean skinny homme",
    "description": "Jean skinny stretch très confortable",
    "prix": 33.99,
    "genre": "Homme",
    "categorieSlug": "jeansH",
    "categorieNom": "Jeans",
    "numProduit": 4,
    "images": [
      "assets/Homme/jeansH/jean4.10img1.3.jpg",
      "assets/Homme/jeansH/jean4.10img2.3.jpg",
      "assets/Homme/jeansH/jean4.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 55,
    "nom": "Jean déchiré homme",
    "description": "Jean avec déchirures style rock",
    "prix": 39.99,
    "genre": "Homme",
    "categorieSlug": "jeansH",
    "categorieNom": "Jeans",
    "numProduit": 5,
    "images": [
      "assets/Homme/jeansH/jean5.10img1.3.jpg",
      "assets/Homme/jeansH/jean5.10img2.3.jpg",
      "assets/Homme/jeansH/jean5.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 56,
    "nom": "Jean cargo denim homme",
    "description": "Jean cargo avec poches latérales",
    "prix": 44.99,
    "genre": "Homme",
    "categorieSlug": "jeansH",
    "categorieNom": "Jeans",
    "numProduit": 6,
    "images": [
      "assets/Homme/jeansH/jean6.10img1.3.jpg",
      "assets/Homme/jeansH/jean6.10img2.3.jpg",
      "assets/Homme/jeansH/jean6.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 57,
    "nom": "Jean wide leg homme",
    "description": "Jean large tendance streetwear",
    "prix": 41.99,
    "genre": "Homme",
    "categorieSlug": "jeansH",
    "categorieNom": "Jeans",
    "numProduit": 7,
    "images": [
      "assets/Homme/jeansH/jean7.10img1.3.jpg",
      "assets/Homme/jeansH/jean7.10img2.3.jpg",
      "assets/Homme/jeansH/jean7.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 58,
    "nom": "Jean délavé",
    "description": "Jean délavé style vintage",
    "prix": 36.99,
    "genre": "Homme",
    "categorieSlug": "jeansH",
    "categorieNom": "Jeans",
    "numProduit": 8,
    "images": [
      "assets/Homme/jeansH/jean8.10img1.3.jpg",
      "assets/Homme/jeansH/jean8.10img2.3.jpg",
      "assets/Homme/jeansH/jean8.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 59,
    "nom": "Jean noir homme",
    "description": "Jean noir coupe slim élégant",
    "prix": 34.99,
    "genre": "Homme",
    "categorieSlug": "jeansH",
    "categorieNom": "Jeans",
    "numProduit": 9,
    "images": [
      "assets/Homme/jeansH/jean9.10img1.3.jpg",
      "assets/Homme/jeansH/jean9.10img2.3.jpg",
      "assets/Homme/jeansH/jean9.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 60,
    "nom": "Jean patchwork",
    "description": "Jean avec patchwork style unique",
    "prix": 46.99,
    "genre": "Homme",
    "categorieSlug": "jeansH",
    "categorieNom": "Jeans",
    "numProduit": 10,
    "images": [
      "assets/Homme/jeansH/jean10.10img1.3.jpg",
      "assets/Homme/jeansH/jean10.10img2.3.jpg",
      "assets/Homme/jeansH/jean10.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Bleu",
        "hex": "#1a3a5c"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 61,
    "nom": "Pantalon chino beige",
    "description": "Pantalon chino classique casual chic",
    "prix": 34.99,
    "genre": "Homme",
    "categorieSlug": "pentalonsH",
    "categorieNom": "Pantalons",
    "numProduit": 1,
    "images": [
      "assets/Homme/pentalonsH/pent1.10img1.3.jpg",
      "assets/Homme/pentalonsH/pent1.10img2.3.jpg",
      "assets/Homme/pentalonsH/pent1.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 62,
    "nom": "Pantalon cargo homme",
    "description": "Pantalon cargo multi-poches",
    "prix": 39.99,
    "genre": "Homme",
    "categorieSlug": "pentalonsH",
    "categorieNom": "Pantalons",
    "numProduit": 2,
    "images": [
      "assets/Homme/pentalonsH/pent2.10img1.3.jpg",
      "assets/Homme/pentalonsH/pent2.10img2.3.jpg",
      "assets/Homme/pentalonsH/pent2.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 63,
    "nom": "Pantalon de costume",
    "description": "Pantalon tailleur coupe droite élégant",
    "prix": 44.99,
    "genre": "Homme",
    "categorieSlug": "pentalonsH",
    "categorieNom": "Pantalons",
    "numProduit": 3,
    "images": [
      "assets/Homme/pentalonsH/pent3.10img1.3.jpg",
      "assets/Homme/pentalonsH/pent3.10img2.3.jpg",
      "assets/Homme/pentalonsH/pent3.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 64,
    "nom": "Pantalon jogger homme",
    "description": "Pantalon jogger confortable streetwear",
    "prix": 29.99,
    "genre": "Homme",
    "categorieSlug": "pentalonsH",
    "categorieNom": "Pantalons",
    "numProduit": 4,
    "images": [
      "assets/Homme/pentalonsH/pent4.10img1.2.jpg",
      "assets/Homme/pentalonsH/pent4.10img2.2.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 65,
    "nom": "Pantalon lin homme",
    "description": "Pantalon en lin léger pour l'été",
    "prix": 36.99,
    "genre": "Homme",
    "categorieSlug": "pentalonsH",
    "categorieNom": "Pantalons",
    "numProduit": 5,
    "images": [
      "assets/Homme/pentalonsH/pent5.10img1.3.jpg",
      "assets/Homme/pentalonsH/pent5.10img2.3.jpg",
      "assets/Homme/pentalonsH/pent5.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 66,
    "nom": "Pantalon large homme",
    "description": "Pantalon large décontracté tendance",
    "prix": 37.99,
    "genre": "Homme",
    "categorieSlug": "pentalonsH",
    "categorieNom": "Pantalons",
    "numProduit": 6,
    "images": [
      "assets/Homme/pentalonsH/pent6.10img1.3.jpg",
      "assets/Homme/pentalonsH/pent6.10img2.3.jpg",
      "assets/Homme/pentalonsH/pent6.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 67,
    "nom": "Pantalon velours homme",
    "description": "Pantalon velours côtelé tendance",
    "prix": 38.99,
    "genre": "Homme",
    "categorieSlug": "pentalonsH",
    "categorieNom": "Pantalons",
    "numProduit": 7,
    "images": [
      "assets/Homme/pentalonsH/pent7.10img1.3.jpg",
      "assets/Homme/pentalonsH/pent7.10img2.3.jpg",
      "assets/Homme/pentalonsH/pent7.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 68,
    "nom": "Pantalon imprimé homme",
    "description": "Pantalon à motif géométrique",
    "prix": 33.99,
    "genre": "Homme",
    "categorieSlug": "pentalonsH",
    "categorieNom": "Pantalons",
    "numProduit": 8,
    "images": [
      "assets/Homme/pentalonsH/pent8.10img1.3.jpg",
      "assets/Homme/pentalonsH/pent8.10img2.3.jpg",
      "assets/Homme/pentalonsH/pent8.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 69,
    "nom": "Pantalon tech",
    "description": "Pantalon technique style outdoor",
    "prix": 49.99,
    "genre": "Homme",
    "categorieSlug": "pentalonsH",
    "categorieNom": "Pantalons",
    "numProduit": 9,
    "images": [
      "assets/Homme/pentalonsH/pent9.10img1.3.jpg",
      "assets/Homme/pentalonsH/pent9.10img2.3.jpg",
      "assets/Homme/pentalonsH/pent9.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 70,
    "nom": "Pantalon cuir synthétique homme",
    "description": "Pantalon effet cuir slim tendance",
    "prix": 46.99,
    "genre": "Homme",
    "categorieSlug": "pentalonsH",
    "categorieNom": "Pantalons",
    "numProduit": 10,
    "images": [
      "assets/Homme/pentalonsH/pent10.10img1.3.jpg",
      "assets/Homme/pentalonsH/pent10.10img2.3.jpg",
      "assets/Homme/pentalonsH/pent10.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Beige",
        "hex": "#f5f0e8"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      }
    ]
  },
  {
    "id": 71,
    "nom": "Pull col rond basique",
    "description": "Pull col rond en maille douce",
    "prix": 32.99,
    "genre": "Homme",
    "categorieSlug": "pull.giletsH",
    "categorieNom": "Pulls & Gilets",
    "numProduit": 1,
    "images": [
      "assets/Homme/pull.giletsH/pull1.10img1.3.jpg",
      "assets/Homme/pull.giletsH/pull1.10img2.3.jpg",
      "assets/Homme/pull.giletsH/pull1.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 72,
    "nom": "Pull col V",
    "description": "Pull col V élégant et classique",
    "prix": 34.99,
    "genre": "Homme",
    "categorieSlug": "pull.giletsH",
    "categorieNom": "Pulls & Gilets",
    "numProduit": 2,
    "images": [
      "assets/Homme/pull.giletsH/pull2.10img1.3.jpg",
      "assets/Homme/pull.giletsH/pull2.10img2.3.jpg",
      "assets/Homme/pull.giletsH/pull2.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 73,
    "nom": "Gilet boutonné",
    "description": "Gilet boutonné style preppy tendance",
    "prix": 37.99,
    "genre": "Homme",
    "categorieSlug": "pull.giletsH",
    "categorieNom": "Pulls & Gilets",
    "numProduit": 3,
    "images": [
      "assets/Homme/pull.giletsH/pull3.10img1.3.jpg",
      "assets/Homme/pull.giletsH/pull3.10img2.3.jpg",
      "assets/Homme/pull.giletsH/pull3.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 74,
    "nom": "Pull oversize",
    "description": "Pull oversize confortable et tendance",
    "prix": 39.99,
    "genre": "Homme",
    "categorieSlug": "pull.giletsH",
    "categorieNom": "Pulls & Gilets",
    "numProduit": 4,
    "images": [
      "assets/Homme/pull.giletsH/pull4.10img1.3.jpg",
      "assets/Homme/pull.giletsH/pull4.10img2.3.jpg",
      "assets/Homme/pull.giletsH/pull4.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 75,
    "nom": "Pull torsadé",
    "description": "Pull à torsades irlandaises classique",
    "prix": 44.99,
    "genre": "Homme",
    "categorieSlug": "pull.giletsH",
    "categorieNom": "Pulls & Gilets",
    "numProduit": 5,
    "images": [
      "assets/Homme/pull.giletsH/pull5.10img1.3.jpg",
      "assets/Homme/pull.giletsH/pull5.10img2.3.jpg",
      "assets/Homme/pull.giletsH/pull5.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 76,
    "nom": "Gilet cardigan",
    "description": "Cardigan long décontracté",
    "prix": 42.99,
    "genre": "Homme",
    "categorieSlug": "pull.giletsH",
    "categorieNom": "Pulls & Gilets",
    "numProduit": 6,
    "images": [
      "assets/Homme/pull.giletsH/pull6.10img1.3.jpg",
      "assets/Homme/pull.giletsH/pull6.10img2.3.jpg",
      "assets/Homme/pull.giletsH/pull6.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 77,
    "nom": "Pull rayé",
    "description": "Pull à rayures style marin",
    "prix": 36.99,
    "genre": "Homme",
    "categorieSlug": "pull.giletsH",
    "categorieNom": "Pulls & Gilets",
    "numProduit": 7,
    "images": [
      "assets/Homme/pull.giletsH/pull7.10img1.3.jpg",
      "assets/Homme/pull.giletsH/pull7.10img2.3.jpg",
      "assets/Homme/pull.giletsH/pull7.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 78,
    "nom": "Pull col roulé",
    "description": "Pull col roulé chaud et élégant",
    "prix": 38.99,
    "genre": "Homme",
    "categorieSlug": "pull.giletsH",
    "categorieNom": "Pulls & Gilets",
    "numProduit": 8,
    "images": [
      "assets/Homme/pull.giletsH/pull8.10img1.3.jpg",
      "assets/Homme/pull.giletsH/pull8.10img2.3.jpg",
      "assets/Homme/pull.giletsH/pull8.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 79,
    "nom": "Gilet sans manches",
    "description": "Gilet sans manches en maille",
    "prix": 29.99,
    "genre": "Homme",
    "categorieSlug": "pull.giletsH",
    "categorieNom": "Pulls & Gilets",
    "numProduit": 9,
    "images": [
      "assets/Homme/pull.giletsH/pull9.10img1.3.jpg",
      "assets/Homme/pull.giletsH/pull9.10img2.3.jpg",
      "assets/Homme/pull.giletsH/pull9.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 80,
    "nom": "Pull color block",
    "description": "Pull bicolore tendance color block",
    "prix": 41.99,
    "genre": "Homme",
    "categorieSlug": "pull.giletsH",
    "categorieNom": "Pulls & Gilets",
    "numProduit": 10,
    "images": [
      "assets/Homme/pull.giletsH/pull10.10img1.3.jpg",
      "assets/Homme/pull.giletsH/pull10.10img2.3.jpg",
      "assets/Homme/pull.giletsH/pull10.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 81,
    "nom": "Sweat à capuche basique",
    "description": "Hoodie basique incontournable",
    "prix": 34.99,
    "genre": "Homme",
    "categorieSlug": "sweatH",
    "categorieNom": "Sweats",
    "numProduit": 1,
    "images": [
      "assets/Homme/sweatH/sweat1.10img1.3.jpg",
      "assets/Homme/sweatH/sweat1.10img2.3.jpg",
      "assets/Homme/sweatH/sweat1.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      }
    ]
  },
  {
    "id": 82,
    "nom": "Sweat col rond",
    "description": "Sweat col rond classique confortable",
    "prix": 29.99,
    "genre": "Homme",
    "categorieSlug": "sweatH",
    "categorieNom": "Sweats",
    "numProduit": 2,
    "images": [
      "assets/Homme/sweatH/sweat2.10img1.3.jpg",
      "assets/Homme/sweatH/sweat2.10img2.3.jpg",
      "assets/Homme/sweatH/sweat2.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      }
    ]
  },
  {
    "id": 83,
    "nom": "Sweat zip",
    "description": "Sweat zippé pratique et casual",
    "prix": 37.99,
    "genre": "Homme",
    "categorieSlug": "sweatH",
    "categorieNom": "Sweats",
    "numProduit": 3,
    "images": [
      "assets/Homme/sweatH/sweat3.10img1.3.jpg",
      "assets/Homme/sweatH/sweat3.10img2.3.jpg",
      "assets/Homme/sweatH/sweat3.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      }
    ]
  },
  {
    "id": 84,
    "nom": "Sweat imprimé",
    "description": "Sweat avec print graphique streetwear",
    "prix": 39.99,
    "genre": "Homme",
    "categorieSlug": "sweatH",
    "categorieNom": "Sweats",
    "numProduit": 4,
    "images": [
      "assets/Homme/sweatH/sweat4.10img1.3.jpg",
      "assets/Homme/sweatH/sweat4.10img2.3.jpg",
      "assets/Homme/sweatH/sweat4.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      }
    ]
  },
  {
    "id": 85,
    "nom": "Sweat oversize",
    "description": "Hoodie oversize tendance",
    "prix": 42.99,
    "genre": "Homme",
    "categorieSlug": "sweatH",
    "categorieNom": "Sweats",
    "numProduit": 5,
    "images": [
      "assets/Homme/sweatH/sweat5.10img1.3.jpg",
      "assets/Homme/sweatH/sweat5.10img2.3.jpg",
      "assets/Homme/sweatH/sweat5.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      }
    ]
  },
  {
    "id": 86,
    "nom": "Sweat tie-dye",
    "description": "Sweat tie-dye coloré tendance",
    "prix": 36.99,
    "genre": "Homme",
    "categorieSlug": "sweatH",
    "categorieNom": "Sweats",
    "numProduit": 6,
    "images": [
      "assets/Homme/sweatH/sweat6.10img1.3.jpg",
      "assets/Homme/sweatH/sweat6.10img2.3.jpg",
      "assets/Homme/sweatH/sweat6.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      }
    ]
  },
  {
    "id": 87,
    "nom": "Sweat college",
    "description": "Sweat style universitaire américain",
    "prix": 38.99,
    "genre": "Homme",
    "categorieSlug": "sweatH",
    "categorieNom": "Sweats",
    "numProduit": 7,
    "images": [
      "assets/Homme/sweatH/sweat7.10img1.3.jpg",
      "assets/Homme/sweatH/sweat7.10img2.3.jpg",
      "assets/Homme/sweatH/sweat7.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      }
    ]
  },
  {
    "id": 88,
    "nom": "Sweat technique",
    "description": "Sweat technique léger mi-saison",
    "prix": 44.99,
    "genre": "Homme",
    "categorieSlug": "sweatH",
    "categorieNom": "Sweats",
    "numProduit": 8,
    "images": [
      "assets/Homme/sweatH/sweat8.10img1.3.jpg",
      "assets/Homme/sweatH/sweat8.10img2.3.jpg",
      "assets/Homme/sweatH/sweat8.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      }
    ]
  },
  {
    "id": 89,
    "nom": "Sweat polaire",
    "description": "Sweat polaire chaud et doux",
    "prix": 46.99,
    "genre": "Homme",
    "categorieSlug": "sweatH",
    "categorieNom": "Sweats",
    "numProduit": 9,
    "images": [
      "assets/Homme/sweatH/sweat9.10img1.3.jpg",
      "assets/Homme/sweatH/sweat9.10img2.3.jpg",
      "assets/Homme/sweatH/sweat9.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      }
    ]
  },
  {
    "id": 90,
    "nom": "Sweat sans capuche crop",
    "description": "Sweat court sans capuche tendance",
    "prix": 31.99,
    "genre": "Homme",
    "categorieSlug": "sweatH",
    "categorieNom": "Sweats",
    "numProduit": 10,
    "images": [
      "assets/Homme/sweatH/sweat10.10img1.3.jpg",
      "assets/Homme/sweatH/sweat10.10img2.3.jpg",
      "assets/Homme/sweatH/sweat10.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Gris",
        "hex": "#808080"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      }
    ]
  },
  {
    "id": 91,
    "nom": "T-shirt basique blanc",
    "description": "T-shirt basique blanc indispensable",
    "prix": 12.99,
    "genre": "Homme",
    "categorieSlug": "t-shirtH",
    "categorieNom": "T-shirts",
    "numProduit": 1,
    "images": [
      "assets/Homme/t-shirtH/t-shirt1.10img1.3.jpg",
      "assets/Homme/t-shirtH/t-shirt1.10img2.3.jpg",
      "assets/Homme/t-shirtH/t-shirt1.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 92,
    "nom": "T-shirt basique noir",
    "description": "T-shirt basique noir intemporel",
    "prix": 12.99,
    "genre": "Homme",
    "categorieSlug": "t-shirtH",
    "categorieNom": "T-shirts",
    "numProduit": 2,
    "images": [
      "assets/Homme/t-shirtH/t-shirt2.10img1.3.jpg",
      "assets/Homme/t-shirtH/t-shirt2.10img2.3.jpg",
      "assets/Homme/t-shirtH/t-shirt2.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 93,
    "nom": "T-shirt graphique",
    "description": "T-shirt avec print graphique tendance",
    "prix": 19.99,
    "genre": "Homme",
    "categorieSlug": "t-shirtH",
    "categorieNom": "T-shirts",
    "numProduit": 3,
    "images": [
      "assets/Homme/t-shirtH/t-shirt3.10img1.3.jpg",
      "assets/Homme/t-shirtH/t-shirt3.10img2.3.jpg",
      "assets/Homme/t-shirtH/t-shirt3.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 94,
    "nom": "T-shirt oversize",
    "description": "T-shirt oversize style streetwear",
    "prix": 17.99,
    "genre": "Homme",
    "categorieSlug": "t-shirtH",
    "categorieNom": "T-shirts",
    "numProduit": 4,
    "images": [
      "assets/Homme/t-shirtH/t-shirt4.10img1.3.jpg",
      "assets/Homme/t-shirtH/t-shirt4.10img2.3.jpg",
      "assets/Homme/t-shirtH/t-shirt4.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 95,
    "nom": "T-shirt rayé",
    "description": "T-shirt à rayures style marin",
    "prix": 16.99,
    "genre": "Homme",
    "categorieSlug": "t-shirtH",
    "categorieNom": "T-shirts",
    "numProduit": 5,
    "images": [
      "assets/Homme/t-shirtH/t-shirt5.10img1.3.jpg",
      "assets/Homme/t-shirtH/t-shirt5.10img2.3.jpg",
      "assets/Homme/t-shirtH/t-shirt5.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 96,
    "nom": "T-shirt col V homme",
    "description": "T-shirt col V léger et confortable",
    "prix": 14.99,
    "genre": "Homme",
    "categorieSlug": "t-shirtH",
    "categorieNom": "T-shirts",
    "numProduit": 6,
    "images": [
      "assets/Homme/t-shirtH/t-shirt6.10img1.3.jpg",
      "assets/Homme/t-shirtH/t-shirt6.10img2.3.jpg",
      "assets/Homme/t-shirtH/t-shirt6.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 97,
    "nom": "T-shirt manches longues",
    "description": "T-shirt manches longues basique",
    "prix": 18.99,
    "genre": "Homme",
    "categorieSlug": "t-shirtH",
    "categorieNom": "T-shirts",
    "numProduit": 7,
    "images": [
      "assets/Homme/t-shirtH/t-shirt7.10img1.3.jpg",
      "assets/Homme/t-shirtH/t-shirt7.10img2.3.jpg",
      "assets/Homme/t-shirtH/t-shirt7.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 98,
    "nom": "T-shirt logo",
    "description": "T-shirt avec logo brodé",
    "prix": 22.99,
    "genre": "Homme",
    "categorieSlug": "t-shirtH",
    "categorieNom": "T-shirts",
    "numProduit": 8,
    "images": [
      "assets/Homme/t-shirtH/t-shirt8.10img1.3.jpg",
      "assets/Homme/t-shirtH/t-shirt8.10img2.3.jpg",
      "assets/Homme/t-shirtH/t-shirt8.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 99,
    "nom": "T-shirt tie-dye",
    "description": "T-shirt tie-dye coloré tendance",
    "prix": 21.99,
    "genre": "Homme",
    "categorieSlug": "t-shirtH",
    "categorieNom": "T-shirts",
    "numProduit": 9,
    "images": [
      "assets/Homme/t-shirtH/t-shirt9.10img1.3.jpg",
      "assets/Homme/t-shirtH/t-shirt9.10img2.3.jpg",
      "assets/Homme/t-shirtH/t-shirt9.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 100,
    "nom": "T-shirt polo",
    "description": "Polo manches courtes casual chic",
    "prix": 24.99,
    "genre": "Homme",
    "categorieSlug": "t-shirtH",
    "categorieNom": "T-shirts",
    "numProduit": 10,
    "images": [
      "assets/Homme/t-shirtH/t-shirt10.10img1.3.jpg",
      "assets/Homme/t-shirtH/t-shirt10.10img2.3.jpg",
      "assets/Homme/t-shirtH/t-shirt10.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Blanc",
        "hex": "#FFFFFF"
      },
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Gris",
        "hex": "#808080"
      }
    ]
  },
  {
    "id": 101,
    "nom": "Veste en jean",
    "description": "Veste en denim classique indispensable",
    "prix": 49.99,
    "genre": "Homme",
    "categorieSlug": "vestesH",
    "categorieNom": "Vestes",
    "numProduit": 1,
    "images": [
      "assets/Homme/vestesH/veste1.10img1.3.jpg",
      "assets/Homme/vestesH/veste1.10img2.3.jpg",
      "assets/Homme/vestesH/veste1.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 102,
    "nom": "Veste cargo",
    "description": "Veste cargo multi-poches streetwear",
    "prix": 54.99,
    "genre": "Homme",
    "categorieSlug": "vestesH",
    "categorieNom": "Vestes",
    "numProduit": 2,
    "images": [
      "assets/Homme/vestesH/veste2.10img1.3.jpg",
      "assets/Homme/vestesH/veste2.10img2.3.jpg",
      "assets/Homme/vestesH/veste2.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 103,
    "nom": "Blazer casual",
    "description": "Blazer décontracté casual chic",
    "prix": 59.99,
    "genre": "Homme",
    "categorieSlug": "vestesH",
    "categorieNom": "Vestes",
    "numProduit": 3,
    "images": [
      "assets/Homme/vestesH/veste3.10img1.3.jpg",
      "assets/Homme/vestesH/veste3.10img2.3.jpg",
      "assets/Homme/vestesH/veste3.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 104,
    "nom": "Veste bombardier",
    "description": "Bomber jacket tendance et chaud",
    "prix": 64.99,
    "genre": "Homme",
    "categorieSlug": "vestesH",
    "categorieNom": "Vestes",
    "numProduit": 4,
    "images": [
      "assets/Homme/vestesH/veste4.10img1.3.jpg",
      "assets/Homme/vestesH/veste4.10img2.3.jpg",
      "assets/Homme/vestesH/veste4.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 105,
    "nom": "Veste en cuir synthétique",
    "description": "Perfecto en similicuir style rock",
    "prix": 69.99,
    "genre": "Homme",
    "categorieSlug": "vestesH",
    "categorieNom": "Vestes",
    "numProduit": 5,
    "images": [
      "assets/Homme/vestesH/veste5.10img1.3.jpg",
      "assets/Homme/vestesH/veste5.10img2.3.jpg",
      "assets/Homme/vestesH/veste5.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 106,
    "nom": "Veste technique",
    "description": "Veste coupe-vent légère et imperméable",
    "prix": 57.99,
    "genre": "Homme",
    "categorieSlug": "vestesH",
    "categorieNom": "Vestes",
    "numProduit": 6,
    "images": [
      "assets/Homme/vestesH/veste6.10img1.3.jpg",
      "assets/Homme/vestesH/veste6.10img2.3.jpg",
      "assets/Homme/vestesH/veste6.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 107,
    "nom": "Veste teddy",
    "description": "Veste teddy avec col en fausse fourrure",
    "prix": 62.99,
    "genre": "Homme",
    "categorieSlug": "vestesH",
    "categorieNom": "Vestes",
    "numProduit": 7,
    "images": [
      "assets/Homme/vestesH/veste7.10img1.3.jpg",
      "assets/Homme/vestesH/veste7.10img2.3.jpg",
      "assets/Homme/vestesH/veste7.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 108,
    "nom": "Veste militaire",
    "description": "Veste style militaire avec épaulettes",
    "prix": 55.99,
    "genre": "Homme",
    "categorieSlug": "vestesH",
    "categorieNom": "Vestes",
    "numProduit": 8,
    "images": [
      "assets/Homme/vestesH/veste8.10img1.3.jpg",
      "assets/Homme/vestesH/veste8.10img2.3.jpg",
      "assets/Homme/vestesH/veste8.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 109,
    "nom": "Veste coach",
    "description": "Coach jacket légère style américain",
    "prix": 52.99,
    "genre": "Homme",
    "categorieSlug": "vestesH",
    "categorieNom": "Vestes",
    "numProduit": 9,
    "images": [
      "assets/Homme/vestesH/veste9.10img1.3.jpg",
      "assets/Homme/vestesH/veste9.10img2.3.jpg",
      "assets/Homme/vestesH/veste9.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  },
  {
    "id": 110,
    "nom": "Veste zippée",
    "description": "Veste légère zippée mi-saison",
    "prix": 47.99,
    "genre": "Homme",
    "categorieSlug": "vestesH",
    "categorieNom": "Vestes",
    "numProduit": 10,
    "images": [
      "assets/Homme/vestesH/veste10.10img1.3.jpg",
      "assets/Homme/vestesH/veste10.10img2.3.jpg",
      "assets/Homme/vestesH/veste10.10img3.3.jpg"
    ],
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      {
        "nom": "Noir",
        "hex": "#000000"
      },
      {
        "nom": "Kaki",
        "hex": "#6B6B47"
      },
      {
        "nom": "Marine",
        "hex": "#001f5b"
      }
    ]
  }
];
