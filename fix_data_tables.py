import glob
import os

files = glob.glob('src/ui/components/*/data-table.tsx')

target_str = """        style={{
             
        , ...typeStyles}}"""

replacement_str = """        style={{ ...typeStyles }}"""

count = 0
for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Normalize line endings just in case
    content = content.replace('\r\n', '\n')
    target_normalized = target_str.replace('\r\n', '\n')
    
    if target_normalized in content:
        new_content = content.replace(target_normalized, replacement_str)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed {file_path}")
        count += 1
    else:
        # Check if maybe it's the other pattern?
        # Let's try flexible replacement
        if ', ...typeStyles}}' in content:
             # This is risky if we replace valid usage, but we checked earlier that valid usage has properties before comma.
             # The invalid usage is: empty line before comma.
             pass

print(f"Total files fixed: {count}")
