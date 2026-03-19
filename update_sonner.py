import glob
import os
import re

def update_sonner():
    files = glob.glob('src/ui/components/*/sonner.tsx')
    print(f"Found {len(files)} sonner files")
    
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if "if (type === 'inverse')" in content:
            print(f"Skipping {file_path} (already updated)")
            continue

        # Replace const with let for bg, fg, border
        content = re.sub(r'const bg =', 'let bg =', content)
        content = re.sub(r'const fg =', 'let fg =', content)
        content = re.sub(r'const border =', 'let border =', content)

        # Find the end of the variable declarations to insert logic
        # We look for the line defining 'border' or 'glow'
        
        # Pattern covers potentially glow line or just border line
        pattern = r"(let border = colors\?\.border \|\| ['\w#]+;(?:\s*const glow =[^;]+;)?)"
        
        match = re.search(pattern, content)
        if match:
            end_of_decl = match.end()
            
            logic = "\n\n    // Handle new types\n"
            logic += "    if (type === 'inverse') {\n"
            logic += "      const temp = bg;\n"
            logic += "      bg = fg;\n"
            logic += "      fg = temp;\n"
            logic += "      border = bg;\n"
            logic += "    } else if (type === 'contrast') {\n"
            logic += "      border = fg;\n"
            logic += "      bg = colors?.base || '#000000';\n"
            logic += "      fg = colors?.foreground || '#ffffff';\n"
            logic += "    } else if (type === 'soft') {\n"
            logic += "      bg = colors?.muted || bg;\n"
            logic += "      border = colors?.border ? `${colors.border}40` : border;\n"
            logic += "    }"
            
            new_content = content[:end_of_decl] + logic + content[end_of_decl:]
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file_path}")
        else:
            print(f"Pattern not found in {file_path}")

if __name__ == "__main__":
    update_sonner()
