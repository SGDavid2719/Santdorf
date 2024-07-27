# Santdorf

## Introduction

Welcome to the Design System project. This project is built with React, Vite, Storybook, and TypeScript, focusing on accessibility and atomic design principles to achieve a modular and scalable component library.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Components](#components)
  - [Atomic Design](#atomic-design)
  - [Accessibility](#accessibility)
- [Testing](#testing)
- [Code quality assurance](#code-quality-assurance)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Requirements

- Node.js and npm

### Installation

To get started with the project, you need to clone the repository and install the dependencies.

```bash
git clone https://github.com/SGDavid2719/Santdorf.git
cd santdorf
npm install
```

### Running the Project

You can run the project locally using the following command:

```bash
npm run storybook
```

Storybook is used for developing and testing UI components in isolation.

## Project Structure

The project structure is organized to facilitate atomic design principles and ensure scalability.

```
santdorf/
├── src/
│   ├── stories/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── pages/
│   ├── styles/
│   │   ├── color.css
│   │   ├── sizing.css
│   │   ├── spacing.css
│   │   ├── typography.css
│   │   └── main.css
│   ├── utils/
│   ├── shared/
│   ├── __tests__/
│   └── ...
├── .husky/
├── .storybook/
├── public/
├── jest.config.cjs
├── babel.config.cjs
├── tsconfig.json
├── vite.config.ts
├── package.json
├── README.md
└── ...
```

## Components

### Atomic Design

I used atomic design principles to create reusable and scalable components. The components are organized into four distinct categories:

- Atoms: Basic building blocks (e.g., buttons, inputs).
- Molecules: Combinations of atoms (e.g., button with icon, banners).
- Organisms: Complex UI components composed of molecules (e.g., modals, tabs).
- Pages: Specific pages of the application, combining templates and data.

### Accessibility

All components are developed with web accessibility in mind, ensuring that they comply with WCAG standards. I used semantic HTML, ARIA attributes, and focus management to create an inclusive user experience.

## Testing

I used Jest and Testing Library for unit testing. Tests are located alongside the components in the project structure. To run tests, use:

```bash
npm test
```

## Code quality assurance

### Pre-commit Hook

This hook checks for TypeScript errors and format the code with Prettier.

### Pre-push Hook

This hook runs the testing.

## Contribute

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit: `git commit -m 'Add new functionality'`.
4. Push your changes to your fork: `git push origin feature/new-feature`.
5. Create a `Pull Request`.

## License

This project is licensed under the MIT License. For more details, see [LICENSE](https://github.com/SGDavid2719/Santdorf/blob/master/LICENSE)

## Contact

LinkedIn: [David Santomé Galván](https://www.linkedin.com/in/david-santom%C3%A9-galv%C3%A1n-8815021b8/)
