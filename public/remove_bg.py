import sys
from PIL import Image

def remove_bg(input_path, output_path, tolerance=40):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        bg_color = datas[0] # Top-left pixel is assumed to be background
        
        new_data = []
        for item in datas:
            r_diff = abs(item[0] - bg_color[0])
            g_diff = abs(item[1] - bg_color[1])
            b_diff = abs(item[2] - bg_color[2])
            if r_diff <= tolerance and g_diff <= tolerance and b_diff <= tolerance:
                # To maintain smooth edges, advanced alpha could be calculated, 
                # but a simple binary alpha is fine for this context.
                new_data.append((255, 255, 255, 0)) # Fully transparent
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print("Success! Created " + output_path)
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    remove_bg("logo.png", "logo-transparent.png")
