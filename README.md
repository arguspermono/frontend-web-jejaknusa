# JejakNusa

JejakNusa is a modern digital travel platform designed to help travelers discover and plan the best trips to amazing destinations across Indonesia and around the world. 

The platform features a highly interactive and responsive user interface, complete with a bilingual setup (English and Indonesian) and dark mode support. It is built using:
- **HTML5 & Vanilla JavaScript** for robust structure and dynamic content rendering.
- **Tailwind CSS** for sleek, modern, and fully responsive styling.
- **Vite** as a fast and modern build tool for frontend development.

## Key Features
- **Bilingual Support**: Seamlessly toggle between English and Indonesian.
- **Dark Mode**: Built-in support for dark and light themes.
- **Modular Components**: Uses JavaScript to dynamically load and inject HTML components (like navbars and footers) to keep the codebase clean.
- **Interactive Maps**: Embedded Google Maps for clear and easy transport routes to destinations.
- **Responsive Layouts**: Designed to look and function beautifully on both mobile devices and desktop screens.

## Development Setup

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed. Then, follow these steps:

1. **Install Dependencies:**
   Run the following command in the root directory to install the required Node modules.
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   Launch the local Vite server with Hot Module Replacement (HMR).
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the local URL provided in the terminal (usually `http://localhost:5173/`).

3. **Build for Production:**
   To create an optimized, minified production build, run:
   ```bash
   npm run build
   ```
   The compiled static assets will be generated in the `dist/` directory, ready to be deployed.

## Contributing
When developing, ensure you follow the existing code structure. HTML components are located in `src/components/`, JavaScript modules are in `src/js/modules/`, and the Tailwind configuration is defined in `tailwind.config.js`.

## Authors
Built with passion by the JejakNusa Team.
