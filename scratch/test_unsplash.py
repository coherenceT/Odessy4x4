import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = "https://unsplash.com/napi/search/photos?query=offroad%204x4&per_page=10"
req = urllib.request.Request(
    url, 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)

try:
    with urllib.request.urlopen(req, context=ctx) as response:
        data = json.loads(response.read().decode())
        results = data.get('results', [])
        print(f"Found {len(results)} photos.")
        for idx, photo in enumerate(results[:5]):
            print(f"Photo {idx}: ID={photo.get('id')}, Description={photo.get('description') or photo.get('alt_description')}")
except Exception as e:
    print(f"Error fetching Unsplash photos: {e}")
