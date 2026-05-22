#!/usr/bin/env python3
import os

legacy_redirects = {
    "category-accessories.html": "category-fridge-slides.html",
    "category-bumpers.html": "index.html#products",
    "category-carrier-options.html": "category-rear-bumpers.html",
    "category-stealth-bumpers.html": "category-rear-bumpers.html",
    "category-tow-bars.html": "index.html#products",
    "category-underbody-protection.html": "index.html#products",
    "category-rear-bumpers-carrier.html": "category-rear-bumpers.html",
    "category-0.html": "index.html#products"
}

def main():
    workspace_dir = "c:\\Users\\repen\\Documents\\GitHub\\Odessy4x4"
    print("Redirecting legacy categories to new structures...")
    
    for filename, target in legacy_redirects.items():
        filepath = os.path.join(workspace_dir, filename)
        content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0;url={target}">
    <script>window.location.href='{target}';</script>
</head>
<body>
    <p>Redirecting to {target}...</p>
</body>
</html>"""
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Redirected legacy {filename} -> {target}")
        except Exception as e:
            print(f"Error writing {filename}: {e}")

if __name__ == "__main__":
    main()
