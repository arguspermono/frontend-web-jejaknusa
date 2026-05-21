# UI Design Tokens

Based on the Figma reference. Ensure these are mirrored in `tailwind.config.js`.

## Typography
- **Primary Font:** (Extract from Figma, e.g., 'Inter' or 'Poppins')
- **Headings:**
  - h1: text-5xl font-bold
  - h2: text-4xl font-semibold
  - h3: text-3xl font-medium

## Colors
- **Brand Primary:** `#...` (Add specific hex)
- **Brand Secondary:** `#...` (Add specific hex)
- **Text Primary:** (Light Mode: Gray-900, Dark Mode: Gray-100)
- **Background:** (Light Mode: White/Gray-50, Dark Mode: Gray-900)

## Spacing
- Rely on Tailwind's default 4px grid. (e.g., `p-4` = 16px, `p-8` = 32px).

## Shadows & Borders
- Use subtle shadows `shadow-sm`, `shadow-md`.
- Border radius: mostly `rounded-lg` or `rounded-xl`.
