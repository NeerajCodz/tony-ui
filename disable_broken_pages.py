import re
import glob
import os

# Read all exports from src/ui/index.ts
with open('src/ui/index.ts', 'r', encoding='utf-8') as f:
    index_content = f.read()

# Find all non-commented exports
exports = set()
for match in re.finditer(r'export.*from.*', index_content):
    line = match.group(0)
    if not line.strip().startswith('//'):
        # Extract export names
        if 'default as' in line:
            name = re.search(r'default as (\w+)', line)
            if name:
                exports.add(name.group(1))
        elif 'export {' in line:
            names = re.findall(r'\b([A-Z]\w+)\b', line.split('from')[0])
            exports.update(names)

print(f'Found {len(exports)} exported components: {sorted(exports)[:10]}...')

# Check all page files
pages = glob.glob('src/pages/ui/*Page.tsx')
pages_to_disable = []

for page in pages:
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find imports from '../../ui'
    imports = re.findall(r'import\s+\{([^}]+)\}\s+from\s+["\']\.\.\/\.\.\/ui["\']', content)
    for import_list in imports:
        components = [c.strip() for c in import_list.split(',')]
        for comp in components:
            if comp and comp not in exports:
                print(f'{os.path.basename(page)}: imports missing {comp}')
                pages_to_disable.append(page)
                break

print(f'\n{len(set(pages_to_disable))} pages to disable')
for page in set(pages_to_disable):
    os.rename(page, page + '.bak')
    print(f'  Disabled: {os.path.basename(page)}')

print('\n✅ Done!')
