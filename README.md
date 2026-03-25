# Portfolio v1

Personal portfolio built with Angular and Tailwind CSS.

The site showcases software projects, supports English and French, and includes dedicated pages for each featured project.

## Tech stack

- Angular 19 (standalone components)
- TypeScript
- Tailwind CSS
- SCSS

## Features

- Bilingual interface (EN/FR) powered by JSON translation files
- Responsive landing page with animated sections
- Dedicated project pages:
	- Portfolio AI
	- RPG Evolution (distributed/mobile)
	- RPG (web full stack)
	- Robot (embedded systems)
- Reusable navigation and footer components

## Getting started

### Prerequisites

- Node.js 18+ (or a version compatible with Angular 19)
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

Then open:

```text
http://localhost:4200/
```

## Scripts

- `npm start`: start development server
- `npm test`: run unit tests
- `npm run build`: create production build

## Project structure

```text
src/
	app/
		components/      # Shared UI blocks (navbar, footer)
		pages/           # Route pages (home, project pages)
		shared/          # Shared services, pipe, styles
public/
	i18n/              # Translation files (en.json, fr.json)
```

## Localization

Translations are managed in:

- `public/i18n/en.json`
- `public/i18n/fr.json`

Keys are consumed through the custom translation pipe in templates.

## Build

```bash
npm run build
```

Production artifacts are emitted to the Angular output directory configured in the workspace.
