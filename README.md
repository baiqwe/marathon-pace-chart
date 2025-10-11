# Marathon Pace Chart - Your Ultimate Running Guide

A comprehensive web application for marathon and half marathon pacing, featuring detailed pace charts, custom pace calculator, and training strategies.

## Features

### 🏠 Homepage
- **Core Keywords**: marathon pace, marathon pace chart
- Two main navigation buttons:
  - Marathon Pace Chart
  - Half Marathon Pace Chart
- Custom pace calculator for any distance and time

### 🏃‍♂️ Marathon Pace Chart
- Time directory tree with finish times from 2:30 to 6:00+
- Individual pages for each target time
- Detailed kilometer-by-kilometer splits
- Training tips and strategies
- Level indicators (Elite, Advanced, Intermediate, Beginner)

### 🏃‍♀️ Half Marathon Pace Chart
- Time directory tree with finish times from 1:15 to 2:30+
- Individual pages for each target time
- Detailed kilometer-by-kilometer splits
- Training tips and strategies
- Level indicators (Elite, Advanced, Intermediate, Beginner)

### 🧮 Custom Pace Calculator
- Support for multiple distances (5K, 10K, Half Marathon, Marathon)
- Real-time pace calculation
- Displays pace per kilometer and per mile
- Shows average speed in km/h and mph
- Total time and distance summary

## File Structure

```
marathon/
├── index.html                    # Homepage
├── styles.css                    # Main stylesheet
├── script.js                     # Homepage JavaScript
├── marathon-pace-chart.html      # Marathon pace chart directory
├── marathon-styles.css           # Marathon-specific styles
├── marathon-script.js            # Marathon JavaScript functions
├── marathon-pace-2-30.html       # 2:30:00 marathon pace (Elite)
├── marathon-pace-2-45.html       # 2:45:00 marathon pace (Advanced)
├── marathon-pace-3-00.html       # 3:00:00 marathon pace (Boston Qualifier)
├── marathon-pace-3-15.html       # 3:15:00 marathon pace (Intermediate)
├── marathon-pace-3-30.html       # 3:30:00 marathon pace (Intermediate)
├── marathon-pace-3-45.html       # 3:45:00 marathon pace (Intermediate)
├── marathon-pace-4-00.html       # 4:00:00 marathon pace (Beginner)
├── marathon-pace-4-15.html       # 4:15:00 marathon pace (Beginner)
├── marathon-pace-4-30.html       # 4:30:00 marathon pace (Beginner)
├── marathon-pace-4-45.html       # 4:45:00 marathon pace (Beginner)
├── marathon-pace-5-00.html       # 5:00:00 marathon pace (Beginner)
├── marathon-pace-5-30.html       # 5:30:00 marathon pace (Beginner)
├── marathon-pace-6-00.html       # 6:00:00 marathon pace (Beginner)
├── half-marathon-pace-chart.html # Half marathon pace chart directory
├── half-marathon-script.js       # Half marathon JavaScript functions
├── half-marathon-pace-1-15.html  # 1:15:00 half marathon pace (Elite)
├── half-marathon-pace-1-20.html  # 1:20:00 half marathon pace (Advanced)
├── half-marathon-pace-1-25.html  # 1:25:00 half marathon pace (Advanced)
├── half-marathon-pace-1-30.html  # 1:30:00 half marathon pace (Intermediate)
├── half-marathon-pace-1-35.html  # 1:35:00 half marathon pace (Intermediate)
├── half-marathon-pace-1-40.html  # 1:40:00 half marathon pace (Intermediate)
├── half-marathon-pace-1-45.html  # 1:45:00 half marathon pace (Beginner)
├── half-marathon-pace-1-50.html  # 1:50:00 half marathon pace (Beginner)
├── half-marathon-pace-1-55.html  # 1:55:00 half marathon pace (Beginner)
├── half-marathon-pace-2-00.html  # 2:00:00 half marathon pace (Beginner)
├── half-marathon-pace-2-15.html  # 2:15:00 half marathon pace (Beginner)
├── half-marathon-pace-2-30.html  # 2:30:00 half marathon pace (Beginner)
└── README.md                     # This file
```

## Usage

1. **Open the homepage**: Open `index.html` in your web browser
2. **Choose your race type**: Click either "Marathon Pace Chart" or "Half Marathon Pace Chart"
3. **Select your target time**: Click on your desired finish time from the grid
4. **View detailed splits**: See kilometer-by-kilometer pacing information
5. **Use the calculator**: Input your own distance and time to calculate custom paces

## Key Features

### Responsive Design
- Mobile-friendly interface
- Modern gradient backgrounds
- Smooth hover animations
- Clean typography using Inter font

### SEO Optimized
- Strategic use of "marathon pace" and "marathon pace chart" keywords
- Semantic HTML structure
- Descriptive page titles and meta descriptions

### User Experience
- Intuitive navigation
- Clear visual hierarchy
- Color-coded difficulty levels
- Comprehensive training tips

## Customization

### Adding New Finish Times
To add new finish times, update the respective JavaScript files:
- `marathon-script.js` for marathon times
- `half-marathon-script.js` for half marathon times

### Styling
- Main styles: `styles.css`
- Marathon-specific styles: `marathon-styles.css`
- Uses CSS Grid and Flexbox for responsive layouts

### Pace Calculations
All pace calculations are done client-side using JavaScript:
- Kilometer splits
- Mile conversions
- Average speed calculations
- Time formatting

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## Future Enhancements
- Training plan integration
- Race day weather considerations
- Pace adjustment for elevation
- Export functionality for pace charts
- Social sharing features

## License
© 2024 Marathon Pace Chart. Your ultimate running companion.
