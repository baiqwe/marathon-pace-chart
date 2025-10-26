#!/bin/bash

# Quick Links HTML snippet
QUICK_LINKS='
            <!-- Quick Links -->
            <div class="pace-quick-links">
                <h3>Quick Links</h3>
                <div class="pace-quick-links-grid">
                    <a href="/" class="pace-quick-link">
                        <div class="pace-quick-link-icon">🏠</div>
                        <div class="pace-quick-link-content">
                            <h4>Home</h4>
                            <p>Back to main page</p>
                        </div>
                    </a>
                    <a href="/marathon-pace-chart-final/" class="pace-quick-link">
                        <div class="pace-quick-link-icon">🏃‍♂️</div>
                        <div class="pace-quick-link-content">
                            <h4>Marathon Pace Charts</h4>
                            <p>All marathon pace options</p>
                        </div>
                    </a>
                    <a href="/half-marathon-pace-chart-final/" class="pace-quick-link">
                        <div class="pace-quick-link-icon">🏃‍♀️</div>
                        <div class="pace-quick-link-content">
                            <h4>Half Marathon Charts</h4>
                            <p>Half marathon pace options</p>
                        </div>
                    </a>
                    <a href="/pace-calculator.html" class="pace-quick-link">
                        <div class="pace-quick-link-icon">🧮</div>
                        <div class="pace-quick-link-content">
                            <h4>Pace Calculator</h4>
                            <p>Calculate your pace</p>
                        </div>
                    </a>
                </div>
            </div>'

# Find all marathon pace pages and update them
find /Users/fanqienigehamigua/Documents/marathon/marathon-pace-chart-final -name "index.html" -not -path "*/index.html" | while read file; do
    echo "Updating $file"
    
    # Check if Quick Links already exist
    if ! grep -q "pace-quick-links" "$file"; then
        # Insert Quick Links before the closing main tag
        sed -i '' '/^        <\/main>/i\
'"$QUICK_LINKS"'
' "$file"
    fi
done

echo "Marathon pace pages updated!"
