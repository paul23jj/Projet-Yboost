USE yboost;

-- ============================================================
-- COULEURS
-- ============================================================
INSERT INTO couleur (nom, hex_code) VALUES
                                        ('Noir', '#000000'),
                                        ('Blanc', '#FFFFFF'),
                                        ('Bleu', '#1a3a5c'),
                                        ('Bleu clair', '#5b8db8'),
                                        ('Gris', '#808080'),
                                        ('Gris clair', '#d3d3d3'),
                                        ('Beige', '#f5f0e8'),
                                        ('Marron', '#8B4513'),
                                        ('Kaki', '#6B6B47'),
                                        ('Rose', '#FFB6C1'),
                                        ('Rouge', '#CC0000'),
                                        ('Vert', '#2d6a4f'),
                                        ('Crème', '#FFFDD0'),
                                        ('Marine', '#001f5b'),
                                        ('Bordeaux', '#722F37');

-- ============================================================
-- FEMME — jeansF (categorie_id = 1)
-- ============================================================
INSERT INTO produit (nom, description, prix, categorie_id, num_produit, stock) VALUES
                                                                                   ('Jean slim taille haute', 'Jean slim fit taille haute, coupe moderne et confortable', 35.99, 1, 1, 45),
                                                                                   ('Jean wide leg', 'Jean large tendance, style décontracté', 39.99, 1, 2, 30),
                                                                                   ('Jean boyfriend', 'Jean boyfriend vintage légèrement délavé', 37.99, 1, 3, 25),
                                                                                   ('Jean skinny noir', 'Jean skinny noir stretch très confortable', 33.99, 1, 4, 50),
                                                                                   ('Jean mom fit', 'Jean mom taille haute coupe droite', 36.99, 1, 5, 35),
                                                                                   ('Jean flare', 'Jean évasé style 70s tendance', 41.99, 1, 6, 20),
                                                                                   ('Jean cropped', 'Jean court cheville coupe slim', 34.99, 1, 7, 40),
                                                                                   ('Jean baggy', 'Jean baggy oversize ultra tendance', 43.99, 1, 8, 28),
                                                                                   ('Jean déchiré', 'Jean slim avec déchirures aux genoux', 38.99, 1, 9, 32),
                                                                                   ('Jean cargo denim', 'Jean avec poches cargo style streetwear', 44.99, 1, 10, 22);

-- ============================================================
-- FEMME — pentalonsF (categorie_id = 2)
-- ============================================================
INSERT INTO produit (nom, description, prix, categorie_id, num_produit, stock) VALUES
                                                                                   ('Pantalon large beige', 'Pantalon large fluide style casual chic', 32.99, 2, 1, 40),
                                                                                   ('Pantalon tailleur', 'Pantalon tailleur coupe droite élégante', 39.99, 2, 2, 25),
                                                                                   ('Pantalon cargo kaki', 'Pantalon cargo avec poches latérales', 37.99, 2, 3, 35),
                                                                                   ('Pantalon satiné', 'Pantalon satiné brillant pour soirée', 42.99, 2, 4, 18),
                                                                                   ('Pantalon jogger', 'Pantalon jogger confortable taille élastique', 29.99, 2, 5, 50),
                                                                                   ('Pantalon imprimé', 'Pantalon à motif floral tendance', 34.99, 2, 6, 22),
                                                                                   ('Pantalon cuir synthétique', 'Pantalon effet cuir coupe slim', 44.99, 2, 7, 20),
                                                                                   ('Pantalon palazzo', 'Pantalon palazzo très large ultra fluide', 36.99, 2, 8, 30),
                                                                                   ('Pantalon cigarette', 'Pantalon cigarette coupe droite classique', 33.99, 2, 9, 38),
                                                                                   ('Pantalon velours', 'Pantalon en velours côtelé tendance', 38.99, 2, 10, 27);

-- ============================================================
-- FEMME — robesF (categorie_id = 3)
-- ============================================================
INSERT INTO produit (nom, description, prix, categorie_id, num_produit, stock) VALUES
                                                                                   ('Robe midi fleurie', 'Robe midi à fleurs légère et féminine', 35.99, 3, 1, 30),
                                                                                   ('Robe mini noire', 'Robe courte noire intemporelle', 29.99, 3, 2, 45),
                                                                                   ('Robe longue bohème', 'Robe longue style bohème avec broderies', 49.99, 3, 3, 18),
                                                                                   ('Robe chemise', 'Robe chemise décontractée oversize', 34.99, 3, 4, 35),
                                                                                   ('Robe à bretelles', 'Robe d\'été légère à bretelles', 27.99, 3, 5, 40),
('Robe satinée', 'Robe satinée brillante pour soirée', 44.99, 3, 6, 15),
('Robe pull', 'Robe pull en maille douce et confortable', 32.99, 3, 7, 28),
('Robe asymétrique', 'Robe asymétrique tendance et originale', 39.99, 3, 8, 20),
('Robe moulante', 'Robe moulante stretch élégante', 37.99, 3, 9, 25),
('Robe babydoll', 'Robe babydoll romantique avec dentelle', 31.99, 3, 10, 33);

-- ============================================================
-- FEMME — shortsF (categorie_id = 4)
-- ============================================================
INSERT INTO produit (nom, description, prix, categorie_id, num_produit, stock) VALUES
('Short jean taille haute', 'Short en jean taille haute coupe vintage', 25.99, 4, 1, 50),
('Short cycliste', 'Short cycliste moulant sport et casual', 22.99, 4, 2, 45),
('Short fluide imprimé', 'Short fluide à motif tropical', 24.99, 4, 3, 38),
('Short cargo', 'Short cargo avec poches latérales', 29.99, 4, 4, 30),
('Short satiné', 'Short satiné brillant style loungewear', 27.99, 4, 5, 25),
('Short bermuda', 'Bermuda long décontracté', 26.99, 4, 6, 40),
('Short en lin', 'Short en lin léger pour l\'été', 28.99, 4, 7, 35),
                                                                                   ('Short sport', 'Short de sport avec élastique et cordon', 21.99, 4, 8, 55),
                                                                                   ('Short cuir synthétique', 'Short effet cuir coupe slim tendance', 32.99, 4, 9, 20),
                                                                                   ('Short à volants', 'Short avec volants romantique et féminin', 23.99, 4, 10, 42);

-- ============================================================
-- FEMME — TopF (categorie_id = 5)
-- ============================================================
INSERT INTO produit (nom, description, prix, categorie_id, num_produit, stock) VALUES
                                                                                   ('Top brassière', 'Top brassière sport et casual', 18.99, 5, 1, 60),
                                                                                   ('Top crop basique', 'T-shirt crop top basique indispensable', 15.99, 5, 2, 70),
                                                                                   ('Top à nouer', 'Top à nouer dans le dos tendance', 22.99, 5, 3, 45),
                                                                                   ('Top imprimé', 'Top à imprimé graphique tendance', 19.99, 5, 4, 50),
                                                                                   ('Top épaules dénudées', 'Top avec épaules dénudées élégant', 24.99, 5, 5, 35),
                                                                                   ('Top crochet', 'Top en crochet style bohème', 27.99, 5, 6, 25),
                                                                                   ('Top strappy', 'Top à fines bretelles croisées dans le dos', 20.99, 5, 7, 40),
                                                                                   ('Top maille côtelée', 'Top en maille côtelée slim', 17.99, 5, 8, 55),
                                                                                   ('Top pailleté', 'Top pailleté pour soirée festive', 29.99, 5, 9, 20),
                                                                                   ('Top corset', 'Top corset tendance style vintage', 26.99, 5, 10, 30);

-- ============================================================
-- HOMME — jeansH (categorie_id = 6)
-- ============================================================
INSERT INTO produit (nom, description, prix, categorie_id, num_produit, stock) VALUES
                                                                                   ('Jean slim basique', 'Jean slim fit classique indispensable', 35.99, 6, 1, 50),
                                                                                   ('Jean straight', 'Jean coupe droite intemporel', 37.99, 6, 2, 45),
                                                                                   ('Jean baggy homme', 'Jean baggy oversize streetwear', 43.99, 6, 3, 28),
                                                                                   ('Jean skinny homme', 'Jean skinny stretch très confortable', 33.99, 6, 4, 40),
                                                                                   ('Jean déchiré homme', 'Jean avec déchirures style rock', 39.99, 6, 5, 30),
                                                                                   ('Jean cargo denim homme', 'Jean cargo avec poches latérales', 44.99, 6, 6, 22),
                                                                                   ('Jean wide leg homme', 'Jean large tendance streetwear', 41.99, 6, 7, 25),
                                                                                   ('Jean délavé', 'Jean délavé style vintage', 36.99, 6, 8, 35),
                                                                                   ('Jean noir homme', 'Jean noir coupe slim élégant', 34.99, 6, 9, 48),
                                                                                   ('Jean patchwork', 'Jean avec patchwork style unique', 46.99, 6, 10, 15);

-- ============================================================
-- HOMME — pentalonsH (categorie_id = 7)
-- ============================================================
INSERT INTO produit (nom, description, prix, categorie_id, num_produit, stock) VALUES
                                                                                   ('Pantalon chino beige', 'Pantalon chino classique casual chic', 34.99, 7, 1, 45),
                                                                                   ('Pantalon cargo homme', 'Pantalon cargo multi-poches', 39.99, 7, 2, 35),
                                                                                   ('Pantalon de costume', 'Pantalon tailleur coupe droite élégant', 44.99, 7, 3, 20),
                                                                                   ('Pantalon jogger homme', 'Pantalon jogger confortable streetwear', 29.99, 7, 4, 55),
                                                                                   ('Pantalon lin homme', 'Pantalon en lin léger pour l\'été', 36.99, 7, 5, 30),
('Pantalon large homme', 'Pantalon large décontracté tendance', 37.99, 7, 6, 28),
('Pantalon velours homme', 'Pantalon velours côtelé tendance', 38.99, 7, 7, 25),
('Pantalon imprimé homme', 'Pantalon à motif géométrique', 33.99, 7, 8, 32),
('Pantalon tech', 'Pantalon technique style outdoor', 49.99, 7, 9, 18),
('Pantalon cuir synthétique homme', 'Pantalon effet cuir slim tendance', 46.99, 7, 10, 20);

-- ============================================================
-- HOMME — pull.giletsH (categorie_id = 8)
-- ============================================================
INSERT INTO produit (nom, description, prix, categorie_id, num_produit, stock) VALUES
('Pull col rond basique', 'Pull col rond en maille douce', 32.99, 8, 1, 40),
('Pull col V', 'Pull col V élégant et classique', 34.99, 8, 2, 35),
('Gilet boutonné', 'Gilet boutonné style preppy tendance', 37.99, 8, 3, 28),
('Pull oversize', 'Pull oversize confortable et tendance', 39.99, 8, 4, 30),
('Pull torsadé', 'Pull à torsades irlandaises classique', 44.99, 8, 5, 22),
('Gilet cardigan', 'Cardigan long décontracté', 42.99, 8, 6, 25),
('Pull rayé', 'Pull à rayures style marin', 36.99, 8, 7, 38),
('Pull col roulé', 'Pull col roulé chaud et élégant', 38.99, 8, 8, 30),
('Gilet sans manches', 'Gilet sans manches en maille', 29.99, 8, 9, 45),
('Pull color block', 'Pull bicolore tendance color block', 41.99, 8, 10, 20);

-- ============================================================
-- HOMME — sweatH (categorie_id = 9)
-- ============================================================
INSERT INTO produit (nom, description, prix, categorie_id, num_produit, stock) VALUES
('Sweat à capuche basique', 'Hoodie basique incontournable', 34.99, 9, 1, 60),
('Sweat col rond', 'Sweat col rond classique confortable', 29.99, 9, 2, 55),
('Sweat zip', 'Sweat zippé pratique et casual', 37.99, 9, 3, 40),
('Sweat imprimé', 'Sweat avec print graphique streetwear', 39.99, 9, 4, 35),
('Sweat oversize', 'Hoodie oversize tendance', 42.99, 9, 5, 28),
('Sweat tie-dye', 'Sweat tie-dye coloré tendance', 36.99, 9, 6, 25),
('Sweat college', 'Sweat style universitaire américain', 38.99, 9, 7, 32),
('Sweat technique', 'Sweat technique léger mi-saison', 44.99, 9, 8, 22),
('Sweat polaire', 'Sweat polaire chaud et doux', 46.99, 9, 9, 18),
('Sweat sans capuche crop', 'Sweat court sans capuche tendance', 31.99, 9, 10, 42);

-- ============================================================
-- HOMME — t-shirtH (categorie_id = 10)
-- ============================================================
INSERT INTO produit (nom, description, prix, categorie_id, num_produit, stock) VALUES
('T-shirt basique blanc', 'T-shirt basique blanc indispensable', 12.99, 10, 1, 80),
('T-shirt basique noir', 'T-shirt basique noir intemporel', 12.99, 10, 2, 80),
('T-shirt graphique', 'T-shirt avec print graphique tendance', 19.99, 10, 3, 50),
('T-shirt oversize', 'T-shirt oversize style streetwear', 17.99, 10, 4, 55),
('T-shirt rayé', 'T-shirt à rayures style marin', 16.99, 10, 5, 45),
('T-shirt col V homme', 'T-shirt col V léger et confortable', 14.99, 10, 6, 60),
('T-shirt manches longues', 'T-shirt manches longues basique', 18.99, 10, 7, 50),
('T-shirt logo', 'T-shirt avec logo brodé', 22.99, 10, 8, 40),
('T-shirt tie-dye', 'T-shirt tie-dye coloré tendance', 21.99, 10, 9, 35),
('T-shirt polo', 'Polo manches courtes casual chic', 24.99, 10, 10, 45);

-- ============================================================
-- HOMME — vestesH (categorie_id = 11)
-- ============================================================
INSERT INTO produit (nom, description, prix, categorie_id, num_produit, stock) VALUES
('Veste en jean', 'Veste en denim classique indispensable', 49.99, 11, 1, 30),
('Veste cargo', 'Veste cargo multi-poches streetwear', 54.99, 11, 2, 25),
('Blazer casual', 'Blazer décontracté casual chic', 59.99, 11, 3, 20),
('Veste bombardier', 'Bomber jacket tendance et chaud', 64.99, 11, 4, 18),
('Veste en cuir synthétique', 'Perfecto en similicuir style rock', 69.99, 11, 5, 15),
('Veste technique', 'Veste coupe-vent légère et imperméable', 57.99, 11, 6, 22),
('Veste teddy', 'Veste teddy avec col en fausse fourrure', 62.99, 11, 7, 17),
('Veste militaire', 'Veste style militaire avec épaulettes', 55.99, 11, 8, 20),
('Veste coach', 'Coach jacket légère style américain', 52.99, 11, 9, 28),
('Veste zippée', 'Veste légère zippée mi-saison', 47.99, 11, 10, 35);

-- ============================================================
-- Association tailles aux produits (toutes catégories)
-- Femme : XS(1), S(2), M(3), L(4), XL(5)
-- Homme : S(2), M(3), L(4), XL(5), XXL(6)
-- ============================================================

-- Procédure pour associer les tailles en masse
-- Femme (produits 1 à 50) : tailles XS, S, M, L, XL
INSERT INTO produit_taille (produit_id, taille_id, stock_taille)
SELECT p.id, t.id, FLOOR(p.stock / 5)
FROM produit p, taille t
WHERE p.categorie_id BETWEEN 1 AND 5
AND t.libelle IN ('XS', 'S', 'M', 'L', 'XL');

-- Homme (produits 51 à 100) : tailles S, M, L, XL, XXL
INSERT INTO produit_taille (produit_id, taille_id, stock_taille)
SELECT p.id, t.id, FLOOR(p.stock / 5)
FROM produit p, taille t
WHERE p.categorie_id BETWEEN 6 AND 11
AND t.libelle IN ('S', 'M', 'L', 'XL', 'XXL');

-- ============================================================
-- Association couleurs aux produits (2-3 couleurs par produit)
-- ============================================================
INSERT INTO produit_couleur (produit_id, couleur_id)
SELECT p.id, c.id FROM produit p, couleur c
WHERE p.categorie_id = 1 AND c.nom IN ('Bleu', 'Noir', 'Bleu clair');

INSERT INTO produit_couleur (produit_id, couleur_id)
SELECT p.id, c.id FROM produit p, couleur c
WHERE p.categorie_id = 2 AND c.nom IN ('Beige', 'Noir', 'Kaki');

INSERT INTO produit_couleur (produit_id, couleur_id)
SELECT p.id, c.id FROM produit p, couleur c
WHERE p.categorie_id = 3 AND c.nom IN ('Rose', 'Blanc', 'Noir');

INSERT INTO produit_couleur (produit_id, couleur_id)
SELECT p.id, c.id FROM produit p, couleur c
WHERE p.categorie_id = 4 AND c.nom IN ('Bleu', 'Noir', 'Beige');

INSERT INTO produit_couleur (produit_id, couleur_id)
SELECT p.id, c.id FROM produit p, couleur c
WHERE p.categorie_id = 5 AND c.nom IN ('Blanc', 'Noir', 'Rose');

INSERT INTO produit_couleur (produit_id, couleur_id)
SELECT p.id, c.id FROM produit p, couleur c
WHERE p.categorie_id = 6 AND c.nom IN ('Bleu', 'Noir', 'Gris');

INSERT INTO produit_couleur (produit_id, couleur_id)
SELECT p.id, c.id FROM produit p, couleur c
WHERE p.categorie_id = 7 AND c.nom IN ('Beige', 'Noir', 'Kaki');

INSERT INTO produit_couleur (produit_id, couleur_id)
SELECT p.id, c.id FROM produit p, couleur c
WHERE p.categorie_id = 8 AND c.nom IN ('Gris', 'Noir', 'Marine');

INSERT INTO produit_couleur (produit_id, couleur_id)
SELECT p.id, c.id FROM produit p, couleur c
WHERE p.categorie_id = 9 AND c.nom IN ('Gris', 'Noir', 'Blanc');

INSERT INTO produit_couleur (produit_id, couleur_id)
SELECT p.id, c.id FROM produit p, couleur c
WHERE p.categorie_id = 10 AND c.nom IN ('Blanc', 'Noir', 'Gris');

INSERT INTO produit_couleur (produit_id, couleur_id)
SELECT p.id, c.id FROM produit p, couleur c
WHERE p.categorie_id = 11 AND c.nom IN ('Noir', 'Kaki', 'Marine');
