// Navigation functions
function navigateToMarathon() {
    window.location.href = 'marathon-pace-chart-final/';
}

function navigateToHalfMarathon() {
    window.location.href = 'half-marathon-pace-chart-final/';
}

// Mobile dropdown menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.parentElement;
            const isActive = dropdown.classList.contains('active');
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown').forEach(d => {
                d.classList.remove('active');
            });
            
            // Toggle current dropdown
            if (!isActive) {
                dropdown.classList.add('active');
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(d => {
                d.classList.remove('active');
            });
        }
    });
});

// Pace Calculator
function calculatePace() {
    const distance = parseFloat(document.getElementById('distance').value);
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    
    if (distance <= 0) {
        alert('Please select a valid distance');
        return;
    }
    
    const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
    if (totalTimeInSeconds <= 0) {
        alert('Please enter a valid time');
        return;
    }
    
    // Calculate pace per kilometer
    const pacePerKmInSeconds = totalTimeInSeconds / distance;
    const pacePerKmMinutes = Math.floor(pacePerKmInSeconds / 60);
    const pacePerKmSeconds = Math.round(pacePerKmInSeconds % 60);
    
    // Calculate pace per mile
    const distanceInMiles = distance * 0.621371;
    const pacePerMileInSeconds = totalTimeInSeconds / distanceInMiles;
    const pacePerMileMinutes = Math.floor(pacePerMileInSeconds / 60);
    const pacePerMileSeconds = Math.round(pacePerMileInSeconds % 60);
    
    // Calculate average speed
    const avgSpeedKmh = (distance / totalTimeInSeconds) * 3600;
    const avgSpeedMph = avgSpeedKmh * 0.621371;
    
    // Display results
    const resultDiv = document.getElementById('pace-result');
    resultDiv.innerHTML = `
        <h3>Pace Calculation Results</h3>
        <div class="pace-item">
            <span class="pace-label">Pace per Kilometer:</span>
            <span class="pace-value">${pacePerKmMinutes}:${pacePerKmSeconds.toString().padStart(2, '0')} /km</span>
        </div>
        <div class="pace-item">
            <span class="pace-label">Pace per Mile:</span>
            <span class="pace-value">${pacePerMileMinutes}:${pacePerMileSeconds.toString().padStart(2, '0')} /mile</span>
        </div>
        <div class="pace-item">
            <span class="pace-label">Average Speed (km/h):</span>
            <span class="pace-value">${avgSpeedKmh.toFixed(2)} km/h</span>
        </div>
        <div class="pace-item">
            <span class="pace-label">Average Speed (mph):</span>
            <span class="pace-value">${avgSpeedMph.toFixed(2)} mph</span>
        </div>
        <div class="pace-item">
            <span class="pace-label">Total Distance:</span>
            <span class="pace-value">${distance} km</span>
        </div>
        <div class="pace-item">
            <span class="pace-label">Total Time:</span>
            <span class="pace-value">${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</span>
        </div>
    `;
    
    resultDiv.classList.add('show');
}

// Format time helper function
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else {
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }
}

// Format pace helper function
function formatPace(secondsPerKm) {
    const minutes = Math.floor(secondsPerKm / 60);
    const seconds = Math.floor(secondsPerKm % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Initialize calculator with default values
document.addEventListener('DOMContentLoaded', function() {
    // Set default values
    document.getElementById('hours').value = 3;
    document.getElementById('minutes').value = 30;
    document.getElementById('seconds').value = 0;
    
    // Add event listeners for real-time calculation
    const inputs = ['distance', 'hours', 'minutes', 'seconds'];
    inputs.forEach(inputId => {
        document.getElementById(inputId).addEventListener('input', function() {
            // Auto-calculate when all fields have values
            const distance = document.getElementById('distance').value;
            const hours = document.getElementById('hours').value;
            const minutes = document.getElementById('minutes').value;
            const seconds = document.getElementById('seconds').value;
            
            if (distance && (hours || minutes || seconds)) {
                calculatePace();
            }
        });
    });
});
