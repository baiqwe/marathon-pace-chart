#!/bin/bash

# Update CSS version numbers to force cache refresh
echo "Updating CSS version numbers..."

# Update marathon pace pages
find /Users/fanqienigehamigua/Documents/marathon/marathon-pace-chart-final -name "index.html" -not -path "*/index.html" -exec sed -i '' 's|styles\.css|styles.css?v=2|g' {} \;
find /Users/fanqienigehamigua/Documents/marathon/marathon-pace-chart-final -name "index.html" -not -path "*/index.html" -exec sed -i '' 's|marathon-styles\.css|marathon-styles.css?v=2|g' {} \;

# Update half marathon pace pages
find /Users/fanqienigehamigua/Documents/marathon/half-marathon-pace-chart-final -name "index.html" -not -path "*/index.html" -exec sed -i '' 's|styles\.css|styles.css?v=2|g' {} \;
find /Users/fanqienigehamigua/Documents/marathon/half-marathon-pace-chart-final -name "index.html" -not -path "*/index.html" -exec sed -i '' 's|marathon-styles\.css|marathon-styles.css?v=2|g' {} \;

# Update main pages
sed -i '' 's|styles\.css|styles.css?v=2|g' /Users/fanqienigehamigua/Documents/marathon/index.html
sed -i '' 's|marathon-styles\.css|marathon-styles.css?v=2|g' /Users/fanqienigehamigua/Documents/marathon/index.html

sed -i '' 's|styles\.css|styles.css?v=2|g' /Users/fanqienigehamigua/Documents/marathon/pace-calculator.html
sed -i '' 's|marathon-styles\.css|marathon-styles.css?v=2|g' /Users/fanqienigehamigua/Documents/marathon/pace-calculator.html

echo "CSS version numbers updated!"
