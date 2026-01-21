from ai_engine import AIGameAssistant

# Instance du service
ai = AIGameAssistant()

print("--- TEST TEXTE ---")
print(ai.generate_lore("Une épée brisée maudite par un dragon"))

print("\n--- TEST IMAGE ---")
print(f"Lien de l'image : {ai.generate_asset_image('Un bouclier en écailles de dragon bleu')}")