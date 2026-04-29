# Sandeep Kumar Parangi Portfolio

A high-end React portfolio for a Senior Java Full Stack Developer, featuring a dark futuristic theme, animated gradients, glassmorphism cards, smooth Framer Motion transitions, sticky navigation, scroll progress, a theme toggle, project cards, timeline experience, and a contact section.

## Preview

The local preview server is running at:

```text
http://127.0.0.1:4174
```

## Files

- `index.html` loads the portfolio with CDN-backed React, Tailwind CSS, Framer Motion, and Lucide icons for immediate local preview.
- `src/main.jsx` contains the component-based React application.
- `styles.css` contains custom theme, glassmorphism, animation, and form styles.
- `public/resume/sandeep-kumar-parangi-resume.pdf` powers the Download Resume button.

## Free GitHub Pages Deployment

1. Create a public GitHub repository named `sandeep-portfolio`.
2. Upload all files from this folder.
3. In the repository, open `Settings > Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select branch `main` and folder `/root`.
6. Save. Your site will publish at:

```text
https://YOUR-GITHUB-USERNAME.github.io/sandeep-portfolio/
```
- `package.json`, `tailwind.config.js`, `postcss.config.js`, and `vite.config.js` are included for a normal Vite/Tailwind setup when a package manager is available.

## Production Build

When `npm` is available, the included manifest can be used as the starting point for a bundled Vite deployment:

```bash
npm install
npm run build
```
