import os
import re

base_dir = '/Users/damiandabija/Documents/GitHub/bookcast'

# Regexes to find Contact links
# 1. Desktop: <a href="...contact/" ...>Contact</a>
# 2. Mobile: <a href="...contact/" ...>Contact</a>

desktop_vfr_template = '\n                    <a href="{prefix}vfr/" class="text-emerald-600 font-bold hover:text-emerald-700 transition-colors duration-200">VFR</a>\n                    '
mobile_vfr_template = '\n            <a href="{prefix}vfr/" class="block py-2 text-emerald-600 font-bold hover:text-emerald-700">Vâlcea Forest Run</a>\n            '

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove existing VFR links if they exist, so we can cleanly re-insert them
            content = re.sub(r'<a\s+href="[^"]*vfr/?"[^>]*>VFR</a>', '', content)
            content = re.sub(r'<a\s+href="[^"]*vfr/?"[^>]*>Vâlcea Forest Run</a>', '', content)
            
            # Find the Contact link and its prefix
            def replace_contact(match):
                full_match = match.group(0)
                href_content = match.group(1) # e.g. "contact/" or "../contact/"
                prefix = href_content.replace('contact/', '')
                
                # Determine if it's mobile or desktop by looking at the class
                if 'block' in full_match and 'py-2' in full_match:
                    vfr_link = mobile_vfr_template.format(prefix=prefix)
                else:
                    vfr_link = desktop_vfr_template.format(prefix=prefix)
                
                return vfr_link + full_match
            
            # Match any a tag that has href ending in contact/ or contact and text Contact
            new_content = re.sub(r'<a\s+href="([^"]*contact/?)"[^>]*>\s*Contact\s*</a>', replace_contact, content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")

