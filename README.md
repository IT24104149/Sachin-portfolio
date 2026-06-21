# Data Science Portfolio

A modern, responsive portfolio website for **Jeyachandran Sachin** — Data Science Undergraduate.

## Tech Stack

- React + Vite
- Tailwind CSS v4
- Framer Motion
- React Icons

## Features

- Glassmorphism UI with blue/purple gradient theme
- Dark / light mode toggle
- Animated hero with typing effect
- Smooth scroll navigation
- Fully responsive (mobile, tablet, desktop)
- Framer Motion animations throughout

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Customization

- **Profile photo:** Replace `public/profile.jpg` with your LinkedIn-style photo
- **Resume:** Replace `public/resume.pdf` with your actual resume
- **Content:** Edit `src/data/portfolioData.js` to update text, projects, and links

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Background
│   ├── sections/     # Hero, About, Skills, Projects, etc.
│   └── ui/           # Reusable GlassCard, SectionHeading, ThemeToggle
├── context/          # Theme (dark/light mode)
├── data/             # Portfolio content
├── hooks/            # Custom hooks (typing animation)
├── App.jsx
└── main.jsx
```
