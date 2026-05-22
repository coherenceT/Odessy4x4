#!/usr/bin/env python3
import os

def main():
    workspace_dir = "c:\\Users\\repen\\Documents\\GitHub\\Odessy4x4"
    
    print("Starting product redirect conversion...")
    count = 0
    for i in range(1, 24):
        filename = f"product-{i}.html"
        filepath = os.path.join(workspace_dir, filename)
        
        redirect_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0;url=product-detail.html?id={i}">
    <script>window.location.href='product-detail.html?id={i}';</script>
</head>
<body>
    <p>Redirecting to product details...</p>
</body>
</html>"""
        
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(redirect_content)
            count += 1
            print(f"Converted {filename} -> Redirect to ID {i}")
        except Exception as e:
            print(f"Error converting {filename}: {e}")
            
    print(f"\n[SUCCESS] Finished! Successfully converted {count} product pages into redirects.")

if __name__ == "__main__":
    main()
