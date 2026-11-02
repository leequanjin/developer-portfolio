# Developer Portfolio

A modern, dark-mode developer portfolio built with vanilla HTML, CSS, and JavaScript. Designed for software engineering job applications with recruiter-friendly information architecture and polished project presentation.

## Features

- Dark glassmorphism UI with ambient glow and soft shadows
- Sections: Hero, About, Projects, Experience, Skills, Resume, Contact
- Subtle scroll reveals with full `prefers-reduced-motion` support
- Fully responsive with accessible navigation and keyboard focus states
- Single content file for easy personalization — no build step required

## Getting Started

Open `index.html` directly in a browser, or run a local server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) (or the port shown by `serve`).

## Customize Your Portfolio

### 1. Update content

Edit [`js/portfolio-data.js`](js/portfolio-data.js) with your name, bio, projects, experience, skills, and links.

### 2. Replace assets

- Add project screenshots to [`assets/projects/`](assets/projects/) and update image paths in `portfolio-data.js`
- Replace [`assets/resume.pdf`](assets/resume.pdf) with your real resume
- To use a profile photo later, replace the initials avatar in the hero section of `render.js` with an `<img>` tag

### 3. Update metadata

Edit the `<title>` and `<meta name="description">` in [`index.html`](index.html), or let `render.js` set the title dynamically from your data.

## Deploy

This is a static site — deploy the project root to any static host:

- **GitHub Pages** — push to `gh-pages` branch or enable Pages on `main`
- **Netlify** — drag and drop the folder, or connect your repo
- **Vercel** — import repo with no framework preset (static output)

No build command needed.

## Project Structure

```
index.html              # Page shell and stylesheet links
css/                    # Variables, components, sections, animations
js/
  portfolio-data.js     # All portfolio content (edit this)
  render.js             # Builds sections from data
  nav.js                # Navigation, scroll spy, mobile menu
  animations.js         # Intersection Observer scroll reveals
assets/
  resume.pdf            # Your resume
  projects/             # Project screenshots
```

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, grid, glassmorphism)
- Vanilla JavaScript (ES6+)

## License

MIT
