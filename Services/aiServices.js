const { HfInference } = require('@huggingface/inference');
const fs = require('fs');
require('dotenv').config();

// Initialisation avec ta clé API du .env
const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

/**
 * Génère un asset de jeu à partir d'un prompt
 * @param {string} prompt - Description de l'objet (ex: "épée magique pixel art")
 * @param {string} filename - Nom du fichier de sortie
 */
async function generateGameAsset(prompt, filename) {
    try {
        console.log(`Extraction de l'asset pour : "${prompt}"...`);

        const response = await hf.textToImage({
            model: 'stabilityai/stable-diffusion-2-1', // Modèle standard, tu peux en tester d'autres
            inputs: prompt,
            parameters: {
                negative_prompt: "blurry, bad quality, distorted",
            },
        });

        // La réponse est un Blob, on le convertit en Buffer pour Node.js
        const buffer = Buffer.from(await response.arrayBuffer());

        // Sauvegarde locale de l'image
        fs.writeFileSync(`./${filename}.png`, buffer);

        console.log(`✅ Asset généré avec succès : ${filename}.png`);
        return true;
    } catch (error) {
        console.error("❌ Erreur lors de la génération :", error.message);
        return false;
    }
}

module.exports = { generateGameAsset };