import os, glob

files = glob.glob('**/*.html', recursive=True)
count = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    modified = False
    
    # 1. Add nav-cta class to Get Quote navbar button
    if 'nav-cta' not in content and 'nav.cta' in content:
        # Find the button near data-i18n="nav.cta"
        idx = content.find('nav.cta')
        if idx > -1:
            search_start = max(0, idx - 300)
            snippet = content[search_start:idx]
            old = 'class="btn btn-primary"'
            btn_idx = snippet.rfind(old)
            if btn_idx > -1:
                abs_idx = search_start + btn_idx
                content = content[:abs_idx] + 'class="btn btn-primary nav-cta"' + content[abs_idx + len(old):]
                modified = True
                print(f'  [nav-cta] {f}')

    # 2. Add scroll-to-top button before </body>
    if 'scroll-top' not in content and '</body>' in content:
        scroll_btn = '  <button class="scroll-top" aria-label="Scroll to top"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg></button>\n\n'
        content = content.replace('</body>', scroll_btn + '</body>')
        modified = True
        print(f'  [scroll-top] {f}')

    # 3. Replace inquiry emoji with SVG
    emoji_str = '<span class="inquiry-float-icon">\u2709</span>'
    if emoji_str in content:
        svg_icon = '<span class="inquiry-float-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg></span>'
        content = content.replace(emoji_str, svg_icon)
        modified = True
        print(f'  [inquiry-svg] {f}')

    if modified:
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(content)
        count += 1

print(f'\nDone! Modified {count} files.')
