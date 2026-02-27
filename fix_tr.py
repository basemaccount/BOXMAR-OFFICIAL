import os, glob

files = glob.glob('**/*.html', recursive=True)
count = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    modified = False

    # 1. Hero Stats (index.html only)
    if 'Global Reach' in content and 'hero.feat1' not in content:
        content = content.replace('<strong>Global Reach</strong>', '<strong data-i18n="hero.feat1">Global Reach</strong>')
        content = content.replace('<span>120+ Countries</span>', '<span data-i18n="hero.feat1.desc">120+ Countries</span>')
        content = content.replace('<strong>Reliability</strong>', '<strong data-i18n="hero.feat2">Reliability</strong>')
        content = content.replace('<span>99.9% On-Time</span>', '<span data-i18n="hero.feat2.desc">99.9% On-Time</span>')
        modified = True

    # 2. Mission & Vision (index.html and service pages)
    if 'Our Purpose' in content and 'mv.label' not in content:
        content = content.replace('<div class="section-label">Our Purpose</div>', '<div class="section-label" data-i18n="mv.label">Our Purpose</div>')
        content = content.replace('<h2 class="section-title">Mission & Vision</h2>', '<h2 class="section-title" data-i18n="mv.title">Mission & Vision</h2>')
        content = content.replace('<h3>Mission Statement</h3>', '<h3 data-i18n="mv.mission">Mission Statement</h3>')
        content = content.replace('<p>Boxmar Global', '<p data-i18n="mv.mission.text">Boxmar Global')
        content = content.replace('<h3>Vision Statement</h3>', '<h3 data-i18n="mv.vision">Vision Statement</h3>')
        content = content.replace('<p>To be the best', '<p data-i18n="mv.vision.text">To be the best')
        modified = True

    # 3. Floating Elements
    if 'inquiry-float-text' in content and 'float.inquiry' not in content:
        content = content.replace('<span class="inquiry-float-text">Inquiry</span>', '<span class="inquiry-float-text" data-i18n="float.inquiry">Inquiry</span>')
        modified = True

    if 'aria-label="Scroll to top"' in content and 'top.scroll' not in content:
        content = content.replace('aria-label="Scroll to top"', 'aria-label="Scroll to top" data-i18n="top.scroll"')
        modified = True

    # 4. Form Placeholders (index.html, quote.html, contact.html)
    if '<option value="">Select...</option>' in content and 'quote.select' not in content:
        content = content.replace('<option value="">Select...</option>', '<option value="" data-i18n="quote.select">Select...</option>')
        modified = True

    # 5. Testimonials (index.html)
    if 'Mediterranean Foods Co.' in content and 'testi.r2' not in content:
        content = content.replace('<div class="testimonial-role">Logistics Director, ChemTurk Industries</div>', '<div class="testimonial-role" data-i18n="testi.r1">Logistics Director, ChemTurk Industries</div>')
        content = content.replace('<div class="testimonial-role">Export Manager, Mediterranean Foods Co.</div>', '<div class="testimonial-role" data-i18n="testi.r2">Export Manager, Mediterranean Foods Co.</div>')
        content = content.replace('<div class="testimonial-role">Supply Chain Manager, Gulf Petrochemicals</div>', '<div class="testimonial-role" data-i18n="testi.r3">Supply Chain Manager, Gulf Petrochemicals</div>')
        content = content.replace('<div class="testimonial-role">Operations Lead, Deutsche Logistics GmbH</div>', '<div class="testimonial-role" data-i18n="testi.r4">Operations Lead, Deutsche Logistics GmbH</div>')
        
        # Quotes 
        q1 = '<p class="testimonial-quote">"Working with Boxmar has transformed our European supply chain. Their expertise in chemical tank logistics is unmatched in Turkey. Always on time, always professional."</p>'
        content = content.replace(q1, q1.replace('<p class="testimonial-quote">', '<p class="testimonial-quote" data-i18n="testi.m1">'))
        
        q1_alt = '<p class="testimonial-quote">"Boxmar has been our trusted partner for chemical tank shipments for over 10 years. Their expertise in handling hazardous materials and their on-time delivery record is exceptional."</p>'
        content = content.replace(q1_alt, q1_alt.replace('<p class="testimonial-quote">', '<p class="testimonial-quote" data-i18n="testi.m1">'))

        q2 = '<p class="testimonial-quote">"We switched to Boxmar for our olive oil exports to Europe and the results have been outstanding. Their Flexi Tank solutions saved us 18% on shipping costs."</p>'
        content = content.replace(q2, q2.replace('<p class="testimonial-quote">', '<p class="testimonial-quote" data-i18n="testi.m2">'))

        q3 = '<p class="testimonial-quote">"The multi-modal solutions from Boxmar combining sea and rail freight have significantly shortened our transit times to Central Asia. Professional team, reliable service."</p>'
        content = content.replace(q3, q3.replace('<p class="testimonial-quote">', '<p class="testimonial-quote" data-i18n="testi.m3">'))
        
        q4 = '<p class="testimonial-quote">"Boxmar\'s rapid response and dedicated customer service team have made them an indispensable partner for our European distribution network. Highly recommended."</p>'
        content = content.replace(q4, q4.replace('<p class="testimonial-quote">', '<p class="testimonial-quote" data-i18n="testi.m4">'))
        modified = True

    if modified:
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(content)
        count += 1
        print(f'Modified {f}')

print(f"\\nDone! Modified {count} files.")
