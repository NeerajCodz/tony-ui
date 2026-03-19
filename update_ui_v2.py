import os
import re

# Components using switch(type)
SWITCH_COMPONENTS = ["card", "calendar", "combobox", "chart"]

# Components using versionStyles map
MAP_COMPONENTS = ["checkbox", "collapsible", "command"]

# Components using getRootStyles/getButtonStyles/getContentStyles
STYLE_FUNC_COMPONENTS = ["carousel", "context-menu"]

def update_switch_component(content, filename):
    if "switch (type)" not in content:
        return content
        
    if "case 'inverse':" in content:
        return content

    print(f"Updating switch component: {filename}")
    
    # Insert cases before default
    new_cases = """
      case 'inverse':
        return {
          ...base,
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid black',
        };
      case 'contrast':
        return {
          ...base,
          backgroundColor: 'black',
          border: '2px solid white',
          color: 'white',
          boxShadow: '4px 4px 0px white',
        };
      case 'soft':
        return {
          ...base,
          backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
          border: '1px solid rgba(var(--primary-rgb), 0.2)',
          boxShadow: 'none',
        };
"""
    # Adjust for colors variable if available
    if "colors?.base" in content:
        new_cases = new_cases.replace("'rgba(var(--primary-rgb), 0.1)'", "${colors?.base || '#000000'}20")
        new_cases = new_cases.replace("'1px solid rgba(var(--primary-rgb), 0.2)'", "1px solid 30")
    elif "hsl(var(---base)" in content:
        new_cases = new_cases.replace("'rgba(var(--primary-rgb), 0.1)'", "hsl(var(---base) / 0.1)")
        new_cases = new_cases.replace("'1px solid rgba(var(--primary-rgb), 0.2)'", "1px solid hsl(var(---base) / 0.3)")
        
    pattern = r"(case 'default':|default:)"
    match = re.search(pattern, content)
    if match:
        insertion_point = match.start()
        content = content[:insertion_point] + new_cases + content[insertion_point:]
        
    # Update interface for type
    content = re.sub(r"(type\?:.*?)(;)", r"\1 | 'inverse' | 'contrast' | 'soft'\2", content, count=1)
    
    return content

def update_map_component(content, filename):
    if "const versionStyles =" not in content and "const styles =" not in content:
        return content
        
    if "getTypeStyles" in content:
        # Just continue to injection logic to catch missed components
        pass

    print(f"Updating map component: {filename}")
    
    if "getTypeStyles" not in content:
        # Inject getTypeStyles
        get_type_styles = """
const getTypeStyles = (type: string | undefined) => {
  if (!type) return '';
  switch (type) {
    case 'inverse': return "bg-white text-black border-black hover:bg-gray-100";
    case 'contrast': return "bg-black text-white border-white border-2 shadow-[4px_4px_0px_white]";
    case 'soft': return "bg-opacity-20 border-opacity-30 shadow-none";
    default: return '';
  }
};
"""
        # Insert before component definition
        pattern = r"(export const \w+ =|const \w+ = React\.forwardRef|const Component =)"
        match = re.search(pattern, content)
        if match:
            content = content[:match.start()] + get_type_styles + "\n" + content[match.start():]
    
    # Destructure type from props
    # Look for ({ ...props }: any) or similar
    # Regex for props destructuring
    props_regex = r"\(\{([^}]+)\}"
    
    def add_type_prop(m):
        props = m.group(1)
        if "type" not in props:
            return "({type, " + props + "}"
        return m.group(0)
        
    content = re.sub(props_regex, add_type_prop, content)
    
    # Inject into className
    # Strategy: Replace 'className)}' with 'className, getTypeStyles(type))}'
    # This assumes className is the last argument to cn and followed immediately by closing paren of cn
    
    cn_end_regex = r"(className\s*)\)\}"
    
    def inject_cn_end(m):
        return m.group(1) + ", getTypeStyles(type))}"
        
    content = re.sub(cn_end_regex, inject_cn_end, content)
    
    return content

def update_carousel_component(content, filename):
    # Check for any style function
    if "getRootStyles" not in content and "getContentStyles" not in content:
        return content
        
    return update_map_component(content, filename)

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    filename = os.path.basename(file_path).lower()
    parent_dir = os.path.basename(os.path.dirname(file_path)).lower()
    
    is_target = False
    comp_type = ""
    
    targets = SWITCH_COMPONENTS + MAP_COMPONENTS + STYLE_FUNC_COMPONENTS
    
    for t in targets:
        if t in filename or t == parent_dir:
            is_target = True
            comp_type = t
            break
            
    if not is_target:
        return

    if "hover-card" in filename:
        return

    new_content = content
    if comp_type in SWITCH_COMPONENTS:
        new_content = update_switch_component(content, filename)
    elif comp_type in MAP_COMPONENTS:
        new_content = update_map_component(content, filename)
    elif comp_type in STYLE_FUNC_COMPONENTS:
        new_content = update_carousel_component(content, filename)
        
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")

def main():
    root_dir = "src/ui/components"
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".tsx"):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
