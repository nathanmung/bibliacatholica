import os

# Dossier pour les txt (créé si pas là)
txt_folder = 'txts'
os.makedirs(txt_folder, exist_ok=True)

# Chapitres 1 à n
start_chap = 1
end_chap = 24

for chap_num in range(start_chap, end_chap + 1):
    filename = f'{txt_folder}/josue_chap{chap_num}.txt'
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(f".")
    print(f"Fichier créé : {filename}")

print(f"Tous fichiers josue_chap{start_chap} à josue_chap{end_chap}.txt créés dans {txt_folder}/ !")