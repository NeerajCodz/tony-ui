import glob
import re

files = glob.glob('src/ui/components/*/date-picker.tsx')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Comment out calendar import
    content = re.sub(
        r'import \{ Calendar \} from ["\']\.\.\/calendar["\']',
        '// import { Calendar } from "../calendar" // TODO: Create calendar component',
        content
    )
    
    with open(f, 'w', encoding='utf-8', newline='') as file:
        file.write(content)
    print(f'Fixed: {f}')

print('Done!')
