import matplotlib.pyplot as plt
from matplotlib.font_manager import FontProperties
from matplotlib import patheffects  # Pour l'outline noir
import os

# Crée dossier output auto (si pas là)
os.makedirs('output', exist_ok=True)

# Chemin vers la font Cinzel BOLD (pour punch romain !)
font_path = 'fonts/Cinzel-Bold.ttf'  # Copié depuis static/ du ZIP Google Fonts
if not os.path.exists(font_path):
    print("Cinzel-Bold pas trouvé, fallback à serif bold (ajoute le TTF dans /fonts/ pour full romain !)")
    font_prop = FontProperties(family='serif', size=48, weight='bold')  # Fallback gras
else:
    font_prop = FontProperties(fname=font_path, size=48, weight='bold')  # Bold via TTF

# Config figure vide (transparent)
fig, ax = plt.subplots(figsize=(8, 2))  # Largeur x Hauteur (ajuste pour UI)

# Ajoute le texte
text_obj = ax.text(0.5, 0.5, 'Biblia Catholica',  # ← Change ici pour dynamique (e.g., f'Exode Chapitre {chap}')
                   ha='center', va='center',
                   fontsize=48,  # Taille ajustable
                   fontproperties=font_prop,
                   color='#D4AF37')  # Jaune doré pour l'intérieur

# Outline noir (le relief enluminé !)
text_obj.set_path_effects([patheffects.withStroke(linewidth=2, foreground='black')])  # linewidth=2 fin, tweak si besoin

# Fond transparent + pas d'axes
ax.axis('off')
fig.patch.set_alpha(0.0)
ax.patch.set_alpha(0.0)

# Sauvegarde PNG transparent
output_path = 'output/Biblia_Catholica_Name.png'
plt.savefig(output_path, transparent=True, bbox_inches='tight', pad_inches=0.1, dpi=300)  # Haute rés retina
plt.close()  # Ferme pour mémoire
print(f"Image générée avec outline noir/jaune : {output_path}")