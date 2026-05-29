# Game App — Menu Page Overview

This repository contains a focused, responsive menu page for a browser-based application. The page provides a polished landing/menu experience where players can start the application, view options, and access assets. It's implemented with standard web technologies to keep it lightweight and easy to host as a static site.

Key files:

- [index.html](index.html) — main HTML entry
- [responsive-shell.css](responsive-shell.css) — page styles and responsive rules
- [responsive-shell.js](responsive-shell.js) — interaction logic and event handling
- [assets/](assets) — images, icons, and media used by the page
- Refer this doc to get detailed information about each application on Menu page: https://docs.google.com/document/d/1ncZtX3tkMQ1aOMg0c1oJROsAC8Ibzbcj6uQgmaDHemY/edit?usp=sharing

---

## Features

- Responsive layout that adapts to mobile and desktop viewports
- Lightweight: no build step required — plain HTML/CSS/JS
- Easily deployable as a static site

---

## Tech Stack

- Markup: HTML5
- Styling: CSS3 (see [responsive-shell.css](responsive-shell.css))
- Behavior: Vanilla JavaScript (see [responsive-shell.js](responsive-shell.js))
- Assets: images and icons in the `assets/` folder

---

## System Architecture / Workflow

This is a single-page static app. Workflow overview:

1. Browser requests `index.html`.
2. `index.html` imports `responsive-shell.css` for styles and `responsive-shell.js` for UI logic.
3. `responsive-shell.js` attaches event listeners (menu button clicks, responsive toggles) and manipulates the DOM to show/hide sections.
4. Assets (images, icons) are loaded from `assets/` as needed.

---

## Folder Structure

Explanation:
- `index.html` — single-page entry point. Contains the markup and initial structure of the menu.
- `responsive-shell.css` — style definitions, layout grid/flex rules, and responsive breakpoints.
- `responsive-shell.js` — DOM interaction logic, event handlers, and UI state management.
- `assets/` — imagery and static resources used by the UI (icons, background art, fonts if any).

---

## Run Locally

- Double-click [index.html](index.html) or open it via your browser's "Open File" dialog.

---

## Extending the Menu — Developer Guide

Use this guide when you want to add another application to the menu page. 

1) Add assets
- Put icons, logos, or screenshots under `assets/` (e.g., `assets/apps/example-logo.png`). Keep file names descriptive.

2) Add the HTML markup
- Add a new menu item in `index.html` where other menu items are defined. The project uses tiled anchors with positioned label paragraphs (see `index.html`). Use this pattern for external links or simple navigations:

```html
<!-- Tile anchor (external or relative link) -->
<a class="tile-link logo5" href="https://deployed_app_link/" aria-label="app_label">
  <img src="assets/logo.png" alt="app_logo_label">
</a>

<!-- Corresponding label paragraph (positioned by CSS) -->
<p class="label inspired">App_name_on_menu_pg</p>
```

If you prefer programmatic control instead of a plain anchor, attach an `id` or data attribute and handle clicks in `responsive-shell.js`.

3) Update or add CSS
- If the new menu item needs custom styling, add styles to `responsive-shell.css`, following existing naming conventions (`.menu-item`, `.menu-btn`, `.menu-title`). Keep responsive rules consistent.

---

## Deployment (Vercel)

This repository is static and is well-suited to be deployed on Vercel as a static site.

Steps to deploy:

1. Push the repository to GitHub 
2. Sign in to Vercel and click **Import Project** → **Import Git Repository** → select this repo.
3. Configure project settings:
   - Framework: `Other` / Static Site
   - Build Command: (leave empty)
   - Output Directory: `/` (root)
4. Click **Deploy**. Vercel will serve the static files directly.

---

## Future Improvements / Roadmap

- You can modify the UI and rearrange the application logos as more applications are added in the future.
- Add CI to automatically deploy previews on PRs (Vercel/GitHub Actions).

---

