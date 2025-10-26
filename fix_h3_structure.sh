#!/bin/bash

echo "Fixing H3 structure issues..."

# Fix Quick Links h3 to h2 in all pace pages
echo "Fixing Quick Links h3 to h2..."

# Marathon pace pages
find /Users/fanqienigehamigua/Documents/marathon/marathon-pace-chart-final -name "index.html" -not -path "*/index.html" -exec sed -i '' 's|<h3>Quick Links</h3>|<h2>Quick Links</h2>|g' {} \;

# Half marathon pace pages
find /Users/fanqienigehamigua/Documents/marathon/half-marathon-pace-chart-final -name "index.html" -not -path "*/index.html" -exec sed -i '' 's|<h3>Quick Links</h3>|<h2>Quick Links</h2>|g' {} \;

# Main marathon pace page
sed -i '' 's|<h3>Quick Links</h3>|<h2>Quick Links</h2>|g' /Users/fanqienigehamigua/Documents/marathon/marathon-pace-chart-final/index.html

# Main half marathon pace page
sed -i '' 's|<h3>Quick Links</h3>|<h2>Quick Links</h2>|g' /Users/fanqienigehamigua/Documents/marathon/half-marathon-pace-chart-final/index.html

echo "H3 structure fixes completed!"
