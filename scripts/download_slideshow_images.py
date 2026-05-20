#!/usr/bin/env python3
import urllib.request
import os

images = {
    "hero-slide-1.jpg": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1920&q=80",
    "hero-slide-2.jpg": "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1920&q=80",
    "hero-slide-3.jpg": "https://images.unsplash.com/photo-1594568284297-7c64464062b1?auto=format&fit=crop&w=1920&q=80",
    "hero-slide-4.jpg": "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=1920&q=80"
}

output_dir = "assets/images"
os.makedirs(output_dir, exist_ok=True)

print("Downloading rugged 4x4 slideshow images...")
for name, url in images.items():
    path = os.path.join(output_dir, name)
    try:
        print(f"Downloading {url} to {path}...")
        # Add User-Agent header to avoid HTTP 403 Forbidden
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        )
        with urllib.request.urlopen(req) as response, open(path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Success: downloaded {name}")
    except Exception as e:
        print(f"Error: Failed to download {name}: {e}")


print("Done downloading slideshow images!")
