# Healthcare Provider Directory (HCP)

A multilingual, interactive web application for finding Loop-friendly healthcare providers around the world.

## 🌟 Features

### 🌍 Interactive World Map
- **SVG-based world map** with clickable countries
- **Color-coded visualization** based on provider density
- **Zoom & Pan functionality** for detailed navigation
- **Tooltip system** showing provider counts on hover

### 🔍 Advanced Search System
- **Global search** across all countries
- **Provider-specific search** within country listings
- **Real-time filtering** with highlighted results
- **Multi-field search** (name, specialty, city, hospital, etc.)

### 🌐 Multilingual Support
- **3 Languages**: English, Türkçe, Italiano
- **Complete translation** of all UI elements
- **Dynamic language switching** with floating button
- **Localized content** including provider cards and modals

### 🎨 Modern UI/UX
- **Responsive design** for mobile and desktop
- **Dark/Light theme** compatibility
- **Smooth animations** and transitions
- **Professional color scheme** with accessibility focus

## 📁 Project Structure

```
HCP-Project/
├── index.html              # Main HTML file
├── css/
│   └── hcp.css             # All styles and themes
├── js/
│   ├── hcp-data.js         # Provider data and helper functions
│   ├── hcp-map.js          # Map functionality and interactions  
│   └── hcp-page.js         # UI controls and language system
├── assets/
│   └── world-map.svg       # Interactive world map
├── turkey.png              # Turkish flag for language switcher
├── italy.png               # Italian flag for language switcher
├── uk-usa.png              # English flag for language switcher
├── loop.csv                # Original data source
└── README.md               # This file
```

## 🚀 Quick Start

1. **Download** all files maintaining the folder structure
2. **Open** `index.html` in any modern web browser
3. **Explore** the interactive map and search features
4. **Switch languages** using the floating globe button

## 🔧 Technical Details

### Data Management
- **CSV Source**: `loop.csv` contains all provider information
- **JavaScript Object**: Converted to efficient lookup structure
- **Helper Functions**: `getCountryData()`, `getAllCountries()`, etc.

### Search Algorithm
- **Multi-field matching** across all provider attributes
- **Case-insensitive** string searching
- **Real-time highlighting** with green text emphasis
- **Regex-safe** special character handling

### Translation System
- **Dynamic content translation** via JavaScript objects
- **Placeholder text translation** for input fields
- **Modal and popup translation** for detailed views
- **Fallback mechanism** (EN → TR → IT)

## 🌈 Color Guide

| Provider Count | Color | Label |
|---------------|-------|-------|
| 0 | Gray | No Providers |
| 1-2 | Light Green | Limited |
| 3-5 | Medium Green | Some |
| 6-10 | Green | Good |
| 11-20 | Dark Green | Excellent |
| 21-50 | Very Dark Green | Very Good |
| 51-100 | Extra Dark Green | Outstanding |
| 100+ | Darkest Green | Exceptional |

## 🎯 Usage Examples

### Finding Providers by Country
1. Click on any **colored country** on the map
2. View the **provider list** with search functionality
3. Click on any **provider card** for detailed information

### Global Search
1. Use the **main search box** to filter countries
2. Results show only countries matching your search
3. **Clear search** button resets the view

### Language Switching
1. Click the **floating globe icon** in bottom-right
2. Select from **English**, **Türkçe**, or **Italiano**
3. **Entire interface** updates immediately

## 🔧 Browser Compatibility

- ✅ **Chrome** 80+
- ✅ **Firefox** 75+
- ✅ **Safari** 13+
- ✅ **Edge** 80+

## 📊 Data Statistics

- **28 Countries** with healthcare providers
- **390+ Providers** across all regions
- **Multiple Languages** for provider information
- **Real-time Search** across all data fields

## 🎨 Customization

### Adding New Providers
1. Update `loop.csv` with new provider data
2. Run conversion script to update `hcp-data.js`
3. Refresh the application

### Adding New Languages
1. Add translations to the `translations` object in `hcp-page.js`
2. Create new flag image for language switcher
3. Update HTML with new language button

### Styling Changes
- Modify `css/hcp.css` for visual customizations
- Update CSS variables for theme changes
- Add responsive breakpoints as needed

## 🚀 Deployment

### Static Hosting
- Upload all files to any **static hosting service**
- Ensure folder structure is maintained
- No server-side processing required

### Recommended Platforms
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Firebase Hosting**

## 📝 License

This project is created for the Loop and Learn community to help patients find Loop-friendly healthcare providers worldwide.

---

**Made with ❤️ for the Loop Community**