// Navigation function for individual pace pages
function navigateToPacePage(timeKey) {
    window.location.href = `marathon-pace-${timeKey}.html`;
}

// Generate pace data for a given finish time
function generatePaceData(finishTimeInSeconds) {
    const totalDistance = 42.195; // kilometers
    const pacePerKm = finishTimeInSeconds / totalDistance;
    
    const paceData = [];
    
    for (let km = 1; km <= 42; km++) {
        const splitTime = pacePerKm;
        const cumulativeTime = km * pacePerKm;
        
        paceData.push({
            kilometer: km,
            splitTime: splitTime,
            cumulativeTime: cumulativeTime
        });
    }
    
    // Add final 195m
    const finalSplit = (195 / 1000) * pacePerKm;
    paceData.push({
        kilometer: '42.195',
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

// Calculate pace per mile from pace per km
function pacePerMile(pacePerKmInSeconds) {
    return pacePerKmInSeconds * 1.60934;
}

// Get pace information for a specific finish time
function getPaceInfo(finishTime) {
    const finishTimeInSeconds = finishTime;
    const totalDistance = 42.195;
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

// Predefined finish times and their data
const marathonTimes = {
    '2-30': {
        finishTime: 2 * 3600 + 30 * 60, // 2:30:00
        level: 'Elite',
        description: 'Elite Level'
    },
    '2-45': {
        finishTime: 2 * 3600 + 45 * 60, // 2:45:00
        level: 'Advanced',
        description: 'Advanced Level'
    },
    '3-00': {
        finishTime: 3 * 3600, // 3:00:00
        level: 'Advanced',
        description: 'Boston Qualifier'
    },
    '3-15': {
        finishTime: 3 * 3600 + 15 * 60, // 3:15:00
        level: 'Intermediate',
        description: 'Strong Runner'
    },
    '3-30': {
        finishTime: 3 * 3600 + 30 * 60, // 3:30:00
        level: 'Intermediate',
        description: 'Popular Goal'
    },
    '3-45': {
        finishTime: 3 * 3600 + 45 * 60, // 3:45:00
        level: 'Intermediate',
        description: 'Good Pace'
    },
    '4-00': {
        finishTime: 4 * 3600, // 4:00:00
        level: 'Beginner',
        description: 'First Marathon'
    },
    '4-15': {
        finishTime: 4 * 3600 + 15 * 60, // 4:15:00
        level: 'Beginner',
        description: 'Comfortable Pace'
    },
    '4-30': {
        finishTime: 4 * 3600 + 30 * 60, // 4:30:00
        level: 'Beginner',
        description: 'Steady Pace'
    },
    '4-45': {
        finishTime: 4 * 3600 + 45 * 60, // 4:45:00
        level: 'Beginner',
        description: 'Enjoyable Pace'
    },
    '5-00': {
        finishTime: 5 * 3600, // 5:00:00
        level: 'Beginner',
        description: 'Walk/Run Friendly'
    },
    '5-30': {
        finishTime: 5 * 3600 + 30 * 60, // 5:30:00
        level: 'Beginner',
        description: 'Walk/Run Mix'
    },
    '6-00': {
        finishTime: 6 * 3600, // 6:00:00
        level: 'Beginner',
        description: 'Walking Pace'
    }
};

// Initialize page if it's an individual pace page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    const timeMatch = currentPage.match(/marathon-pace-(\d+-\d+)\.html/);
    
    if (timeMatch) {
        const timeKey = timeMatch[1];
        const timeData = marathonTimes[timeKey];
        
        if (timeData) {
            initializePacePage(timeKey, timeData);
        }
    }
});

// Initialize individual pace page
function initializePacePage(timeKey, timeData) {
    const paceInfo = getPaceInfo(timeData.finishTime);
    const paceData = generatePaceData(timeData.finishTime);
    
    // Update page title and header
    document.title = `${formatTime(timeData.finishTime)} Marathon Pace Chart`;
    document.querySelector('.hero-title').textContent = `${formatTime(timeData.finishTime)} Marathon Pace`;
    
    // Update pace summary
    const paceSummary = document.querySelector('.pace-summary');
    if (paceSummary) {
        paceSummary.innerHTML = `
            <h2>${formatTime(timeData.finishTime)} Marathon Pace</h2>
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
