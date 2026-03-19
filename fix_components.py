import os
import re

base_dir = r'E:\TONY\ui\src\ui\components'

def update_file(filepath, content):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated: {filepath}")

def process_calendar_chart_combobox(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check for base issue
    if '...base' in content and 'const base' not in content:
        # Insert const base = {}; at the start of getTypeStyles
        pattern = r'(const getTypeStyles = \(\): React.CSSProperties => \{)'
        replacement = r'\1\n    const base: React.CSSProperties = {};'
        
        new_content = re.sub(pattern, replacement, content)
        if new_content != content:
            update_file(filepath, new_content)
            return True
            
    # Also check if it uses implicit return arrow function which makes insertion harder
    # But based on prev check, they use block body: const getTypeStyles = (): React.CSSProperties => { ... switch... }
    return False

def process_command(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add 'type' to props destructuring if missing, but used in body
    # Regex to find component defs
    # export const Input = React.forwardRef(({ className, ...props }: any, ref: any) => (
    
    updated = False
    
    # List of components to check
    components = ['Input', 'List', 'Group', 'Separator', 'Item']
    
    for comp in components:
        # Pattern matching the props destructuring
        # We look for ({ className... or ({ ...props
        pattern = r'(export const ' + comp + r' = React\.forwardRef\(\(\{)([^}]+)(\}: any, ref: any\) => \()'
        
        def replacer(match):
            prefix = match.group(1)
            props_inner = match.group(2)
            suffix = match.group(3)
            
            if 'type' not in props_inner:
                return f"{prefix} type, {props_inner}{suffix}"
            return match.group(0)
            
        new_content = re.sub(pattern, replacer, content)
        if new_content != content:
            content = new_content
            updated = True

    if updated:
        update_file(filepath, content)
        return True
    return False

def process_context_menu(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original_content = content
    updated = False
    
    # Components to fix: ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuSubContent
    # They already destructure 'type' (I saw {type, className, ...props})
    # But they don't USE it in cn()
    
    # 1. ContextMenuContent
    # Current: className={cn(getContentStyles('angular-corner'), className)}
    # Target: className={cn(getContentStyles('angular-corner'), className, getTypeStyles(type))}
    
    # We need to be careful not to double add
    
    patterns = [
        (r'(className=\{cn\(getContentStyles\(\'[^\']+\'\), className)(\)\})', r'\1, getTypeStyles(type)\2'),
        (r'(className=\{cn\(\s*getItemStyles\(\'[^\']+\'\),\s*inset && "pl-8",\s*className)(\s*\)\})', r'\1, getTypeStyles(type)\2'), # Checkbox/Radio Item might fail this regex if whitespace differs
        (r'(className=\{cn\(\s*getItemStyles\(\'[^\']+\'\),\s*"pl-8",\s*className)(\s*\)\})', r'\1, getTypeStyles(type)\2'),
        (r'(className=\{cn\(\s*getItemStyles\(\'[^\']+\'\),\s*className)(\s*\)\})', r'\1, getTypeStyles(type)\2'), # ContextMenuItem
    ]

    # regex is tricky with whitespace. Let's try a more robust approach.
    # Search for className={cn(...)} block and insert getTypeStyles(type) if missing
    
    # Find all className={cn(...)} blocks
    # This is hard with regex due to nested parens.
    
    # Let's try specific component replacements.
    
    # ContextMenuContent
    if 'ContextMenuContent' in content:
        c_pattern = r'(className=\{cn\(getContentStyles\(\'[^\']+\'\), className)(\)\})'
        if re.search(c_pattern, content) and 'getTypeStyles(type)' not in re.search(c_pattern, content).group(0):
            content = re.sub(c_pattern, r'\1, getTypeStyles(type)\2', content)
            updated = True

    # ContextMenuItem
    # className={cn(getItemStyles('angular-corner'), inset && "pl-8", className)}
    if 'ContextMenuItem' in content:
        # Look for the className block inside ContextMenuItem
        # Since file structure is consistent, we can try to target lines? No.
        
        # Try to find the specific CN call for Item
        # className={cn(getItemStyles('angular-corner'), inset && "pl-8", className)}
        # We can match: getItemStyles('...'), ... className
        
        # Let's match: className={cn( ... className)}
        # And ensure it's inside the component.
        pass

    # Actually, simpler: replace `className)}` with `className, getTypeStyles(type))}`
    # BUT only if `getTypeStyles(type)` isn't already there.
    # And we have to be careful about which component it is.
    
    # Given the uniformity, maybe we can just do global replace for the file?
    # Replace `className)}` with `className, getTypeStyles(type))}`?
    # No, that might affect components that already have it or don't need it.
    
    # Let's be specific.
    
    # 1. ContextMenuContent
    content = re.sub(r'(className=\{cn\(getContentStyles\(\'[^\']+\'\), className)(\)\})', r'\1, getTypeStyles(type)\2', content)
    
    # 2. ContextMenuItem
    # className={cn(getItemStyles('...'), inset && "pl-8", className)}
    content = re.sub(r'(className=\{cn\(\s*getItemStyles\(\'[^\']+\'\),\s*inset && "pl-8",\s*className)(\s*\)\})', r'\1, getTypeStyles(type)\2', content)
    
    # 3. ContextMenuCheckboxItem & RadioItem (usually have "pl-8")
    # className={cn(getItemStyles('...'), "pl-8", className)}
    content = re.sub(r'(className=\{cn\(\s*getItemStyles\(\'[^\']+\'\),\s*"pl-8",\s*className)(\s*\)\})', r'\1, getTypeStyles(type)\2', content)
    
    # 4. ContextMenuSubContent
    # className={cn(getContentStyles('...'), className)}
    # This is same as ContextMenuContent regex!
    
    if content != original_content: 
         updated = True
         
    if updated:
        update_file(filepath, content)
        return True
    return False


# Main execution
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if not file.endswith('.tsx'):
            continue
        
        filepath = os.path.join(root, file)
        parent = os.path.basename(os.path.dirname(filepath))
        
        # Task 1: Calendar, Chart, Combobox
        if (parent == 'calendar' and file.startswith('calendar-')) or \
           (parent == 'chart' and file.startswith('chart-')) or \
           (parent == 'combobox' and file.startswith('combobox-')):
            process_calendar_chart_combobox(filepath)
            
        # Task 2: Command
        elif parent == 'command' and file.startswith('command-'):
            process_command(filepath)
            
        # Task 3: Context Menu
        elif parent == 'context-menu' and file.startswith('context-menu-'):
            process_context_menu(filepath)

