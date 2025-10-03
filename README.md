# Travel Guide

A modern, responsive web application for discovering, reviewing, and exploring top destinations in Eswatini. This project is designed for travelers, students, and anyone interested in learning about the best places to visit, with interactive maps, reviews, tips, and more.

## Features

- **Home Page:** Hero section with cover image, navigation bar, and quick access to main features.
- **Destinations:** Grid of top Eswatini destinations with images, descriptions, and a live interactive map (powered by Leaflet/OpenStreetMap).
- **Tips:** Accordion-style travel tips for visitors.
- **Reviews:** Carousel of user reviews, with a form to submit your own. Reviews are stored in localStorage for persistence.
- **Contact:** Simple contact form for feedback or inquiries.
- **Dark/Light Mode:** Professional toggle switch for theme, with smooth animation and persistent preference.
- **Mobile Friendly:** Responsive design, mobile nav menu, and touch-friendly UI.

## System Requirements

- Any modern web browser (Chrome, Firefox, Edge, Safari, Opera, Internet Explorer 11+)
- No server required: works as a static site (HTML/CSS/JS)
- Internet connection required for map tiles (OpenStreetMap)

## Folder Structure

```
Travel-Guide/
├── index.html
├── destinations.html
├── tips.html
├── reviews.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       └── [all images for destinations, hero, etc.]
```

## How to Use

1. **Download or Clone the Repository:**
   ```
   git clone https://github.com/thomiyan/Travel-Guide.git
   ```
2. **Open the Project:**
   - Open the folder in VS Code or your preferred editor.
   - Or, simply double-click `index.html` to launch in your browser.
3. **Browse the Site:**
   - Use the navigation bar to explore destinations, tips, reviews, and contact.
   - On the Destinations page, interact with the map and click markers for info.
   - Submit reviews and see them appear instantly in the carousel.
   - Use the theme toggle (top right) to switch between dark and light mode.

## Configuration

- **Map:** Uses Leaflet.js and OpenStreetMap. No API key required. Destinations and coordinates are set in `assets/js/script.js`.
- **Images:** Place your own images in `assets/img/` and update HTML as needed.
- **Reviews:** Stored in browser localStorage. No backend required.
- **Theme:** User preference is saved in localStorage and persists across sessions.

## Customization

- **Add/Edit Destinations:**
  - Update the destinations array in `assets/js/script.js` with new places and coordinates.
  - Add images to `assets/img/` and update `destinations.html`.
- **Change Styles:**
  - Edit `assets/css/styles.css` for colors, layout, and responsive behavior.
- **Add Pages:**
  - Duplicate an HTML file and update navigation links as needed.

## Accessibility & Best Practices

- Fully responsive for mobile, tablet, and desktop.
- Keyboard accessible navigation and forms.
- Uses semantic HTML and ARIA labels where appropriate.
- All images have alt text for screen readers.

## Troubleshooting

- **Map not loading?**
  - Ensure you have an internet connection (for OpenStreetMap tiles).
  - Check browser console for errors.
- **Theme toggle not working?**
  - Make sure JavaScript is enabled in your browser.
- **Reviews not saving?**
  - Check if your browser allows localStorage.

## Credits

- [Leaflet.js](https://leafletjs.com/) for interactive maps
- [OpenStreetMap](https://www.openstreetmap.org/) for map tiles
- All images are either open source or property of the project owner

## License

This project is open source and free to use for educational and personal purposes.

---

For questions or contributions, please open an issue or pull request on GitHub.
