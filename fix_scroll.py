import glob, re

files = glob.glob('**/*.html', recursive=True)
count = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    if ' data-i18n="top.scroll"' in content:
        content = content.replace(' data-i18n="top.scroll"', '')
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(content)
        count += 1
print(f'Fixed scroll button in {count} HTML files.')
