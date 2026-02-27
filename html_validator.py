import glob
import re

files = glob.glob('**/*.html', recursive=True)
errors_found = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        
    # Check for img without alt
    imgs = re.findall(r'<img[^>]*>', content)
    for img in imgs:
        if 'alt=' not in img:
            print(f"Missing alt in {f}: {img}")
            errors_found += 1
            
    # Check for a without href
    links = re.findall(r'<a[^>]*>', content)
    for link in links:
        if 'href=' not in link:
            # Could be an anchor name, but let's check
            if 'name=' not in link and 'id=' not in link and 'class="nav-cta btn"' not in link and 'class="lang-btn"' not in link:
                print(f"Missing href in {f}: {link}")
                errors_found += 1

print(f"HTML Validation Scan complete. Found {errors_found} potential issues.")
