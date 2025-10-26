#!/bin/bash

# Function to remove duplicate quick links sections
fix_duplicate_quick_links() {
    local file=$1
    echo "Processing file: $file"
    
    # Create a temporary file
    local temp_file="${file}.tmp"
    
    # Count Quick Links sections
    local count=$(grep -c "pace-quick-links" "$file")
    
    if [ "$count" -gt 1 ]; then
        echo "Found $count Quick Links sections in $file, fixing..."
        
        # Keep only the first Quick Links section and remove others
        awk '
            !found && /<div class="pace-quick-links">/ {
                found=1;
                print;
                next
            }
            found && /<div class="pace-quick-links">/ {
                skip=1;
                next
            }
            skip && /<\/div>/ {
                if (divCount == 0) {
                    skip=0;
                    next
                }
                divCount--;
                next
            }
            skip {
                if (/<div/) divCount++;
                if (/<\/div/) divCount--;
                next
            }
            { print }
        ' "$file" > "$temp_file"
        
        # Replace original file with fixed version
        mv "$temp_file" "$file"
        echo "Fixed duplicate Quick Links in $file"
    else
        echo "No duplicate Quick Links found in $file"
    fi
}

echo "Starting to fix duplicate Quick Links..."

# Process marathon pages
echo "Processing marathon pace pages..."
find ./marathon-pace-chart-final -name "index.html" -path "*/[0-9]*-marathon-pace/*" -exec bash -c 'fix_duplicate_quick_links "$0"' {} \;

# Process half marathon pages
echo "Processing half marathon pace pages..."
find ./half-marathon-pace-chart-final -name "index.html" -path "*/[0-9]*-half-marathon-pace/*" -exec bash -c 'fix_duplicate_quick_links "$0"' {} \;

echo "Duplicate Quick Links fix completed!"