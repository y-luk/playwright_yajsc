# Playwright Test Automation

Automated end-to-end tests for [Practice Software Testing](https://practicesoftwaretesting.com) written in TypeScript using Playwright.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npm test
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Run tests with UI mode:

```bash
npx playwright test --ui
```

## Test Reports

After running tests, open the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```
playwright_yajsc/
├── tests/              # Test files
├── playwright.config.ts # Playwright configuration
├── package.json
└── .gitignore
```