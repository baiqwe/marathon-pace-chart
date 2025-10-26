#!/bin/bash

# Function to fix a single file
fix_file() {
    local file=$1
    echo "Processing: $file"
    
    # Create temporary file
    temp_file=$(mktemp)
    
    # Remove everything between the second occurrence of pace-quick-links and its closing div
    awk '
        /class="pace-quick-links"/ {
            count++
            if (count == 1) print
            else skip = 1
            next
        }
        skip && /<\/div>/ {
            if (divCount == 0) {
                skip = 0
                next
            }
            divCount--
            next
        }
        skip {
            if (/<div/) divCount++
            if (/<\/div/) divCount--
            next
        }
        { print }
    ' "$file" > "$temp_file"
    
    # Replace original file
    mv "$temp_file" "$file"
}

# Process all marathon pages
echo "Processing marathon pages..."
find marathon-pace-chart-final -name "index.html" -path "*-marathon-pace/*" -exec bash -c 'fix_file "$0"' {} \;

# Process all half-marathon pages
echo "Processing half-marathon pages..."
find half-marathon-pace-chart-final -name "index.html" -path "*-half-marathon-pace/*" -exec bash -c 'fix_file "$0"' {} \;

echo "All files processed"