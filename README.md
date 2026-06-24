# RADCON Technologies — Corporate Website

The official website for **RADCON Technologies**, showcasing the company's defense and technology solutions, including RF/microwave systems, embedded solutions, power systems, and life-saving equipment for defense and commercial applications.

Live site: [radcontechs.com](https://radcontechs.com)

---

## Overview

This is a single-page application built with **React 19** and **React Router 7**, bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It presents the company's expertise, product catalog, industries served, and corporate information through a fully responsive, animated, and SEO-optimized interface.

## Tech Stack

- **React 19** — UI library
- **React Router DOM 7** — client-side routing
- **Create React App (react-scripts 5)** — build tooling and dev server
- **Plain CSS** — component-scoped stylesheets with shared CSS variables
- **prop-types** — runtime prop validation
- **web-vitals** — performance metrics
- **Testing Library / Jest** — testing

## Project Structure

```
radcon-website/
├── public/                 # Static assets, index.html, manifest, robots.txt
└── src/
    ├── App.js              # App shell, routing, and per-route body classes
    ├── index.js            # React entry point
    ├── components/         # Reusable UI (Navigation, Footer, Hero, sections/…)
    ├── pages/              # Top-level routed pages
    ├── templates/          # Reusable page templates (Product, Service)
    ├── data/               # Static content data (products, expertise)
    ├── styles/             # Shared variables and global styles
    └── utils/              # Animation and helper utilities
```

## Routes

| Path                                | Page                              |
| ----------------------------------- | --------------------------------- |
| `/`                                 | Homepage                          |
| `/about-us`                         | About Us                          |
| `/contact`                          | Contact Us                        |
| `/media-centre`                     | Media Centre                      |
| `/design-house`                     | Design House                      |
| `/expertise`                        | Expertise landing                 |
| `/expertise/:category/:service`     | Individual expertise / service    |
| `/products/:slug`                   | Individual product                |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (ships with Node.js)

### Installation

```bash
git clone https://github.com/Hadeeed147/radcon-website.git
cd radcon-website
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads on changes and lint errors appear in the console.

## Available Scripts

| Command         | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| `npm start`     | Run the app in development mode.                                 |
| `npm run build` | Build an optimized production bundle to the `build/` folder.     |
| `npm test`      | Run the test runner in interactive watch mode.                   |
| `npm run eject` | Eject from Create React App (one-way operation — use with care). |

## Production Build

```bash
npm run build
```

This produces a minified, hash-named bundle in the `build/` directory, ready to be served by any static host.

> **Note:** This site is live and in production. Coordinate before deploying changes.

## License

Proprietary — © RADCON Technologies. All rights reserved.
