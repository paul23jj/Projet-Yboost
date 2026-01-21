import OpenAI from "openai";
import 'dotenv/config';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function genererCitation(theme) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Modèle rapide et économique
      messages: [
        { role: "system", content: "Tu es un coach en motivation." },
        { role: "user", content: `Donne-moi une citation inspirante sur le thème : ${theme}` },
      ],
    });

    console.log("🤖 IA :", completion.choices[0].message.content);
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
  }
}

genererCitation("le codage informatique");