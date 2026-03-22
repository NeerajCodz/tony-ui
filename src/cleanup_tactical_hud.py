import os

def replace_in_files(directory, replacements):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".tsx") or file.endswith(".ts"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements.items():
                    new_content = new_content.replace(old, new)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")

directory = "E:/TONY/ui/src/ui/components/tactical-hud"
replacements = {
    "energyShieldEffectsClass": "tacticalHudEffectsClass",
    "energyShield": "tacticalHud",  # Replace camelCase prop names if any
    "Energy Shield": "Tactical HUD", # Comments or docs
    "energy-shield": "tactical-hud", # Class names or string literals
}

replace_in_files(directory, replacements)
