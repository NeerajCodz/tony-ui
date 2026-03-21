import re
import glob
import os

# Find all disabled pages
disabled_pages = [os.path.basename(f).replace('.tsx.bak', '') for f in glob.glob('src/pages/ui/*.tsx.bak')]
print(f'Found {len(disabled_pages)} disabled pages')

# Read router
with open('src/router.tsx', 'r', encoding='utf-8') as f:
    router_content = f.read()

# Comment out imports and routes for disabled pages
for page in disabled_pages:
    # Comment import
    router_content = re.sub(
        rf'(import .* from [\'"]\.\/pages\/ui\/{page}[\'"];)',
        r'// \1 // TODO: Create missing exports',
        router_content
    )
    
    # Comment route (find the Route that uses this page component)
    # Extract component alias from import
    match = re.search(rf'// import \{{([^}}]+)\}} from [\'"]\.\/pages\/ui\/{page}[\'"]', router_content)
    if match:
        comp_name = match.group(1).split(' as ')[-1].strip()
        router_content = re.sub(
            rf'(\s*<Route[^>]*element=\{{<{comp_name}[^>]*/>)',
            r'// \1 // TODO: Create missing exports',
            router_content
        )

# Write back
with open('src/router.tsx', 'w', encoding='utf-8', newline='') as f:
    f.write(router_content)

print('✅ Updated router.tsx')
