# Team Work Division & Collaboration Strategy

This document outlines the professional work division for the 2-person frontend team building the JejakNusa website. The goal is to maximize parallel development, prevent merge conflicts, and ensure clear ownership.

## 1. Role & Ownership Division

To prevent merge conflicts, we divide ownership by **Global Layouts vs. Specific Pages/Features**.

### Developer 1: "Core & UI Foundation"
**Focus:** Project setup, global layouts, shared styling, and core static pages.
- **Page Ownership:** Home Page, About Us Page
- **Component Ownership:** Navbar, Footer, Hero Section, Buttons, Typography styles.
- **Feature Ownership:** Dark/Light Mode toggle, initial Tailwind/Vite configuration.
- **Integration Responsibility:** Managing the `index.html` structure and global `input.css` file.

### Developer 2: "Data & Interactions"
**Focus:** Dynamic features, search functionality, and feed layouts.
- **Page Ownership:** Destination Page, Article/Experience Page
- **Component Ownership:** Destination Card, Article Card, Search/Filter Form, "Share Experience" Form.
- **Feature Ownership:** Static JSON loading (`destinations.json`), Client-side search filtering, Google Maps embedding.
- **Integration Responsibility:** Managing the `js/data/` folder and specific Javascript logic modules.

---

## 2. Milestone-Based Task Breakdown

### Milestone 1: Foundation (Parallel - Low Conflict Risk)
> [!IMPORTANT]
> Developer 1 must finish the basic project setup before Developer 2 can start testing their JS modules locally. However, Developer 2 can build HTML/CSS components in isolation.

**Developer 1 Starts With:**
1. Setup Vite & Tailwind project structure.
2. Configure `tailwind.config.js` with Design Tokens.
3. Build the responsive **Navbar** and **Footer** (these will be imported/copied to all pages).

**Developer 2 Starts With:**
1. Create the `destinations.json` mock data structure.
2. Build the **Destination Card** component (HTML/Tailwind snippet).
3. Build the **Article Card** component snippet.

### Milestone 2: Page Assembly (Parallel - Zero Conflict Risk)
**Developer 1:**
1. Assemble the **Home Page** using the Hero section and Destination Card snippets (from Dev 2).
2. Assemble the **About Us Page**.
3. Implement the Dark/Light mode toggle in `navbar.js`.

**Developer 2:**
1. Assemble the **Destination Page** layout.
2. Assemble the **Article/Experience Page** layout.
3. Embed Google Maps on the Contact/About section (coordinate with Dev 1 to place the container).

### Milestone 3: Interactivity & Polish
**Developer 1:**
1. Implement responsive logic (Hamburger menu toggle).
2. Final QA of Global spacing and typography.

**Developer 2:**
1. Write JS for the Destination Search/Filter logic.
2. Implement mock validation for the "Share Experience" form.

---

## 3. Task Dependencies & Parallelism

| Task | Dependent On | Assigned To |
| :--- | :--- | :--- |
| Tailwind Config | None (Do First) | Dev 1 |
| Navbar / Footer | Tailwind Config | Dev 1 |
| Card Components | Tailwind Config | Dev 2 |
| Destination JSON | None (Can be done anytime) | Dev 2 |
| Search JS Logic | Destination JSON & Card Components | Dev 2 |
| Home Page Assembly | Navbar/Footer (Dev 1) & Cards (Dev 2) | Dev 1 |
| Dark Mode | Navbar setup | Dev 1 |

---

## 4. Conflict Prevention Strategy

Merge conflicts happen when two developers edit the same file. To prevent this:
1. **Strict File Separation:** Dev 1 works on `home.html` and `about.html`. Dev 2 works on `destination.html` and `article.html`. 
2. **Component Isolation:** Store component HTML in separate scratch files or use JS template literals so you aren't both editing the same global HTML file simultaneously.
3. **CSS Utility First:** Because you are using Tailwind, you won't have merge conflicts in a global `style.css` file. Most styling happens directly inside your respective HTML files.
4. **JS Modularization:** Dev 1 owns `navbar.js` and `theme.js`. Dev 2 owns `search.js` and `form-validation.js`. **Do not put all JS into one `main.js` file.**

---

## 5. Git Collaboration & Integration Workflow

### Branch Strategy
- `main`: Stable, production-ready code.
- `develop`: The active integration branch.
- `feature/name-of-feature`: Branch created by developers (e.g., `feature/navbar`, `feature/destination-search`).

### Daily Workflow
1. **Morning Sync:** Discuss who is touching which global files (like `index.html` or `tailwind.config.js`).
2. **Pull Latest:** `git checkout develop` -> `git pull origin develop`.
3. **Branch Out:** `git checkout -b feature/your-task-name`.
4. **Develop & Commit:** Write code, commit frequently (`git commit -m "feat: add destination card"`).

### Merge Workflow (Integration Schedule)
Integration should happen **daily** or **at the end of a feature completion** to avoid long-lived stale branches.
1. When a feature is done, push the branch: `git push origin feature/your-task-name`.
2. Open a Pull Request (PR) on GitHub from your feature branch to `develop`.
3. **The OTHER developer must review and approve the PR.** This ensures both students understand the whole codebase.
4. Once merged, the other developer immediately pulls `develop` to get the updates.

> [!WARNING]
> If both developers absolutely *must* edit the same file (e.g., registering a new route in a bundler), communicate explicitly on Discord/Slack: *"I am modifying package.json right now, hold off on your commits until I merge."*
