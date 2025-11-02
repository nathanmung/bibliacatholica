import json
import os

# Infos du livre Exode
book_info = {
    "abbrev": "Ex",
    "name": "Exode",
    "testament": "Ancien",
    "chapters": []
}

# Dossier des .txt
txt_folder = 'txts'
max_chapters = 40  # Full Exode

for chapter_num in range(1, max_chapters + 1):
  filename = f'{txt_folder}/exode_chap{chapter_num}.txt'
  if not os.path.exists(filename):
    print(f"Fichier non trouvé pour Chap {chapter_num}: {filename}—skip.")
    continue

  verses = []
  with open(filename, 'r', encoding='utf-8') as f:
    lines = f.readlines()

  for line in lines:
    line = line.strip()
    if line.startswith("Livre de l'Exode") or not line or not line[0].isdigit():  # Skip titre/vide
      continue
    # Extrait numéro (2 premiers chiffres "01 ")
    verse_num_str = line[:2].strip()
    if verse_num_str.isdigit():
      verse_num = int(verse_num_str)
      text = line[2:].strip()
      verses.append({
        "number": verse_num,
        "text": text
      })
      print(f"Chap {chapter_num} Verset {verse_num}: {text[:40]}...")  # Debug

  if verses:
    book_info["chapters"].append({
      "number": chapter_num,
      "verses": verses
    })

# Sauve JSON full
output_filename = 'exode_full_aelf.json'
with open(output_filename, 'w', encoding='utf-8') as f:
  json.dump({"book": book_info}, f, ensure_ascii=False, indent=4)

print(f"JSON full Exode généré : {output_filename} (avec {len(book_info['chapters'])} chapitres)")