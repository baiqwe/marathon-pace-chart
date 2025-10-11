// Navigation function for half marathon pace pages
function navigateToHalfPacePage(timeKey) {
    window.location.href = `half-marathon-pace-${timeKey}.html`;
}

// Generate pace data for half marathon
function generateHalfMarathonPaceData(finishTimeInSeconds) {
    const totalDistance = 21.0975; // kilometers
    const pacePerKm = finishTimeInSeconds / totalDistance;
    
    const paceData = [];
    
    for (let km = 1; km <= 21; km++) {
        const splitTime = pacePerKm;
        const cumulativeTime = km * pacePerKm;
        
        paceData.push({
            kilometer: km,
            splitTime: splitTime,
            cumulativeTime: cumulativeTime
        });
    }
    
    // Add final 97.5m
    const finalSplit = (97.5 / 1000) * pacePerKm;
    paceData.push({
        kilometer: '21.0975',
        splitTime: finalSplit,
        cumulativeTime: finishTimeInSeconds
    });
    
    return paceData;
}

// Format time in seconds to MM:SS or HH:MM:SS
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

// Get pace information for half marathon
function getHalfMarathonPaceInfo(finishTime) {
    const finishTimeInSeconds = finishTime;
    const totalDistance = 21.0975;
    const pacePerKm = finishTimeInSeconds / totalDistance;
    const pacePerMile = pacePerKm * 1.60934;
    
    return {
        finishTime: finishTimeInSeconds,
        pacePerKm: pacePerKm,
        pacePerMile: pacePerMile,
        avgSpeedKmh: (totalDistance / finishTimeInSeconds) * 3600,
        avgSpeedMph: ((totalDistance / finishTimeInSeconds) * 3600) * 0.621371
    };
}

// Predefined half marathon finish times
const halfMarathonTimes = {
    '1-15': {
        finishTime: 1 * 3600 + 15 * 60, // 1:15:00
        level: 'Elite',
        description: 'Elite Level'
    },
    '1-20': {
        finishTime: 1 * 3600 + 20 * 60, // 1:20:00
        level: 'Advanced',
        description: 'Advanced Level'
    },
    '1-25': {
        finishTime: 1 * 3600 + 25 * 60, // 1:25:00
        level: 'Advanced',
        description: 'Strong Runner'
    },
    '1-30': {
        finishTime: 1 * 3600 + 30 * 60, // 1:30:00
        level: 'Intermediate',
        description: 'Popular Goal'
    },
    '1-35': {
        finishTime: 1 * 3600 + 35 * 60, // 1:35:00
        level: 'Intermediate',
        description: 'Good Pace'
    },
    '1-40': {
        finishTime: 1 * 3600 + 40 * 60, // 1:40:00
        level: 'Intermediate',
        description: 'Solid Pace'
    },
    '1-45': {
        finishTime: 1 * 3600 + 45 * 60, // 1:45:00
        level: 'Beginner',
        description: 'First Half Marathon'
    },
    '1-50': {
        finishTime: 1 * 3600 + 50 * 60, // 1:50:00
        level: 'Beginner',
        description: 'Comfortable Pace'
    },
    '1-55': {
        finishTime: 1 * 3600 + 55 * 60, // 1:55:00
        level: 'Beginner',
        description: 'Steady Pace'
    },
    '2-00': {
        finishTime: 2 * 3600, // 2:00:00
        level: 'Beginner',
        description: 'Enjoyable Pace'
    },
    '2-15': {
        finishTime: 2 * 3600 + 15 * 60, // 2:15:00
        level: 'Beginner',
        description: 'Walk/Run Friendly'
    },
    '2-30': {
        finishTime: 2 * 3600 + 30 * 60, // 2:30:00
        level: 'Beginner',
        description: 'Walking Pace'
    }
};

// Initialize page if it's an individual half marathon pace page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    const timeMatch = currentPage.match(/half-marathon-pace-(\d+-\d+)\.html/);
    
    if (timeMatch) {
        const timeKey = timeMatch[1];
        const timeData = halfMarathonTimes[timeKey];
        
        if (timeData) {
            initializeHalfMarathonPacePage(timeKey, timeData);
        }
    }
});

// Initialize individual half marathon pace page
function initializeHalfMarathonPacePage(timeKey, timeData) {
    const paceInfo = getHalfMarathonPaceInfo(timeData.finishTime);
    const paceData = generateHalfMarathonPaceData(timeData.finishTime);
    
    // Update page title and header
    document.title = `${formatTime(timeData.finishTime)} Half Marathon Pace Chart`;
    document.querySelector('.hero-title').textContent = `${formatTime(timeData.finishTime)} Half Marathon Pace`;
    
    // Update pace summary
    const paceSummary = document.querySelector('.pace-summary');
    if (paceSummary) {
        paceSummary.innerHTML = `
            <h2>${formatTime(timeData.finishTime)} Half Marathon Pace</h2>
            <p>${timeData.description} • ${timeData.level} Level</p>
            <div class="pace-stats">
                <div class="pace-stat">
                    <div class="pace-stat-value">${formatTime(paceInfo.pacePerKm)}</div>
                    <div class="pace-stat-label">Per Kilometer</div>
                </div>
                <div class="pace-stat">
                    <div class="pace-stat-value">${formatTime(paceInfo.pacePerMile)}</div>
                    <div class="pace-stat-label">Per Mile</div>
                </div>
                <div class="pace-stat">
                    <div class="pace-stat-value">${paceInfo.avgSpeedKmh.toFixed(1)} km/h</div>
                    <div class="pace-stat-label">Average Speed</div>
                </div>
                <div class="pace-stat">
                    <div class="pace-stat-value">${paceInfo.avgSpeedMph.toFixed(1)} mph</div>
                    <div class="pace-stat-label">Average Speed</div>
                </div>
            </div>
        `;
    }
    
    // Generate pace table
    const paceTable = document.querySelector('.pace-table tbody');
    if (paceTable) {
        paceTable.innerHTML = '';
        
        paceData.forEach((split, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="kilometer">${split.kilometer}</td>
                <td class="split-time">${formatTime(split.splitTime)}</td>
                <td class="cumulative-time">${formatTime(split.cumulativeTime)}</td>
            `;
            paceTable.appendChild(row);
        });
    }
}
