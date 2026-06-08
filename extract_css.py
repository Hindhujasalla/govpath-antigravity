import re
import sys

log_path = r"C:\Users\Hindhujasalla\.gemini\antigravity\brain\00467f04-0fc6-4d6c-942c-291ec1ae48f9\.system_generated\logs\overview.txt"

with open(log_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Find the view_file block for styles.css
# It looks like:
# File Path: `file:///c:/Users/Hindhujasalla/Scratch/styles.css`
# ...
# 1: :root {
# ...
block_matches = list(re.finditer(r'File Path: `file:///c:/Users/Hindhujasalla/Scratch/styles.css`.*?Showing lines \d+ to \d+\n.*?\n1: ', text, re.DOTALL))

if not block_matches:
    print("Could not find styles.css views in log")
    sys.exit(1)

# Find the last time it was viewed before we messed it up
# Step 137 and 138 showed the file
blocks = text.split("File Path: `file:///c:/Users/Hindhujasalla/Scratch/styles.css`")

extracted_lines = []

for block in blocks[1:]:
    if "Showing lines 1 to 800" in block or "Showing lines 801 to 1600" in block:
        # Extract lines
        lines = block.split('\n')
        for line in lines:
            m = re.match(r'^\d+: (.*)', line)
            if m:
                extracted_lines.append(m.group(1))

# Let's save the extracted lines to a temporary file to see them
with open('c:\\Users\\Hindhujasalla\\Scratch\\styles_extracted.css', 'w', encoding='utf-8') as f:
    f.write('\n'.join(extracted_lines))

print(f"Extracted {len(extracted_lines)} lines")
