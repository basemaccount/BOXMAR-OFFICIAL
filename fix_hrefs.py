import glob
import re

files = glob.glob('**/*.html', recursive=True)

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        
    modified = False
    links = re.findall(r'<a(.*?)>', content)
    
    for inner in links:
        if 'href=' not in inner and 'name=' not in inner and 'id=' not in inner and 'class="nav-cta btn"' not in inner and 'class="lang-btn"' not in inner:
            old_tag = '<a' + inner + '>'
            new_tag = '<a href="#"' + inner + '>'
            if old_tag in content:
                content = content.replace(old_tag, new_tag)
                modified = True
                print(f"Fixed missing href in {f}: {old_tag}")

    if modified:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
print("Href fix complete.")
