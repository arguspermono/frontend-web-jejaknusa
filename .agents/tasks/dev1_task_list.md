# Developer 1: Implementation Task List & Workflow

This document details the specific tasks, responsibilities, and workflow for **Developer 1 (Core & UI Foundation)** to ensure a smooth, conflict-free development process.

## 1. Implementation Order

To unblock Developer 2 and establish the foundation, complete tasks in this exact order:

1. **Project Setup:** Initialize Vite, install Tailwind CSS, and scaffold the `src/` directory structure.
2. **Global Styling & Tokens:** Configure `tailwind.config.js` with typography, colors, and spacing from Figma.
3. **Reusable Components:** Build the Navbar, Footer, Hero Section, and standard Button styles.
4. **Dark/Light Mode:** Implement the `theme.js` logic and toggle button in the Navbar.
5. **Page Assembly (Home):** Construct the Home Page (`index.html`), integrating the Navbar, Hero, Footer, and placeholder sections for Developer 2's components.
6. **Page Assembly (About Us):** Construct the About Us Page (`about.html`).
7. **Responsive System:** Perform a global QA pass to ensure all layouts scale correctly across breakpoints.

---

## 2. Daily Task Breakdown (Example Sprint)

* **Day 1: Foundation & Setup**
  - Initialize project, configure Tailwind.
  - Set up `input.css` and global HTML shell.
  - Push the `feature/dev1-setup` branch so Dev 2 can pull the config.
* **Day 2: Navigation & Footer**
  - Build the responsive Navbar (including the mobile hamburger menu).
  - Build the Footer.
* **Day 3: Core UI & Theming**
  - Build the Hero Section and global UI elements (buttons).
  - Implement the Dark/Light mode toggle (`theme.js`).
* **Day 4: Home Page Assembly**
  - Assemble `index.html`.
  - Coordinate with Dev 2 to pull in the `DestinationCard` component for the "Featured Destinations" section.
* **Day 5: About Us & Final QA**
  - Build `about.html`.
  - Test the entire layout structure responsively.

---

## 3. Ownership & Conflict Prevention

### 📁 Folder Ownership (Primary Responsibility)
- `src/css/` (Global styles)
- `src/js/utils/` (Global utilities like `theme.js`, `navbar.js`)

### 📄 File Ownership
You are the owner of these files. If Dev 2 needs changes here, they should ask you to make them or request a PR review.
- `package.json` and `vite.config.js`
- `tailwind.config.js`
- `src/css/input.css`
- `index.html` (Home Page)
- `about.html` (About Us Page)
- `src/js/utils/theme.js`
- `src/js/components/navbar.js`

### 🚫 Files to NEVER Touch (Owned by Dev 2)
To prevent merge conflicts, **do not edit** these files unless explicitly coordinating with Dev 2:
- `destination.html`
- `article.html`
- `src/js/data/destinations.json`
- `src/js/components/search.js`
- `src/js/components/form-validation.js`

---

## 4. Dependencies & Parallelism

### What should be finished FIRST?
> [!IMPORTANT]  
> The **Tailwind Configuration (`tailwind.config.js`) and Project Setup** must be completed first. Developer 2 needs these design tokens to accurately style their components.

### What can be done in PARALLEL?
Once the Tailwind config is pushed to `develop`, you can work on the **Navbar, Footer, and Hero section** while Developer 2 works on the **Destination Cards and Article Cards** simultaneously.

### Integration Points with Developer 2
- **Home Page Integration:** You own `index.html`, but you need Developer 2's `DestinationCard` snippet to complete the "Featured Destinations" section. 
  - *Workflow:* Ask Dev 2 to push their Card component. Pull `develop`, then copy their HTML structure into your `index.html`.

---

## 5. Git Workflow Recommendations

### Branch Naming
Keep branches small and focused.
- `feature/dev1-setup`
- `feature/dev1-tailwind-config`
- `feature/dev1-navbar-footer`
- `feature/dev1-dark-mode`
- `feature/dev1-home-page`
- `feature/dev1-about-page`

### Commit Recommendations
Follow Conventional Commits.
- `build: initialize vite and tailwind`
- `style: configure tailwind design tokens from figma`
- `feat: add responsive navbar with hamburger menu`
- `feat: implement dark mode localstorage toggle`
- `feat: assemble home page layout`

---

## 6. Pre-Merge Checklist (Before merging to `develop`)

Before creating a Pull Request for your features, ensure:
- [ ] `npm run build` executes without errors.
- [ ] Tailwind tokens (colors/fonts) match Figma exactly.
- [ ] Navbar collapses to a hamburger menu on mobile (`< 768px`).
- [ ] Dark Mode toggle works and preference persists on page reload.
- [ ] You have pulled the latest `develop` branch and resolved any conflicts locally.
- [ ] No code belonging to Developer 2 was accidentally modified.
