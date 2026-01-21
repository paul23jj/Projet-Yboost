import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI()

def generate_text_asset(prompt):
    """Génère du texte (lore, dialogue, description d'objet)."""
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": f"Contexte jeu vidéo : {prompt}"}]
    )
    return response.choices[0].message.content

def generate_image_url(prompt):
    """Génère une image (sprite, texture, concept art)."""
    response = client.images.generate(
        model="dall-e-3",
        prompt=f"Game asset style, high quality, {prompt}",
        n=1,
        size="1024x1024"
    )
    return response.data[0].url

# TEST RAPIDE
# print(generate_text_asset("Description d'une épée de feu"))