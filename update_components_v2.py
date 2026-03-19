import glob
import os
import re

def update_file(file_path, logic_inserter, prop_adder=True):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "if (type === 'inverse')" in content:
        print(f"Skipping {file_path} (already updated)")
        return
    if "type === 'inverse' ?" in content: # Check for ternary updates in typography
        print(f"Skipping {file_path} (already updated ternary)")
        return

    # Add type prop to interface
    if prop_adder:
        if "type?: string;" not in content:
            if "version?: string;" in content:
                content = content.replace("version?: string;", "version?: string;\n  type?: string;")
            else:
                content = re.sub(r'(interface \w+Props [^\{]+\{)', r'\1\n  type?: string;', content)

    # Add type to destructuring if not present
    if "type," not in content and "type =" not in content and "type " not in content:
        if "colors," in content:
            content = content.replace("colors,", "colors, type,")
        elif "colors" in content: 
            content = content.replace("colors", "colors, type")

    # Run custom logic inserter
    new_content = logic_inserter(content)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")
    else:
        print(f"No changes made to {file_path}")

def spinner_logic(content):
    content = content.replace("const fg =", "let fg =")
    pattern = r"(let fg = [^;]+;(?:\s*const glow =[^;]+;)?)"
    match = re.search(pattern, content)
    if match:
        end = match.end()
        logic = "\n\n    if (type === 'inverse') {\n      fg = colors?.base || 'currentColor';\n    } else if (type === 'contrast') {\n      fg = colors?.foreground || '#ffffff';\n    } else if (type === 'soft') {\n      fg = colors?.muted || fg;\n    }"
        return content[:end] + logic + content[end:]
    return content

def switch_logic(content):
    content = content.replace("const bg =", "let bg =")
    content = content.replace("const fg =", "let fg =")
    content = content.replace("const accent =", "let accent =")
    content = content.replace("const border =", "let border =")
    
    pattern = r"(let (?:bg|fg|accent|border) = [^;]+;(?:\s*const glow =[^;]+;)?)"
    matches = list(re.finditer(pattern, content))
    if matches:
        end = matches[-1].end()
        logic = "\n\n    if (type === 'inverse') {\n      const temp = bg;\n      bg = fg;\n      fg = temp;\n      accent = fg;\n      border = bg;\n    } else if (type === 'contrast') {\n      bg = colors?.base || '#000000';\n      fg = colors?.foreground || '#ffffff';\n      border = fg;\n      accent = fg;\n    } else if (type === 'soft') {\n      bg = colors?.muted || bg;\n      accent = colors?.muted || accent;\n    }"
        return content[:end] + logic + content[end:]
    return content

def textarea_logic(content):
    content = content.replace("const bg =", "let bg =")
    content = content.replace("const fg =", "let fg =")
    content = content.replace("const border =", "let border =")
    
    pattern = r"(let (?:bg|fg|border) = [^;]+;(?:\s*const glow =[^;]+;)?)"
    matches = list(re.finditer(pattern, content))
    if matches:
        end = matches[-1].end()
        logic = "\n\n    if (type === 'inverse') {\n      const temp = bg;\n      bg = fg;\n      fg = temp;\n      border = bg;\n    } else if (type === 'contrast') {\n      border = fg;\n      bg = colors?.base || '#000000';\n      fg = colors?.foreground || '#ffffff';\n    } else if (type === 'soft') {\n      bg = colors?.muted || bg;\n      border = colors?.border ? `${colors.border}40` : border;\n    }"
        return content[:end] + logic + content[end:]
    return content

def toast_logic(content):
    content = content.replace("const bg =", "let bg =")
    content = content.replace("const fg =", "let fg =")
    content = content.replace("const border =", "let border =")
    
    pattern = r"(let (?:bg|fg|border) = [^;]+;(?:\s*const glow =[^;]+;)?)"
    matches = list(re.finditer(pattern, content))
    if matches:
        for m in matches:
            if "bg =" in m.group(0) or "fg =" in m.group(0): 
                end = m.end()
                logic = "\n\n    if (type === 'inverse') {\n      const temp = bg;\n      bg = fg;\n      fg = temp;\n      border = bg;\n    } else if (type === 'contrast') {\n      border = fg;\n      bg = colors?.base || '#000000';\n      fg = colors?.foreground || '#ffffff';\n    } else if (type === 'soft') {\n      bg = colors?.muted || bg;\n      border = colors?.border ? `${colors.border}40` : border;\n    }"
                return content[:end] + logic + content[end:]
    return content

def toggle_logic(content):
    content = content.replace("const bg =", "let bg =")
    content = content.replace("const fg =", "let fg =")
    content = content.replace("const border =", "let border =")
    
    pattern = r"(let (?:bg|fg|border) = [^;]+;)"
    matches = list(re.finditer(pattern, content))
    if matches:
         end = matches[-1].end()
         logic = "\n\n    if (type === 'inverse') {\n      const temp = bg;\n      bg = fg;\n      fg = temp;\n      border = bg;\n    } else if (type === 'contrast') {\n      border = fg;\n      bg = colors?.base || '#000000';\n      fg = colors?.foreground || '#ffffff';\n    } else if (type === 'soft') {\n      bg = colors?.muted || bg;\n      border = colors?.border ? `${colors.border}40` : border;\n    }"
         return content[:end] + logic + content[end:]
    return content

def toggle_group_logic(content):
    content = content.replace("const bg =", "let bg =")
    content = content.replace("const fg =", "let fg =")
    content = content.replace("const border =", "let border =")
    
    pattern = r"(let (?:bg|fg|border|accent) = [^;]+;)"
    matches = list(re.finditer(pattern, content))
    if matches:
         end = matches[-1].end()
         logic = "\n\n    if (type === 'inverse') {\n      const temp = bg;\n      bg = fg;\n      fg = temp;\n      border = bg;\n    } else if (type === 'contrast') {\n      border = fg;\n      bg = colors?.base || '#000000';\n      fg = colors?.foreground || '#ffffff';\n    } else if (type === 'soft') {\n      bg = colors?.muted || bg;\n      border = colors?.border ? `${colors.border}40` : border;\n    }"
         return content[:end] + logic + content[end:]
    return content

def tooltip_logic(content):
    return toast_logic(content)

def table_logic(content):
    content = content.replace("const border =", "let border =")
    pattern = r"(let border = [^;]+;)"
    matches = list(re.finditer(pattern, content))
    for match in reversed(matches):
        end = match.end()
        logic = "\n    if (type === 'inverse') {\n      border = colors?.foreground || '#ffffff';\n    } else if (type === 'contrast') {\n      border = colors?.foreground || '#ffffff';\n    } else if (type === 'soft') {\n      border = colors?.border ? `${colors.border}40` : border;\n    }"
        content = content[:end] + logic + content[end:]
    return content

def tabs_logic(content):
    content = content.replace("const bg =", "let bg =")
    content = content.replace("const border =", "let border =")
    content = content.replace("const fg =", "let fg =")
    content = content.replace("const accent =", "let accent =")

    pattern_list = r"(let bg = [^;]+;\s*let border = [^;]+;)"
    matches = list(re.finditer(pattern_list, content))
    for match in reversed(matches):
        end = match.end()
        logic = "\n    if (type === 'inverse') {\n      const temp = bg;\n      bg = border;\n      border = temp;\n    } else if (type === 'contrast') {\n      bg = colors?.base || '#000000';\n      border = colors?.foreground || '#ffffff';\n    } else if (type === 'soft') {\n      bg = colors?.muted || bg;\n      border = colors?.border ? `${colors.border}40` : border;\n    }"
        content = content[:end] + logic + content[end:]
        
    pattern_trigger = r"(let fg = [^;]+;\s*let accent = [^;]+;)"
    matches = list(re.finditer(pattern_trigger, content))
    for match in reversed(matches):
        end = match.end()
        logic = "\n    if (type === 'inverse') {\n      fg = colors?.base || 'currentColor';\n    } else if (type === 'contrast') {\n      fg = colors?.foreground || '#ffffff';\n      accent = fg;\n    }"
        content = content[:end] + logic + content[end:]
        
    return content

def typography_logic(content):
    # Fixed replacement - string replace is safe for literals
    content = content.replace("({ className, colors, style", "({ className, colors, type, style")
    
    content = content.replace(
        "color: colors?.foreground,", 
        "color: type === 'inverse' ? colors?.base : (type === 'contrast' ? (colors?.foreground || '#000000') : colors?.foreground),"
    )
    
    content = content.replace(
        "borderColor: colors?.border,",
        "borderColor: type === 'inverse' ? colors?.foreground : (type === 'contrast' ? (colors?.foreground || '#000000') : colors?.border),"
    )
    
    return content

def process_batch():
    for name in ['spinner', 'switch', 'textarea', 'toast', 'toggle', 'toggle-group', 'tooltip', 'table', 'tabs', 'typography']:
        print(f"Processing {name}...")
        logic_func = globals().get(f"{name.replace('-', '_')}_logic")
        if logic_func:
            files = glob.glob(f'src/ui/components/*/{name}.tsx')
            for f in files:
                update_file(f, logic_func)
        else:
            print(f"No logic function for {name}")

if __name__ == "__main__":
    process_batch()
