import os
from openai import OpenAI
from dotenv import load_dotenv

# Charger les variables du fichier .env
load_dotenv()

# Initialiser le client OpenAI
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class AIGameAssistant:
    def __init__(self, model="gpt-4o"):
        self.model = model

    def generate_lore(self, subject):
        """Génère l'histoire d'un personnage ou d'un lieu."""
        try:
            response = client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": "Tu es un scénariste de RPG sombre et épique."},
                    {"role": "user", "content": f"Écris une courte légende sur : {subject}"}
                ],
                max_tokens=200
            )
            return response.choices[0].message.content
        except Exception as e:
            return f"Erreur lors de la génération du texte : {e}"

    def generate_asset_image(self, description):
        """Génère un lien vers une image (DALL-E 3)."""
        try:
            response = client.images.generate(
                model="dall-e-3",
                prompt=f"Jeu vidéo asset, style digital art, haute résolution, {description}",
                size="1024x1024",
                quality="standard",
                n=1,
            )
            return response.data[0].url
        except Exception as e:
            return f"Erreur lors de la génération d'image : {e}"