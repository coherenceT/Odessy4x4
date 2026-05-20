import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Try scraping offroad-4x4 or jeep-offroad
queries = ["off-road-vehicle", "jeep-offroad", "4x4-offroad"]
ids = []

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for query in queries:
    url = f"https://unsplash.com/s/photos/{query}"
    print(f"Scraping {url}...")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            html = response.read().decode('utf-8')
            # Look for photo paths /photos/xxxxxx or images.unsplash.com/photo-xxxxxx
            found_ids = re.findall(r'images\.unsplash\.com/photo-([a-zA-Z0-9\-]+)\?', html)
            for fid in found_ids:
                if len(fid) > 10 and fid not in ids:
                    ids.append(fid)
            
            # Also check hrefs
            href_ids = re.findall(r'href="/photos/([a-zA-Z0-9\-]+)"', html)
            for hid in href_ids:
                if len(hid) > 5 and hid not in ids:
                    ids.append(hid)
    except Exception as e:
        print(f"Error scraping {query}: {e}")

print(f"Found {len(ids)} unique IDs:")
for idx, fid in enumerate(ids[:20]):
    print(f" {idx}: {fid}")
