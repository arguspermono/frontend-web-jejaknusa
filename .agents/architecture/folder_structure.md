# Architecture: Folder Structure

```text
/
├── .agents/                # AI Assistant context and standards
├── src/
│   ├── assets/             # Static assets like images and SVG icons
│   ├── css/                # Global CSS / Tailwind directives (input.css)
│   ├── js/
│   │   ├── components/     # UI logic (e.g., navbar.js)
│   │   ├── utils/          # Helpers (e.g., theme-toggle.js)
│   │   └── data/           # Mock JSON data
│   ├── pages/              # Specific page HTML files
│   └── index.html          # Entry point (Home)
├── public/                 # Static files served directly (favicon)
├── package.json
└── tailwind.config.js
```
