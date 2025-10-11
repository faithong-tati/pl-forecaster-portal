<div align="center">
  <a href="https://react.dev/">
    <picture>
      <source media="(prefers-color-scheme: dark)"
        srcset="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg">
      <img alt="React logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="128">
    </picture>
  </a>
  <h1>React</h1>

  <a href="https://nodejs.org/">
    <img alt="Node.js" src="https://img.shields.io/badge/node-20.19.4-339933?style=for-the-badge&logo=node.js&labelColor=1a1a1a">
  </a>
  <a href="https://react.dev/">
    <img alt="React" src="https://img.shields.io/badge/react-19.1.1-61DAFB?style=for-the-badge&logo=react&labelColor=1a1a1a">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img alt="TypeScript" src="https://img.shields.io/badge/typescript-5.9.3-3178C6?style=for-the-badge&logo=typescript&labelColor=1a1a1a">
  </a>
  <a href="https://vitejs.dev/">
    <img alt="Vite" src="https://img.shields.io/badge/vite-7.1.7-7C3AED?style=for-the-badge&logo=vite&labelColor=1a1a1a">
  </a>  
</div>

## 📦 Description

This project is the **Frontend of the TAO BIN P/L Forecast Portal**, built with **React** and a modular code structure. It integrates with a **local JSON Server** as the data source, supports **multi-language (th/en)**, and uses **TanStack React Query** for efficient data fetching and caching.

## 📚 Important Packages

This project uses several key libraries to build a scalable and maintainable frontend:

| Package                                                        | Version      | Description                                                        |
| -------------------------------------------------------------- | ------------ | ------------------------------------------------------------------ |
| 🧠 [TanStack React Query](https://tanstack.com/query/latest)   | 5.90.2       | Handles async data, caching, and server state like a pro.          |
| 🧭 [TanStack React Router](https://tanstack.com/router/latest) | 5.90.2       | Type-safe routing for React that’s flexible and modern.            |
| 📊 [TanStack React Table](https://tanstack.com/table/latest)   | 5.90.2       | Headless table utilities to build powerful data grids.             |
| 📈 [ECharts](https://echarts.apache.org/)                      | 6.0.0        | For slick and interactive dashboard visualizations.                |
| 🧪 [JSON Server](https://github.com/typicode/json-server)      | 1.0.0-beta.3 | A quick and easy local mock database & REST API.                   |
| 📝 [React Hook Form](https://react-hook-form.com/)             | 7.64.0       | Super lightweight form state management.                           |
| 🧰 [Zod](https://zod.dev/)                                     | 4.1.12       | Type-safe schema validation that pairs nicely with forms and APIs. |
| 🌐 [i18next](https://www.i18next.com/)                         | 25.5.3       | Simple and reliable i18n support for th/en.                        |
| 🍪 [js-cookie](https://github.com/js-cookie/js-cookie)         | 3.0.5        | Handy utilities for working with cookies.                          |

## ⚙️ Requirements

Make sure your Node.js version matches:

```json
"engines": {
  "node": "20.19.4"
}
```

## 🚀 Quick Start

```bash
# install dependencies
npm i

# start the local JSON Server (acts as the API)
npm run json-server

# start the dev server
npm run dev

# FYI: build and run for production
npm run build
npm run start
```

## 🧪 Environment Setup

Create a `.env` file in the project root and add required environment variables:

```bash
# Local JSON Server
VITE_API_ENDPOINT=http://localhost:3001

# Google OAuth Client ID
VITE_GOOGLE_CLIENT_ID=
```

> ⚠️ You can contact me for the `VITE_GOOGLE_CLIENT_ID` or create your own (see [Contribution Guidelines](./CONTRIBUTION.md))
> 🔄 Please make sure to restart your terminal (or dev server) after changing this file

## 🌍 i18n

This project uses [i18next](https://www.i18next.com/) for multi-language support (th/en).

- Translation files are stored in:
  - `src/messages/th/*.json`
  - `src/messages/en/*.json`

- Example usage:

```tsx
import { Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

function Page() {
  const { t } = useTranslation('core');

  return <Typography>{t('title')}</Typography>;
}

export default memo(Page);
```

## 🧹 Lint & Format

- ESLint v9 + Prettier v3
- Husky pre-commit hook included
- Husky pre-push hook

```text
# lint check
npm run lint

# lint + prettier fix
npm run lint:fix

# pre-push (configured in .husky/pre-push)
npm run lint:fix
```

## 📂 Folder Structure

```bash
src/
├── core/                       # shared layer
│   ├── api/
│   ├── components/
│   ├── constants/
│   ├── containers/
│   ├── contexts/
│   ├── hooks/
│   ├── lib/
│   ├── providers/
│   ├── styles/
│   ├── types/
│   └── utils/
├── i18n/                       # react-i18next config
├── messages/                   # react-i18next JSON
├── modules/                    # feature-based modules
│   └── machines/
│       ├── api/
│       ├── components/
│       ├── constants/
│       ├── containers/
│       ├── contexts/
│       ├── hooks/
│       ├── lib/
│       ├── providers/
│       ├── styles/
│       ├── types/
│       └── utils/
└── routes/                     # TanStack React Router
```

## 📝 Naming Convention

| Items                          | Cases                | Possible Values                    |
| ------------------------------ | -------------------- | ---------------------------------- |
| Components                     | PascalCase           | `MachineCard.tsx`                  |
| Hooks                          | use + PascalCase     | `useGetMachine.ts`                 |
| Folders                        | kebab-case           | `machine-card`, `use-get-machine/` |
| Types/interfaces/classes/enums | PascalCase           | `GetMachineResponse`               |
| Env vars                       | SCREAMING_SNAKE_CASE | `VITE_API_ENDPOINT`                |
| Event handlers                 | on + PascalCase      | `onClickButton`, `onDelete`        |

## ☁️ Deployment

We deploy this project on [Vercel](https://vercel.com/).

### 1) Merge to `develop` to deploy  
Only **merges or commits pushed to the `develop` branch** will trigger a **production deployment**.

👉 https://pl-forecaster-portal.vercel.app

### 2) Preview Deploys for feature branches  
Pushing to any other branch (e.g. `feat/...`) will trigger a **Preview Deployment**, accessible at a temporary URL like:

👉 `https://pl-forecaster-portal-git-<branch-name>-faithongs-projects.vercel.app`

This is perfect for testing before merging into `develop`.

### 3) Environment variables  
Make sure the following are set in **Vercel → Project Settings → Environment Variables**:

- `VITE_API_ENDPOINT`  
- `VITE_GOOGLE_CLIENT_ID`

### 4) Manual redeploy (optional)  
You can trigger a redeploy from the [Vercel dashboard](https://vercel.com/dashboard) if needed.  
> 🔐 Please contact me for manual redeploys — only I can authorize them.

## 📬 Contact

Have questions or need support? Reach out! 🚀  

📧 **Email:** [faithong.tati@gmail.com](mailto:faithong.tati@gmail.com)