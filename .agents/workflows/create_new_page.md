# Create New Page Workflow

1. Create a new HTML file in the `src/pages/` directory (or root `src/` depending on builder).
2. Copy the standard boilerplate including the Navbar and Footer.
3. Link the main `input.css` (or built CSS) and any specific JS modules.
4. Add the page route to `package.json` build scripts if using a bundler like Vite for multi-page apps.
5. Update `navbar.js` to handle active states for the new route.
