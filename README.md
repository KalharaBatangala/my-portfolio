# Kalhara Batangala's Portfolio

A modern, responsive portfolio website showcasing skills and projects as an aspiring engineer. Built with React, Tailwind CSS, and Vite, this project demonstrates a commitment to creating high-quality, modular, and resilient systems with a professional WSO2-inspired aesthetic (black and orange color scheme).

## Table of Contents

- [Overview](#overview)
- [Migration to Next.js](#migration-to-nextjs)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Project Structure](#project-structure)
- [Development Journey and Challenges](#development-journey-and-challenges)
- [Future Improvements](#future-improvements)
- [Screenshots](#screenshots)
- [Contact](#contact)
- [License](#license)

## Overview

This portfolio website highlights professional skills, projects, and aspirations through a sleek, user-friendly interface. Optimized for responsiveness and accessibility, it leverages React for dynamic components, Tailwind CSS for utility-first styling, and Vite for fast development. The WSO2-inspired black (`#231F20`) and orange (`#FF7300`) color scheme, paired with the Poppins font, ensures a professional aesthetic.

## Migration to Next.js

This project was initially developed as a personal portfolio using Vite, React, and Tailwind CSS. To leverage Next.js’s advanced features, including server-side rendering, static site generation, and the App Router for dynamic routing, it was migrated to a Next.js-based project, available at [KalharaBatangala/portfolio-next](https://github.com/KalharaBatangala/portfolio-next). This repository is maintained for testing purposes, while the Next.js project represents the active, production-ready portfolio.

## Features

- **Multi-Page Routing**: Separate pages for Home, Projects, About, and Contact, using React Router for seamless navigation and SEO-friendly URLs.
- **Elegant Transitions**: Smooth fade and slide animations between pages via Framer Motion, enhancing user experience.
- **Dark Mode**: Toggleable light/dark themes with persistent state via `localStorage`, styled with Tailwind CSS.
- **Responsive Design**: Mobile-first layout with a flexible grid for project cards and adaptive UI components.
- **Modular Structure**: Organized codebase with `src/pages`, `src/components`, and `src/context` for scalability and maintainability.
- **WSO2 Aesthetic**: Consistent black (`#231F20`) and orange (`#FF7300`) color scheme with Poppins font for a professional look.

## Technologies Used

- **React**: Component-based UI for dynamic, reusable components.
- **Tailwind CSS**: Utility-first styling for rapid development and modular design.
- **Vite**: Fast build tool for modern JavaScript development.
- **React Router**: Client-side routing for multi-page navigation.
- **Framer Motion**: Animation library for smooth page transitions and interactive effects.
- **Heroicons & React Icons**: Icon sets for navigation and social media links.
- **ESLint**: Code quality tool enforcing modern ES Modules over CommonJS.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/KalharaBatangala/my-portfolio.git
   cd my-portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173` (or the port specified by Vite).

**Prerequisites**: Node.js (v16 or higher) and npm.

## Project Structure

```
src/
├── assets/              # Images (profile-pic.jpg, Portfolio-banner.png)
├── components/          # Reusable UI components
│   ├── Navbar.jsx       # Navigation bar with dark mode toggle
│   ├── Footer.jsx       # Footer with social media links
│   ├── EnthusiasmCard.jsx # Card for enthusiasm section
│   ├── AboutCard.jsx    # Card for about section
├── context/             # React context for state management
│   ├── ThemeContext.jsx # Theme toggle logic
├── pages/               # Page-level components
│   ├── Home.jsx         # Home page with profile and banner
│   ├── Projects.jsx     # Projects page with grid of project cards
│   ├── About.jsx        # About page (placeholder)
│   ├── Contact.jsx      # Contact page (placeholder)
├── App.jsx              # Main app with routing and animations
├── index.css            # Global styles with Tailwind imports
├── tailwind.config.js   # Custom Tailwind colors and fonts
```

## Development Journey and Challenges

This project was developed incrementally, overcoming several challenges to ensure a robust portfolio:

### Challenge 1: Framer Motion Not Animating with React Router `Link`
- **Issue**: Page transitions (fade and slide) worked for `<a href="/">` in `Footer.jsx` but not for `Link` components in `Navbar.jsx`, causing instant page switches.
- **Cause**: Framer Motion’s `AnimatePresence` required a unique `key` prop to detect route changes in `App.jsx`.
- **Solution**: Added `key` props (e.g., `key="home"`) to `motion.div` in `Routes`, ensuring `exit` and `enter` animations triggered.
- **Impact**: Achieved smooth transitions for all internal navigation, enhancing user experience.

### Challenge 2: Full Page Refresh for Footer Links
- **Issue**: Footer’s `<a href="/">` for the `KB` logo caused full page reloads, bypassing React Router’s client-side routing.
- **Cause**: `<a>` tags triggered browser navigation instead of SPA routing.
- **Solution**: Replaced `<a>` with `Link` components in `Footer.jsx` for internal routes (`/`, `/projects`, `/about`, `/contact`), aligning with `Navbar.jsx`.
- **Impact**: Unified client-side routing, ensuring consistent animations and faster navigation.

### Challenge 3: Multi-Page Routing vs. Single-Page Scrolling
- **Decision**: Chose multi-page routing with React Router over single-page scrolling with anchor links (`#projects`).
- **Reason**: Multi-page routing offers better SEO, scalability for content growth, and aligns with user expectations for tab-based navigation.
- **Trade-Off**: Lost smooth scrolling but gained modularity and shareable URLs. Added Framer Motion to restore dynamic transitions.
- **Impact**: Improved discoverability and future-proofed the portfolio for additional pages.

### Challenge 4: ESLint and ES Modules
- **Issue**: ESLint flagged issues with CommonJS syntax, as the project uses modern ES Modules.
- **Solution**: Configured ESLint to enforce ES Modules (`import/export`) and suppressed specific warnings (e.g., `react-refresh/only-export-components` in `ThemeContext.jsx`).
- **Impact**: Ensured code quality and consistency with modern JavaScript standards, supporting long-term maintainability.

## Future Improvements

- **Dynamic Project Data**: Integrate GitHub API to fetch real project data for `Projects.jsx`.
- **Enhanced About/Contact Pages**: Add detailed content, such as a bio in `About.jsx` and a contact form in `Contact.jsx`.
- **SEO Optimization**: Use `react-helmet-async` for dynamic meta tags per route.
- **Additional Animations**: Explore more Framer Motion effects (e.g., scale transitions) for components like project cards.


## Contact

Connect with me:
- GitHub: [KalharaBatangala](https://github.com/KalharaBatangala)
- LinkedIn: [Kalhara Batangala](https://www.linkedin.com/in/kalhara-batangala-2bb635213/)
- Twitter: [@KalharaBat27340](https://x.com/KalharaBat27340)

