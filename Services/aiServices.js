require('dotenv').config();

async function generateImage(prompt) {
    console.log(`🤖 Envoi du prompt à l'IA : "${prompt}"`);

    try {
        const response = await fetch(process.env.HF_API_URL, {
            headers: {
                Authorization: `Bearer ${process.env.HF_API_KEY}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                inputs: prompt,
                // Paramètres optionnels pour améliorer le résultat
                parameters: {
                    negative_prompt: "blurry, low quality, text, watermark, bad anatomy",
                }
            }),
        });

        // Gestion des erreurs spécifiques à Hugging Face
        if (!response.ok) {
            const errorDetails = await response.json(); // Souvent HF renvoie du JSON en cas d'erreur
            throw new Error(`Erreur API (${response.status}): ${JSON.stringify(errorDetails)}`);
        }

        // Si tout va bien, l'API renvoie une image binaire (Blob/Buffer)
        const arrayBuffer = await response.arrayBuffer();
        return Buffer.from(arrayBuffer); // On convertit en Buffer Node.js

    } catch (error) {
        console.error("❌ Erreur dans aiService :", error.message);
        throw error; // On renvoie l'erreur pour que le contrôleur la gère
    }
}

module.exports = { generateImage };

if (response.status === 503) {
    const data = await response.json();
    return res.status(503).json({
        success: false,
        error: "Le modèle est en train de chauffer...",
        estimated_time: data.estimated_time
    });
} // le model s'endort si il n'est pas utilisé au bout de 1 heure