import os
import glob
import re

# Get all handler files
handlers = glob.glob('src/ui/handlers/*.tsx')
handlers = [h for h in handlers if not h.endswith('index.tsx') and not h.endswith('handler-factory.tsx')]

for handler_path in handlers:
    component_name = os.path.basename(handler_path).replace('.tsx', '')
    
    # Find existing component implementations
    component_files = glob.glob(f'src/ui/components/*/{component_name}.tsx')
    existing_versions = sorted([os.path.basename(os.path.dirname(f)) for f in component_files])
    
    if not existing_versions:
        print(f'SKIP {component_name}: No components found')
        continue
    
    print(f'{component_name}: {len(existing_versions)} versions')
    
    # Read handler file
    with open(handler_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find loadVersionModule function
    match = re.search(r'const loadVersionModule = async \(version:.*?\) => \{(.*?)\n\};', content, re.DOTALL)
    if match:
        # Generate new switch cases
        cases = []
        for version in existing_versions:
            cases.append(f"    case '{version}': return import('../components/{version}/{component_name}.tsx');")
        cases.append(f"    default: return import('../components/{existing_versions[0]}/{component_name}.tsx');")
        
        type_name = ''.join(word.capitalize() for word in component_name.split('-')) + 'Version'
        
        new_switch = f"""const loadVersionModule = async (version: {type_name}) => {{
  switch (version) {{
{chr(10).join(cases)}
  }}
}};"""
        
        # Replace old function
        content = re.sub(
            r'const loadVersionModule = async \(version:.*?\) => \{.*?\n\};',
            new_switch,
            content,
            flags=re.DOTALL
        )
        
        # Write back
        with open(handler_path, 'w', encoding='utf-8', newline='') as f:
            f.write(content)
        print(f'  ✓ Fixed')
    else:
        print(f'  ✗ No loadVersionModule found')

print('\n✅ Done!')
