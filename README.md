# 🚀 Lit + TypeScript + Vite + Tailwind 4 Starter

A modern web component project using [Lit](https://lit.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/) and [Tailwind CSS v4](https://tailwindcss.com/).

## ✨ Features

- ⚡️ **Vite**: lightning-fast build and dev experience
- 🧩 **Lit**: standards-based Web Components with reactive updates
- 🧑‍💻 **TypeScript**: strongly typed components
- 🎨 **Tailwind CSS v4**: utility-first styling with next-gen support
- 🏷 **Custom Elements Manifest**: auto-generated `custom-elements.json` for documentation and tooling
- 📦 Library output in **ESM** and **UMD** formats
- ✅ Uses **Prettier** for code formatting
- 🚀 Powered by **pnpm** for efficient dependency management

---

## 📦 Installation

> This project uses [`pnpm`](https://pnpm.io/) as the package manager. If you don’t have it installed, run:

```bash
npm install -g pnpm
```

Then clone the repo and install dependencies:

```bash
git clone git@github.com:Artemis-ZckrDev/Artemis-frontend.git artemis-ui
cd artemis-ui
npm install
```

## 🧪 Development

Start a dev server with hot reload:

```bash
pnpm run dev
```

Visit `http://localhost:5173` in your browser.

## 🏗️ Build

Build the component library in both ESM and UMD formats:

```bash
pnpm run build
```

Preview the production build:

```bash
pnpm run preview
```

Generate the custom-elements.json file:

```bash
pnpm run build:cem
```

## 🧱 Project Structure

```bash
├── dist/
├── public/
│   ├── fonts/                                  # Local fonts
├── src/
│   ├── components/                             # Lit components
│   │   └── [component-name]
│   │        └── [component-name].component.ts
│   ├── models/                                 # Global models (interfaces, types, classes)
│   │   └── types.ts
│   ├── styles/
│   │   ├── injectables/                        # Injectable styles
│   │   └── tailwind.css                        # Tailwind entry and centralized CSS and Design System
│   ├── utilities/                              # Global utilities
├── index.html
├── custom-elements.json                        # Generated manifest for tooling
├── tsconfig.json                               # TypeScript config
├── vite.config.ts                              # Vite config
└── package.json

```

> 🧱 No single app entrypoint — this is a pure component library.

> All folders inside `src` have barrel files to organize exports.

## 🎨 Tailwind Setup

Tailwind 4 and the Design System are preconfigured and imported via `src/styles/tailwind.css`.

To use Tailwind inside the components it need to be injected like this:

```ts
import { getSharedTailwindStyles } from '@/styles/injectables/shared-tailwind';

export class MyComponent extends LitElement {
  static styles = [getSharedTailwindStyles() || css``];
}
```

## 📄 Custom Elements Manifest

We generate a `custom-elements.json` file for tools like Storybook, IDEs, and documentation generators.

To generate it:

```bash
pnpm run build:cem
```

## 📜 Scripts

| Script                  | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| `pnpm run dev`          | Start dev server                                             |
| `pnpm run build`        | Build production bundle                                      |
| `pnpm run build:cem`    | Generate custom-elements.json using custom-elements-manifest |
| `pnpm run preview`      | Preview production build                                     |
| `pnpm run format`       | Format all project files using Prettier                      |
| `pnpm run check-format` | Check formatting without writing                             |
| `pnpm run clean`        | Remove /dist folder. Used by build process                   |

## 🧰 Recommended VSCode Settings

Install the following extensions for the best experience:

- ✅ egordorichev.lit-lang – Lit syntax highlighting
- ✅ esbenp.prettier-vscode – auto-formatting
- ✅ dbaeumer.vscode-eslint – linting
- ✅ bradlc.vscode-tailwindcss – Tailwind class autocomplete

Enable `"editor.formatOnSave": true` in your `settings.json`.

## 📦 Publishing

To package and publish your component library:

```bash
pnpm run build
pnpm publish
```

Then use it in another app:

```bash
npm install artemis-ui
```

```ts
import { ArtMyComponent } from 'artemis-ui';
```

```html
<art-my-component></art-my-component>
```
