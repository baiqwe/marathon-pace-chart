#!/bin/bash

# 批量添加Quick Links到所有缺少的页面

echo "🔗 开始添加Quick Links到所有页面..."

# Quick Links模板
QUICK_LINKS_TEMPLATE='            <!-- Quick Links -->
            <div class="pace-quick-links">
                <h2>Quick Links</h2>
                <div class="pace-quick-links-grid">
                    <a href="/" class="pace-quick-link">
                        <div class="pace-quick-link-icon">🏠</div>
                        <div class="pace-quick-link-content">
                            <h3>Home</h3>
                            <p>Back to main page</p>
                        </div>
                    </a>
                    <a href="/marathon-pace-chart-final/" class="pace-quick-link">
                        <div class="pace-quick-link-icon">🏃‍♂️</div>
                        <div class="pace-quick-link-content">
                            <h3>Marathon Pace Charts</h3>
                            <p>All marathon pace options</p>
                        </div>
                    </a>
                    <a href="/half-marathon-pace-chart-final/" class="pace-quick-link">
                        <div class="pace-quick-link-icon">🏃‍♀️</div>
                        <div class="pace-quick-link-content">
                            <h3>Half Marathon Charts</h3>
                            <p>Half marathon pace options</p>
                        </div>
                    </a>
                    <a href="/pace-calculator.html" class="pace-quick-link">
                        <div class="pace-quick-link-icon">🧮</div>
                        <div class="pace-quick-link-content">
                            <h3>Pace Calculator</h3>
                            <p>Calculate your pace</p>
                        </div>
                    </a>
                </div>
            </div>'

# 马拉松配速详情页面
MARATHON_PAGES=(
    "marathon-pace-chart-final/315-marathon-pace/index.html"
    "marathon-pace-chart-final/330-marathon-pace/index.html"
    "marathon-pace-chart-final/345-marathon-pace/index.html"
    "marathon-pace-chart-final/4-hour-marathon-pace/index.html"
    "marathon-pace-chart-final/415-marathon-pace/index.html"
    "marathon-pace-chart-final/430-marathon-pace/index.html"
    "marathon-pace-chart-final/445-marathon-pace/index.html"
    "marathon-pace-chart-final/5-hour-marathon-pace/index.html"
    "marathon-pace-chart-final/530-marathon-pace/index.html"
    "marathon-pace-chart-final/6-hour-marathon-pace/index.html"
)

# 半马配速详情页面
HALF_MARATHON_PAGES=(
    "half-marathon-pace-chart-final/115-half-marathon-pace/index.html"
    "half-marathon-pace-chart-final/120-half-marathon-pace/index.html"
    "half-marathon-pace-chart-final/125-half-marathon-pace/index.html"
    "half-marathon-pace-chart-final/135-half-marathon-pace/index.html"
    "half-marathon-pace-chart-final/140-half-marathon-pace/index.html"
    "half-marathon-pace-chart-final/145-half-marathon-pace/index.html"
    "half-marathon-pace-chart-final/150-half-marathon-pace/index.html"
    "half-marathon-pace-chart-final/155-half-marathon-pace/index.html"
    "half-marathon-pace-chart-final/2-hour-half-marathon-pace/index.html"
    "half-marathon-pace-chart-final/215-half-marathon-pace/index.html"
    "half-marathon-pace-chart-final/230-half-marathon-pace/index.html"
)

# 添加Quick Links的函数
add_quick_links() {
    local file="$1"
    if [ -f "$file" ]; then
        # 检查是否已经有Quick Links
        if ! grep -q "Quick Links" "$file"; then
            echo "✅ 添加Quick Links到: $file"
            # 在</main>之前插入Quick Links
            sed -i.bak '/^        <\/main>/i\
'"$QUICK_LINKS_TEMPLATE"'
' "$file"
            rm "$file.bak"
        else
            echo "⏭️  跳过 (已有Quick Links): $file"
        fi
    else
        echo "❌ 文件不存在: $file"
    fi
}

# 处理马拉松页面
echo "🏃‍♂️ 处理马拉松配速页面..."
for page in "${MARATHON_PAGES[@]}"; do
    add_quick_links "$page"
done

# 处理半马页面
echo "🏃‍♀️ 处理半马配速页面..."
for page in "${HALF_MARATHON_PAGES[@]}"; do
    add_quick_links "$page"
done

echo "🎉 Quick Links添加完成！"
