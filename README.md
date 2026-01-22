# Loop and Learn — Bilingual Module (EN/IT)

This template displays the Loop Introduction Module content in both English and Italian with integrated video placeholders. Users can switch between languages using the IT/EN toggle.

## How to use

1. Open `index.html` in a browser.
   - Language buttons: IT and EN. Your selection is saved in localStorage.
   - Content switches between English and Italian versions of the module.
2. Add Heygen video URLs to `app.js`:
   - Find the `content` object in the JavaScript file
   - For each section, add the video URL to the `videoUrl` property
   - Example: `videoUrl: "https://your-heygen-url.com"`
3. Branding: The green ring logo is `assets/logo-ring.svg`. Replace if needed; keep the path the same.

## Content Structure

The module includes 8 sections:
1. **Opening – Introduction to the Program**
2. **1.1 What is Loop? Core Principles**
3. **1.2 Why Choose Automated Insulin Delivery (AID) Systems?**
4. **1.3 Comparing Commercial AID Systems vs. Loop**
5. **1.4 Who Can Use Loop? (Eligibility & Considerations)**
6. **1.5 Safe Use & Best Practices for Loop Users**
7. **Summary & Closing**
8. **Quick Quiz (Q&A format)**

Each section has:
- Text content in both EN/IT
- Video placeholder (replace with Heygen URLs)
- Responsive video container

## Notes
- Videos are embedded as iframes when URLs are provided
- Video placeholders show section titles and language
- All content is structured and ready for video integration

## Files
- `index.html` — layout, EN/IT toggle
- `styles.css` — responsive styles with video containers
- `app.js` — bilingual content structure and language switching
- `assets/logo-ring.svg` — brand ring
