#!/usr/bin/env python3
"""
生成优化的网站图标
创建更专业的跑步者图标设计
"""

import os
from PIL import Image, ImageDraw

def create_marathon_icon(size):
    """创建更专业的马拉松图标"""
    # 创建画布
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # 计算中心点
    center = size // 2
    
    # 计算圆形背景的尺寸
    bg_radius = int(size * 0.45)
    
    # 绘制深蓝色渐变背景
    draw.ellipse([center - bg_radius, center - bg_radius, 
                  center + bg_radius, center + bg_radius],
                 fill=(79, 70, 229, 255))  # Indigo-600 (#4F46E5)
    
    # 计算跑步者图标的尺寸
    runner_width = int(size * 0.5)
    runner_height = int(size * 0.6)
    runner_x = center - runner_width // 2
    runner_y = center - runner_height // 2
    
    # 绘制简化的跑步者图标（白色）
    runner_points = [
        # 头部
        (runner_x + runner_width * 0.4, runner_y + runner_height * 0.2),
        # 躯干
        (runner_x + runner_width * 0.45, runner_y + runner_height * 0.4),
        (runner_x + runner_width * 0.5, runner_y + runner_height * 0.6),
        # 跑动的腿
        (runner_x + runner_width * 0.3, runner_y + runner_height * 0.8),
        (runner_x + runner_width * 0.7, runner_y + runner_height * 0.7),
        # 跑动的手臂
        (runner_x + runner_width * 0.2, runner_y + runner_height * 0.45),
        (runner_x + runner_width * 0.8, runner_y + runner_height * 0.35),
    ]
    
    # 连接点绘制跑步者轮廓
    for i in range(len(runner_points)-1):
        draw.line([runner_points[i], runner_points[i+1]], 
                 fill=(255, 255, 255, 255), width=max(2, size//16))
    
    # 返回完成的图标
    return img

def generate_icons():
    """生成所有需要的图标尺寸"""
    sizes = [
        (16, 'favicon-16x16.png'),
        (32, 'favicon-32x32.png'),
        (48, 'favicon-48x48.png'),
        (96, 'favicon-96x96.png'),  # 添加96x96尺寸
        (180, 'apple-touch-icon.png'),
        (192, 'android-chrome-192x192.png'),
        (512, 'android-chrome-512x512.png')
    ]
    
    print("🎨 生成优化的网站图标...")
    
    for size, filename in sizes:
        try:
            icon = create_marathon_icon(size)
            icon.save(filename, 'PNG', optimize=True)
            print(f"✅ 生成 {filename} ({size}x{size})")
        except Exception as e:
            print(f"❌ 生成 {filename} 失败: {e}")
    
    # 生成多尺寸favicon.ico
    try:
        favicon_32 = create_marathon_icon(32)
        favicon_32.save('favicon.ico', format='ICO', 
                       sizes=[(16, 16), (32, 32), (48, 48)])
        print("✅ 生成 favicon.ico (多尺寸)")
    except Exception as e:
        print(f"❌ 生成 favicon.ico 失败: {e}")

if __name__ == "__main__":
    generate_icons()
    print("\n🎉 图标生成完成！")