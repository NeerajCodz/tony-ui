import os
import re

target_components = [
    'calendar', 'card', 'carousel', 'chart', 'checkbox', 
    'collapsible', 'combobox', 'command', 'context-menu'
]

def check_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    has_get_type_styles = 'const getTypeStyles' in content or 'function getTypeStyles' in content
    has_inverse = 'case \'inverse\':' in content
    has_contrast = 'case \'contrast\':' in content
    has_soft = 'case \'soft\':' in content
    uses_spread_base = '...base' in content
    defines_base = re.search(r'const base(:.*?)? = \{', content) is not None
    
    return {
        'filepath': filepath,
        'has_get_type_styles': has_get_type_styles,
        'has_inverse': has_inverse,
        'has_contrast': has_contrast,
        'has_soft': has_soft,
        'uses_spread_base': uses_spread_base,
        'defines_base': defines_base
    }

base_dir = r'E:\TONY\ui\src\ui\components'
files_to_check = []

# Collect files
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if not file.endswith('.tsx'):
            continue
            
        # Check if file belongs to target components
        # Pattern 1: component/version.tsx or component/component-version.tsx
        # Pattern 2: version/component.tsx
        
        path_parts = os.path.relpath(os.path.join(root, file), base_dir).split(os.sep)
        
        relevant = False
        
        # Check if directory matches component name (Pattern 1)
        if path_parts[0] in target_components:
            relevant = True
        
        # Check if filename matches component name (Pattern 2)
        if file.startswith('card') or file.startswith('carousel') or file.startswith('checkbox') or \
           file.startswith('collapsible') or file.startswith('combobox') or file.startswith('command') or \
           file.startswith('context-menu'):
           # Be careful not to pick up others, but generally okay as we filter later
           # Actually, need to be more specific.
           
           if file == 'card.tsx' and path_parts[0] not in target_components: # e.g. angular-corner/card.tsx
               relevant = True
           elif file == 'carousel.tsx':
               relevant = True
           elif file == 'checkbox.tsx':
               relevant = True
           elif file == 'collapsible.tsx':
               relevant = True
           # combobox, command, context-menu usually in their own folder?
           
        if 'hover-card' in file: # Exclude hover-card as per instructions (or implicit)
            relevant = False
            
        if relevant:
            files_to_check.append(os.path.join(root, file))

# Filter specific patterns requested
final_files = []
for f in files_to_check:
    name = os.path.basename(f)
    parent = os.path.basename(os.path.dirname(f))
    
    # 1. calendar - versions in src/ui/components/calendar/
    if 'calendar' in parent and name.startswith('calendar-'):
        final_files.append(f)
    
    # 2. card - src/ui/components/{version}/card.tsx
    elif name == 'card.tsx':
        final_files.append(f)

    # 3. carousel - src/ui/components/{version}/carousel.tsx OR src/ui/components/carousel/carousel-*.tsx
    # The prompt says "versions in .../{version}/carousel.tsx" but previously I saw "carousel-*.tsx".
    # I will include both patterns if they exist.
    elif name == 'carousel.tsx' or (parent == 'carousel' and name.startswith('carousel-')):
        final_files.append(f)

    # 4. chart - src/ui/components/chart/
    elif parent == 'chart' and name.startswith('chart-'):
        final_files.append(f)

    # 5. checkbox - src/ui/components/{version}/checkbox.tsx
    elif name == 'checkbox.tsx' or (parent == 'checkbox' and name.startswith('checkbox-')):
        final_files.append(f)

    # 6. collapsible - src/ui/components/{version}/collapsible.tsx
    elif name == 'collapsible.tsx' or (parent == 'collapsible' and name.startswith('collapsible-')):
        final_files.append(f)

    # 7. combobox - src/ui/components/combobox/
    elif parent == 'combobox' and name.startswith('combobox-'):
        final_files.append(f)

    # 8. command - src/ui/components/command/
    elif parent == 'command' and name.startswith('command-'):
        final_files.append(f)

    # 9. context-menu - src/ui/components/context-menu/
    elif parent == 'context-menu' and name.startswith('context-menu-'):
        final_files.append(f)

print(f"Checking {len(final_files)} files...")

issues = []
for f in final_files:
    res = check_file(f)
    
    if not res['has_get_type_styles']:
        print(f"Skipped (no getTypeStyles): {f}")
        continue
        
    missing_types = []
    if not res['has_inverse']: missing_types.append('inverse')
    if not res['has_contrast']: missing_types.append('contrast')
    if not res['has_soft']: missing_types.append('soft')
    
    base_issue = False
    if res['uses_spread_base'] and not res['defines_base']:
        base_issue = True
        
    if missing_types or base_issue:
        issues.append({
            'file': f,
            'missing': missing_types,
            'base_issue': base_issue
        })

for i in issues:
    print(f"File: {i['file']}")
    if i['missing']:
        print(f"  Missing types: {', '.join(i['missing'])}")
    if i['base_issue']:
        print(f"  Base issue: Uses ...base but base is not defined")
