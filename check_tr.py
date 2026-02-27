import os, glob, re

with open('js/main.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

en_section = js_content[js_content.find('en: {')+5:js_content.find('tr: {')]
en_keys = re.findall(r"'([^']+)'\s*:", en_section)
print(f'Total keys in JS: {len(en_keys)}')

html_files = glob.glob('**/*.html', recursive=True)
unused = set(en_keys)

for html_file in html_files:
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()
        for k in list(unused):
            if f'data-i18n="{k}"' in html_content:
                unused.remove(k)

print(f'Unused keys in HTML: {len(unused)}')
for k in unused:
    print(k)
