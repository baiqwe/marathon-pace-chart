#!/usr/bin/env python3
"""
生成网站图标文件
从SVG生成各种尺寸的PNG和ICO文件
"""

import os
from PIL import Image, ImageDraw
import io

def create_marathon_icon(size):
    """创建马拉松图标"""
    # 创建画布
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # 计算中心点和半径
    center = size // 2
    radius = int(size * 0.4)
    
    # 绘制橙色圆形背景
    draw.ellipse([center - radius, center - radius, center + radius, center + radius], 
                 fill=(255, 90, 0, 255))  # 橙色
    
    # 绘制简化的跑步者图标（闪电形状）
    # 计算闪电的尺寸
    lightning_size = int(size * 0.3)
    
    # 闪电的坐标点
    points = [
        (center - lightning_size//2, center - lightning_size//4),
        (center, center - lightning_size//2),
        (center - lightning_size//4, center),
        (center + lightning_size//2, center + lightning_size//4),
        (center, center + lightning_size//2),
        (center + lightning_size//4, center)
    ]
    
    # 绘制白色闪电
    draw.polygon(points, fill=(255, 255, 255, 255))
    
    return img

def generate_icons():
    """生成所有需要的图标"""
    sizes = [
        (16, 'favicon-16x16.png'),
        (32, 'favicon-32x32.png'),
        (48, 'favicon-48x48.png'),
        (180, 'apple-touch-icon.png'),
        (192, 'android-chrome-192x192.png'),
        (512, 'android-chrome-512x512.png')
    ]
    
    print("🎨 生成网站图标...")
    
    for size, filename in sizes:
        try:
            icon = create_marathon_icon(size)
            icon.save(filename, 'PNG')
            print(f"✅ 生成 {filename} ({size}x{size})")
        except Exception as e:
            print(f"❌ 生成 {filename} 失败: {e}")
    
    # 生成ICO文件
    try:
        favicon_32 = create_marathon_icon(32)
        favicon_32.save('favicon.ico', format='ICO', sizes=[(16, 16), (32, 32)])
        print("✅ 生成 favicon.ico")
    except Exception as e:
        print(f"❌ 生成 favicon.ico 失败: {e}")

if __name__ == "__main__":
    generate_icons()
    print("\n🎉 图标生成完成！")
