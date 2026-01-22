// HCP Data from loop.csv
// This data represents healthcare providers who are Loop-friendly
const hcpData = {
  // Data will be populated from CSV
};

// Country coordinates for map positioning
const countryCoordinates = {
  "Argentina": { lat: -38.4161, lng: -63.6167 },
  "Australia": { lat: -25.2744, lng: 133.7751 },
  "Austria": { lat: 47.5162, lng: 14.5501 },
  "Brazil": { lat: -14.2350, lng: -51.9253 },
  "Canada": { lat: 56.1304, lng: -106.3468 },
  "Chile": { lat: -35.6751, lng: -71.5430 },
  "Colombia": { lat: 4.5709, lng: -74.2973 },
  "Czech republic": { lat: 49.8175, lng: 15.4730 },
  "Denmark": { lat: 56.2639, lng: 9.5018 },
  "England / Great Britain": { lat: 55.3781, lng: -3.4360 },
  "Germany": { lat: 51.1657, lng: 10.4515 },
  "Greece": { lat: 39.0742, lng: 21.8243 },
  "Israel": { lat: 31.0461, lng: 34.8516 },
  "Italy": { lat: 41.8719, lng: 12.5674 },
  "Japan": { lat: 36.2048, lng: 138.2529 },
  "New Zealand": { lat: -40.9006, lng: 174.8860 },
  "Norway": { lat: 60.4720, lng: 8.4689 },
  "Poland": { lat: 51.9194, lng: 19.1451 },
  "Saudi Arabia": { lat: 23.8859, lng: 45.0792 },
  "South Korea": { lat: 35.9078, lng: 127.7669 },
  "Spain": { lat: 40.4637, lng: -3.7492 },
  "Sweden": { lat: 60.1282, lng: 18.6435 },
  "Switzerland": { lat: 46.8182, lng: 8.2275 },
  "Türkiye": { lat: 38.9637, lng: 35.2433 },
  "The Netherlands / Nederland": { lat: 52.1326, lng: 5.2913 },
  "United Kingdom": { lat: 55.3781, lng: -3.4360 },
  "United States": { lat: 37.0902, lng: -95.7129 },
  "United Arab Emirates": { lat: 23.4241, lng: 53.8478 }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { hcpData, countryCoordinates };
}
