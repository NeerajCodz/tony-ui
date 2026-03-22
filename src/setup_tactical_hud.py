import os
import shutil
import re

source_dir = r"E:\TONY\ui\src\ui\components\energy-shield"
target_dir = r"E:\TONY\ui\src\ui\components\tactical-hud"

# 1. Clean target directory
if os.path.exists(target_dir):
    shutil.rmtree(target_dir)
shutil.copytree(source_dir, target_dir)

# 2. Renaming rules
replacements = [
    ("EnergyShield", "TacticalHud"),
    ("energy-shield", "tactical-hud"),
    ("--es-", "--th-"),
    ("ES_CLIP_PATH", "TH_BRACKET_PATH"), # We might not use clip-path but let's rename
    ('font-["Orbitron"]', 'font-["Chakra_Petch"]'),
    ('font-["Exo_2"]', 'font-["Chakra_Petch"]'), # Body is also Chakra Petch
    ('font-mono', 'font-["Fira_Code"]'),
    ('font-["Share_Tech_Mono"]', 'font-["Fira_Code"]'),
    # Fix for manually set fonts in previous files if any
    ('font-["Syncopate"]', 'font-["Chakra_Petch"]'), 
    ('font-["Josefin_Sans"]', 'font-["Chakra_Petch"]'),
]

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    for old, new in replacements:
        new_content = new_content.replace(old, new)
        
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")

for filename in os.listdir(target_dir):
    if filename.endswith(".tsx") or filename.endswith(".ts"):
        process_file(os.path.join(target_dir, filename))

print("Tactical HUD setup complete.")
