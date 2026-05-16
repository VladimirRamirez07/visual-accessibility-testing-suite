# Visual Accessibility Testing Suite

Automated visual regression & WCAG 2.1/2.2 accessibility testing suite using Playwright and Axe-Core.

![CI](https://github.com/VladimirRamirez07/visual-accessibility-testing-suite/actions/workflows/accessibility-tests.yml/badge.svg)
![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=flat&logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Axe Core](https://img.shields.io/badge/Axe--Core-663399?style=flat&logo=axe&logoColor=white)
![WCAG 2.1](https://img.shields.io/badge/WCAG-2.1%2F2.2-0057A8?style=flat&logoColor=white)
![Resemble.js](https://img.shields.io/badge/Resemble.js-FF6B6B?style=flat&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat&logo=opensourceinitiative&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🛠️ Tech Stack
- **Playwright** — Browser automation
- **Axe-Core** — WCAG 2.1/2.2 accessibility analysis
- **Resemble.js** — Visual comparison
- **GitHub Actions** — CI/CD pipeline

## 📁 Project Structure
```
visual-accessibility-testing-suite/
├── .github/
│   └── workflows/
│       └── accessibility-tests.yml  # CI/CD pipeline
├── tests/
│   ├── accessibility/
│   │   └── wcag.test.js             # WCAG 2.1/2.2 tests with Axe-Core
│   └── visual/
│       └── visual.test.js           # Visual regression tests
├── snapshots/
│   ├── baseline/                    # Reference screenshots
│   └── diff/                        # Current screenshots for comparison
├── reports/                         # Generated accessibility reports (JSON)
├── playwright.config.js             # Playwright configuration
└── package.json
```
## 🚀 Getting Started

```bash
npm install
npx playwright install
```

## ▶️ Run Tests

```bash
# Accessibility tests
npx playwright test tests/accessibility/wcag.test.js

# Visual regression tests
npx playwright test tests/visual/visual.test.js

# All tests
npx playwright test
```

## 📊 What it detects
- WCAG 2.1/2.2 violations (color contrast, missing alt text, aria labels)
- Visual UI regressions comparing screenshots
- Automated reports on every push via GitHub Actions

## 🤖 Optional: Applitools AI Visual Testing

This suite supports integration with [Applitools Eyes](https://applitools.com) for AI-powered visual comparison.

To enable it:

```bash
npm install --save-dev @applitools/eyes-playwright
export APPLITOOLS_API_KEY=your_api_key
npx playwright test tests/visual/applitools.test.js
```

> Applitools uses AI trained on 4 billion screens to detect visual regressions with human-like judgment.

## 🔍 Real findings on w3schools.com
- 🔴 [SERIOUS] color-contrast — insufficient contrast ratio (3.01, minimum 4.5)
- 🔴 [CRITICAL] image-alt — images missing alternative text