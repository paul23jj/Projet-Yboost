CREATE DATABASE IF NOT EXISTS yboost CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE yboost;

CREATE TABLE genre (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL
);

CREATE TABLE categorie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    genre_id INT NOT NULL,
    FOREIGN KEY (genre_id) REFERENCES genre(id)
);

CREATE TABLE produit (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    prix DECIMAL(10,2) NOT NULL,
    categorie_id INT NOT NULL,
    num_produit INT NOT NULL,
    stock INT DEFAULT 0,
    actif TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categorie_id) REFERENCES categorie(id)
);

CREATE TABLE produit_image (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produit_id INT NOT NULL,
    nom_fichier VARCHAR(255) NOT NULL,
    ordre INT DEFAULT 1,
    is_affiche TINYINT(1) DEFAULT 0,
    FOREIGN KEY (produit_id) REFERENCES produit(id)
);

CREATE TABLE taille (
    id INT AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(10) NOT NULL
);

CREATE TABLE produit_taille (
    produit_id INT NOT NULL,
    taille_id INT NOT NULL,
    stock_taille INT DEFAULT 0,
    PRIMARY KEY (produit_id, taille_id),
    FOREIGN KEY (produit_id) REFERENCES produit(id),
    FOREIGN KEY (taille_id) REFERENCES taille(id)
);

CREATE TABLE couleur (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    hex_code VARCHAR(7)
);

CREATE TABLE produit_couleur (
    produit_id INT NOT NULL,
    couleur_id INT NOT NULL,
    PRIMARY KEY (produit_id, couleur_id),
    FOREIGN KEY (produit_id) REFERENCES produit(id),
    FOREIGN KEY (couleur_id) REFERENCES couleur(id)
);

CREATE TABLE utilisateur (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    prenom VARCHAR(100),
    nom VARCHAR(100),
    telephone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE adresse (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    prenom VARCHAR(100),
    nom VARCHAR(100),
    rue VARCHAR(255) NOT NULL,
    complement VARCHAR(255),
    code_postal VARCHAR(10) NOT NULL,
    ville VARCHAR(100) NOT NULL,
    pays VARCHAR(100) DEFAULT 'France',
    est_defaut TINYINT(1) DEFAULT 0,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id)
);

CREATE TABLE commande (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT,
    email_invite VARCHAR(255),
    adresse_livraison_id INT,
    statut ENUM('en_attente','payee','expediee','livree','annulee') DEFAULT 'en_attente',
    total DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id),
    FOREIGN KEY (adresse_livraison_id) REFERENCES adresse(id)
);

CREATE TABLE commande_ligne (
    id INT AUTO_INCREMENT PRIMARY KEY,
    commande_id INT NOT NULL,
    produit_id INT NOT NULL,
    taille_id INT,
    couleur_id INT,
    quantite INT NOT NULL DEFAULT 1,
    prix_unitaire DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (commande_id) REFERENCES commande(id),
    FOREIGN KEY (produit_id) REFERENCES produit(id),
    FOREIGN KEY (taille_id) REFERENCES taille(id),
    FOREIGN KEY (couleur_id) REFERENCES couleur(id)
);

CREATE TABLE panier (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT,
    session_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE panier_ligne (
    id INT AUTO_INCREMENT PRIMARY KEY,
    panier_id INT NOT NULL,
    produit_id INT NOT NULL,
    taille_id INT,
    couleur_id INT,
    quantite INT NOT NULL DEFAULT 1,
    FOREIGN KEY (panier_id) REFERENCES panier(id),
    FOREIGN KEY (produit_id) REFERENCES produit(id),
    FOREIGN KEY (taille_id) REFERENCES taille(id),
    FOREIGN KEY (couleur_id) REFERENCES couleur(id)
);

INSERT INTO genre (nom) VALUES ('Femme'), ('Homme');

INSERT INTO categorie (nom, slug, genre_id) VALUES
('Jeans', 'jeansF', 1),
('Pantalons', 'pentalonsF', 1),
('Robes', 'robesF', 1),
('Shorts', 'shortsF', 1),
('Tops', 'TopF', 1);

INSERT INTO categorie (nom, slug, genre_id) VALUES
('Jeans', 'jeansH', 2),
('Pantalons', 'pentalonsH', 2),
('Pulls & Gilets', 'pull.giletsH', 2),
('Sweats', 'sweatH', 2),
('T-shirts', 't-shirtH', 2),
('Vestes', 'vestesH', 2);

INSERT INTO taille (libelle) VALUES
('XS'), ('S'), ('M'), ('L'), ('XL'), ('XXL'),
('34'), ('36'), ('38'), ('40'), ('42'), ('44');
