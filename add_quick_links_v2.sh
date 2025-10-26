#!/bin/bash

# Find all index.html files in marathon pace folders
find ./marathon-pace-chart-final -name "index.html" -path "*/[0-9]*-marathon-pace/*" -exec echo "Processing {}" \; -exec sed -i '' -e '/<\/main>/i\
            <!-- Quick Links -->\
            <div class="pace-quick-links">\
                <h2>Quick Links</h2>\
                <div class="pace-quick-links-grid">\
                    <a href="/" class="pace-quick-link">\
                        <div class="pace-quick-link-icon">🏠</div>\
                        <div class="pace-quick-link-content">\
                            <h3>Home</h3>\
                            <p>Back to main page</p>\
                        </div>\
                    </a>\
                    <a href="/marathon-pace-chart-final/" class="pace-quick-link">\
                        <div class="pace-quick-link-icon">🏃‍♂️</div>\
                        <div class="pace-quick-link-content">\
                            <h3>Marathon Pace Charts</h3>\
                            <p>All marathon pace options</p>\
                        </div>\
                    </a>\
                    <a href="/half-marathon-pace-chart-final/" class="pace-quick-link">\
                        <div class="pace-quick-link-icon">🏃‍♀️</div>\
                        <div class="pace-quick-link-content">\
                            <h3>Half Marathon Charts</h3>\
                            <p>Half marathon pace options</p>\
                        </div>\
                    </a>\
                    <a href="/pace-calculator.html" class="pace-quick-link">\
                        <div class="pace-quick-link-icon">🧮</div>\
                        <div class="pace-quick-link-content">\
                            <h3>Pace Calculator</h3>\
                            <p>Calculate your pace</p>\
                        </div>\
                    </a>\
                </div>\
            </div>\
' {} \;

# Find all index.html files in half marathon pace folders
find ./half-marathon-pace-chart-final -name "index.html" -path "*/[0-9]*-half-marathon-pace/*" -exec echo "Processing {}" \; -exec sed -i '' -e '/<\/main>/i\
            <!-- Quick Links -->\
            <div class="pace-quick-links">\
                <h2>Quick Links</h2>\
                <div class="pace-quick-links-grid">\
                    <a href="/" class="pace-quick-link">\
                        <div class="pace-quick-link-icon">🏠</div>\
                        <div class="pace-quick-link-content">\
                            <h3>Home</h3>\
                            <p>Back to main page</p>\
                        </div>\
                    </a>\
                    <a href="/marathon-pace-chart-final/" class="pace-quick-link">\
                        <div class="pace-quick-link-icon">🏃‍♂️</div>\
                        <div class="pace-quick-link-content">\
                            <h3>Marathon Pace Charts</h3>\
                            <p>All marathon pace options</p>\
                        </div>\
                    </a>\
                    <a href="/half-marathon-pace-chart-final/" class="pace-quick-link">\
                        <div class="pace-quick-link-icon">🏃‍♀️</div>\
                        <div class="pace-quick-link-content">\
                            <h3>Half Marathon Charts</h3>\
                            <p>Half marathon pace options</p>\
                        </div>\
                    </a>\
                    <a href="/pace-calculator.html" class="pace-quick-link">\
                        <div class="pace-quick-link-icon">🧮</div>\
                        <div class="pace-quick-link-content">\
                            <h3>Pace Calculator</h3>\
                            <p>Calculate your pace</p>\
                        </div>\
                    </a>\
                </div>\
            </div>\
' {} \;

echo "Quick Links have been added to all pace pages"