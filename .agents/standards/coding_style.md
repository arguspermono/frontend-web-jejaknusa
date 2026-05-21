# Coding Style Standards

## HTML
- Use semantic tags (`<header>`, `<main>`, `<nav>`, `<article>`, `<footer>`).
- Prefer kebab-case for custom class names or IDs (e.g., `id="main-content"`).
- Keep attributes on a single line unless there are more than 4, then wrap.

## CSS (Tailwind)
- Avoid writing custom CSS in `style.css` if a Tailwind utility exists.
- Order Tailwind classes logically: Layout > Spacing > Typography > Visuals > Interactions (e.g., `flex justify-between p-4 text-lg bg-blue-500 hover:bg-blue-600`).
- Extract highly repeated patterns using `@apply` in CSS ONLY if it clutters HTML excessively.

## JavaScript
- Use ES6+ syntax (`const`, `let`, arrow functions, template literals).
- camelCase for variables and functions.
- UPPER_SNAKE_CASE for constants.
- Modules: Use ES modules (`import`/`export`) to keep code split by concern.
