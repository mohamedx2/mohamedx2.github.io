#!/usr/bin/env python3
"""Generate a social media card image (1200x630px) for Open Graph sharing."""

from PIL import Image, ImageDraw, ImageFont
import textwrap

# Create image with gradient background
width, height = 1200, 630
image = Image.new('RGB', (width, height), color='white')
draw = ImageDraw.Draw(image, 'RGBA')

# Create a gradient background (dark blue to purple)
for y in range(height):
    ratio = y / height
    r = int(15 + (96 - 15) * ratio)  # 15 to 96
    g = int(23 + (165 - 23) * ratio)  # 23 to 165
    b = int(42 + (250 - 42) * ratio)  # 42 to 250
    draw.rectangle([(0, y), (width, y + 1)], fill=(r, g, b))

# Add decorative circles
circle_color = (96, 165, 250, 30)  # Light blue with transparency
draw.ellipse([(900, -100), (1200, 200)], fill=circle_color)
draw.ellipse([(-100, 400), (300, 700)], fill=circle_color)

# Try to use system fonts, fallback to default
FONT_PATH = "C:\\Windows\\Fonts\\arial.ttf"
try:
    title_font = ImageFont.truetype(FONT_PATH, 64)
    subtitle_font = ImageFont.truetype(FONT_PATH, 40)
    small_font = ImageFont.truetype(FONT_PATH, 28)
except (IOError, OSError):
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    small_font = ImageFont.load_default()

# Add text
title = "Mohamed Ali Hamroun"
subtitle = "Full Stack Developer"
description = "2 Years • 10+ Projects • React • Next.js • Node.js"

# Draw title
text_color = (255, 255, 255)
x_pos = 60
y_pos = 150

draw.text((x_pos, y_pos), title, fill=text_color, font=title_font)

# Draw subtitle
y_pos += 100
draw.text((x_pos, y_pos), subtitle, fill=(167, 139, 250), font=subtitle_font)

# Draw description
y_pos += 80
for line in textwrap.wrap(description, width=40):
    draw.text((x_pos, y_pos), line, fill=(203, 213, 225), font=small_font)
    y_pos += 45

# Save the image
output_path = 'public/social-card.jpg'
image.save(output_path, 'JPEG', quality=95)
print(f"✅ Social media card created: {output_path}")
print(f"   Dimensions: {width}x{height}px")
print(f"   File size: {len(open(output_path, 'rb').read()) / 1024:.1f} KB")
