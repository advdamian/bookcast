import os
import glob
import re

replacement = """    <footer class="bg-slate-900/90 backdrop-blur-md text-gray-300 py-8 text-center border-t border-gray-800">
        <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p class="opacity-80 text-sm">© 2026 Bookcast.</p>
            <a href="https://www.instagram.com/advshoots/" target="_blank"
                class="text-xs opacity-30 hover:opacity-100 transition-opacity duration-300 mt-2 md:mt-0 font-light font-mono group">
                Designed & Developed by <span class="font-bold text-gray-500 group-hover:text-indigo-400 transition-colors">advshoots</span>
            </a>
        </div>
    </footer>"""

pattern = re.compile(r'    <footer class="bg-slate-900/90 backdrop-blur-md text-gray-300 py-8 text-center border-t border-gray-800">\s*<p class="opacity-80 text-sm">© 2026 Bookcast\.</p>\s*</footer>')

files = glob.glob('buzz/editia*.html')
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = pattern.sub(replacement, content)
    
    with open(file, 'w', encoding='utf-8', newline='') as f:
        f.write(new_content)
    print(f"Updated {file}")
