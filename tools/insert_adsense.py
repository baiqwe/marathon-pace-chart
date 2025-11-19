#!/usr/bin/env python3
"""
Insert AdSense script into all .html files under the repo if missing.
"""
from pathlib import Path
import sys

ADSENSE_TAG = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2499950673294937" crossorigin="anonymous"></script>'

root = Path('.').resolve()
html_files = list(root.rglob('*.html'))
modified = []
skipped = []

for f in html_files:
    try:
        text = f.read_text(encoding='utf-8')
    except Exception:
        # try latin-1 fallback
        try:
            text = f.read_text(encoding='latin-1')
        except Exception:
            skipped.append((str(f), 'read-error'))
            continue

    if 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' in text:
        skipped.append((str(f), 'already-has-script'))
        continue

    # find first <head ...> tag (case-insensitive)
    import re
    m = re.search(r'<head[^>]*>', text, flags=re.IGNORECASE)
    if not m:
        skipped.append((str(f), 'no-head'))
        continue

    insert_at = m.end()
    # maintain newline after head if present
    new_text = text[:insert_at] + '\n    ' + ADSENSE_TAG + text[insert_at:]
    try:
        f.write_text(new_text, encoding='utf-8')
        modified.append(str(f))
    except Exception as e:
        skipped.append((str(f), 'write-error:'+str(e)))

# print summary
print('Modified files:')
for p in modified:
    print(p)

print('\nSkipped files:')
for s in skipped[:200]:
    print(s[0], s[1])

print('\nTotals: {} modified, {} skipped, {} html files'.format(len(modified), len(skipped), len(html_files)))

if len(modified) == 0:
    sys.exit(0)
else:
    sys.exit(0)
