# Creative Developer & Designer Portfolio

A clean, minimalist portfolio website designed to showcase web applications and design work. This project bridges the gap between technical logic and aesthetic layout, focusing on accessible semantic structure, modular code, and efficient asset delivery.

## Live Demo:

## 📊 Key Details & Architecture

- **Aesthetic & Logic:** Built with fluid layouts (`clamp()`) and custom architectural shadows, removing unnecessary decoration or visual noise.
- **Web Performance:** Optimized to load fast on mobile devices through careful asset delivery, explicit element aspect ratios, and local font bundling.
- **Clean Architecture:** Written using vanilla JavaScript modules and packaged with Webpack to keep dependencies lightweight and structured.
  Modular JS Rendering: A single-page architecture where raw project data is isolated in a standalone module (projectsData.js) and rendered securely using standard dynamic DOM methods (projects.js).

- **Self-Hosted Assets:** Webpack bundles modern @fontsource/inter web fonts locally to ensure consistent, tracking-free loading without third-party network requests.

- **Responsive Images:** Serve multi-density .webp files dynamically (1x and 2x retina structures) utilizing native HTML srcset properties to balance loading performance with screen clarity.

- **Fluid Typography & Layouts:** Leverages CSS custom variables, Flexbox, CSS Grid, and responsive math (clamp()) to ensure the layout remains robust across viewport sizes without relying on heavy viewport breakpoint jumps.

- **Accessibility First:** Uses semantic HTML5 landmarks, explicit keyboard focus styling, and standard screen reader helpers (aria-label / aria-hidden) for clean accessibility.

---

## 🛠️ Tech Stack & Tools

- **Frontend:** HTML5 (Semantic markup), CSS3 (Custom properties, CSS Grid, Flexbox), Vanilla JavaScript (ES6+ Modules)
- **Tooling:** npm, Webpack (Asset management, code bundling)
- **Typography:** Inter (Self-hosted via `@font-source` for minimized loading chains)
- **Asset Prep:** p5.js (generative portraits), WebP conversion

---

## 📁 Repository Structure

```text
├── src/
│   ├── assets/             # Optimized project previews and SVGs
│   ├── projects.js         # Dynamic portfolio card render loop
│   ├── projectsData.js     # Data array housing project specs and image paths
│   ├── styles.css          # Core design system and responsive media queries
│   ├── template.html       # Semantic structural markup
│   └── index.js            # Main JavaScript orchestration entry point
├── dist/                   # Production-compiled assets (Webpack output)
├── package.json            # Node configuration and build scripts
└── webpack.config.js       # Asset loaders and compilation configurations
```

## 🚀 Local Installation

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed locally.

### Step-by-Step Setup

1.  **Clone the repository:**

    ```bash
    git clone git@github.com:cmatsagka/portfolio.git

    cd portfolio
    ```

2.  **Install project dependencies:**

    ```bash
    npm install
    ```

3.  **Launch the development server:**

    ```bash
    npm start
    ```

4.  **Build for production:**

    ```bash
    npm build
    ```

## ✉️ Connect

Whether you want to discuss creative coding, frontend development workflows, or potential collaborations at the intersection of art and tech, feel free to connect via LinkedIn or view my source code on GitHub.
