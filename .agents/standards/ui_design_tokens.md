# UI Design Tokens

Based on the Figma reference. Ensure these are mirrored in `tailwind.config.js`.

## Typography
- **Primary Font:** 'Inter', system-ui, sans-serif
- **Headings:**
  - h1: text-5xl font-bold
  - h2: text-4xl font-semibold
  - h3: text-3xl font-medium

## Colors
- **Brand Primary (Red):** `#E53935`
- **Brand Secondary (Dark Red):** `#B71C1C`
- **Text Primary:** Light Mode: `#111827` (Gray-900), Dark Mode: `#F3F4F6` (Gray-100)
- **Background:** Light Mode: `#FFFFFF`, Dark Mode: `#030712` (Gray-950)

## Spacing
- Rely on Tailwind's default 4px grid (e.g., `p-4` = 16px, `p-8` = 32px).

## Shadows & Borders
- Use subtle shadows `shadow-sm`, `shadow-md`.
- Border radius: mostly `rounded-lg` or `rounded-xl`.
