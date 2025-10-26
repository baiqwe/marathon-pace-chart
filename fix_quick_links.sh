#!/bin/bash

# Quick Links HTML template
QUICK_LINKS='            <!-- Quick Links -->
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

# Function to add quick links to a file
add_quick_links() {
    local file=$1
    echo "Processing file: $file"
    
    # Check if file exists
    if [ ! -f "$file" ]; then
        echo "File not found: $file"
        return
    fi
    
    # Check if quick links already exist
    if grep -q "pace-quick-links" "$file"; then
        echo "Quick links already exist in $file"
        return
    }
    
    # Create a temporary file
    local temp_file="${file}.tmp"
    
    # Add quick links before the footer
    awk -v links="$QUICK_LINKS" '
        /<footer class="footer">/ { print links; }
        { print }
    ' "$file" > "$temp_file"
    
    # Replace original file with temp file
    mv "$temp_file" "$file"
    echo "Added quick links to $file"
}

echo "Starting to add Quick Links to all pages..."

# Process marathon pages
echo "Processing marathon pace pages..."
for dir in marathon-pace-chart-final/*-marathon-pace/; do
    if [ -d "$dir" ]; then
        index_file="${dir}index.html"
        add_quick_links "$index_file"
    fi
done

# Process half marathon pages
echo "Processing half marathon pace pages..."
for dir in half-marathon-pace-chart-final/*-half-marathon-pace/; do
    if [ -d "$dir" ]; then
        index_file="${dir}index.html"
        add_quick_links "$index_file"
    fi
done

echo "Quick Links addition completed!"