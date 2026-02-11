const { generateImage } = require('../services/aiService');
const fs = require('fs');
const path = require('path');

// Fonction pour gérer la requête HTTP
const createAsset = async (req, res) => {
    try {
        // 1. Récupérer les données envoyées par le Front (Membre A)
        const { prompt, style, assetType } = req.body;

        if (!prompt) {
            return res.status(400).json({ success: false, error: "Le prompt est obligatoire" });
        }

        // 2. Améliorer le prompt (Prompt Engineering simple pour le jeu vidéo)
        // Ex: "pixel art, sword, white background"
        const enhancedPrompt = `${style} style, ${assetType}, ${prompt}, white background, isolated, high quality`;

        // 3. Appeler le service IA
        const imageBuffer = await generateImage(enhancedPrompt);

        // 4. Sauvegarder l'image (Simulation du travail du Membre C)
        // On crée un nom unique basé sur la date
        const fileName = `asset_${Date.now()}.png`;
        const uploadDir = path.join(__dirname, '../public/uploads');

        // Vérifie si le dossier existe, sinon le crée
        if (!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const filePath = path.join(uploadDir, fileName);
        fs.writeFileSync(filePath, imageBuffer);

        // 5. Renvoyer l'URL au Front
        res.json({
            success: true,
            message: "Asset généré !",
            imageUrl: `/uploads/${fileName}`,
            metadata: { prompt: enhancedPrompt, date: new Date() }
        });

    } catch (error) {
        console.error(error);
        // Si l'IA est en train de charger (erreur 503 courante chez HF gratuit), on prévient
        if (error.message.includes("estimated_time")) {
            return res.status(503).json({ success: false, error: "Le modèle chauffe, réessayez dans 30s" });
        }
        res.status(500).json({ success: false, error: "Erreur serveur lors de la génération" });
    }
};

module.exports = { createAsset };