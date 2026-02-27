import urllib.request
import glob
from http.server import HTTPServer, SimpleHTTPRequestHandler
import threading
import time

def start_server():
    server = HTTPServer(('localhost', 3031), SimpleHTTPRequestHandler)
    thread = threading.Thread(target=server.serve_forever)
    thread.daemon = True
    thread.start()
    return server

def check_html_links():
    html_files = glob.glob('**/*.html', recursive=True)
    broken_links = []
    
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Simple href extraction
            import re
            hrefs = re.findall(r'href=["\'](.*?)["\']', content)
            srcs = re.findall(r'src=["\'](.*?)["\']', content)
            
            for link in hrefs + srcs:
                if link.startswith('http') or link.startswith('#') or link.startswith('mailto:') or link.startswith('tel:'):
                    continue
                
                # Resolving relative paths might be complex, but let's check basic ones
                import os
                # Remove query params or hashes
                clean_link = link.split('?')[0].split('#')[0]
                if not clean_link: continue
                
                # Convert to absolute path given current file directory
                dir_name = os.path.dirname(file)
                target_path = os.path.normpath(os.path.join(dir_name, clean_link))
                
                if not os.path.exists(target_path):
                    broken_links.append((file, link))
                    
    return broken_links

server = start_server()
time.sleep(1)

broken_links = check_html_links()
if broken_links:
    print("Broken links/assets found:")
    for b in broken_links:
        print(f"{b[0]}: {b[1]}")
else:
    print("No broken links found!")

import os
# Check for any obvious JS syntax errors
js_files = glob.glob('**/*.js', recursive=True)
for js in js_files:
    try:
        # Run node to syntax check
        result = os.system(f'node -c "{js}"')
    except Exception as e:
        print(f"Error checking JS: {js}")
        
print("Error check complete.")
