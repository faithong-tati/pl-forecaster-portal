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

The **TAO BIN P/L Forecast Portal** is built with React, designed for scalability and maintainability. It uses a JSON Server as a mock backend, supports multi-language (th/en), and leverages TanStack React Query for efficient data fetching and caching.

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

## 🌐 Online Access (No Local Setup Needed)

If you prefer not to set up the project locally, you can simply access the deployed frontend directly via the link below:

👉 [https://pl-forecaster-portal.vercel.app](https://pl-forecaster-portal.vercel.app)

> The frontend’s environment is already configured to point to the backend hosted on **Render**, so everything works out of the box 🚀
>
> ⚠️ **Note:** On your first visit, you might need to wait around **30 seconds** for the JSON Server to spin up. This is normal for Render’s free tier.
>
> 📝 You can also check the server status here: [https://pl-forecaster-portal.onrender.com](https://pl-forecaster-portal.onrender.com)

## 🧰 Local Development Setup

To run the project locally with both **Frontend** and **Virtual DB (JSON Server)**:

### 1) FE at Root Directory

Clone this repository and stay in the root folder for FE.

### 2) Virtual DB (JSON Server) → `/api`

> Acts as the mock backend for development.

```bash
# Go to /api directory
cd api

# Install dependencies
npm install

# Start server (nodemon for real-time reload)
npm run dev
```

✅ Uses **nodemon** to auto-restart on file changes
✅ Runs at `http://localhost:3001/api`

### 3) Frontend → Root Directory

```bash
# Go back to root
cd ..

# Install dependencies
npm install

# Start dev server
npm run dev
```

✅ FE runs at `http://localhost:3000`

### 4) Environment Variables

Create a `.env` at the **root** and add:

```bash
# Local JSON Server
VITE_API_ENDPOINT=http://localhost:3001/api

# Google OAuth Client ID
VITE_GOOGLE_CLIENT_ID=
```

> ⚠️ You can contact me for the VITE_GOOGLE_CLIENT_ID, or if you're a reviewer I've shared the repo with, **please check your email**, or create your own (see [Contribution Guidelines](./CONTRIBUTION.md))
> 
> 🔄 Please make sure to restart your terminal (or dev server) after changing this file

### 5) Done ✅

Once both are running and we're good to go:

- FE: [http://localhost:3000](http://localhost:3000)
- Virtual DB: [http://localhost:3001/api](http://localhost:3001/api)

## 🧹 Lint & Format

- ESLint v9 + Prettier v3
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
api/                            # JSON Server API
public/                         # Static assets
src/
├── core/                       # Global shared layer
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
├── i18n/                       # react-i18next initialization
├── messages/                   # i18n JSON resource files (th/en)
├── modules/                    # Feature-based modules
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
└── routes/                     # TanStack Router route
.env                            # Local environment variables
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

## 📬 Contact

Have questions or need support? Reach out! 🚀

📧 **Email:** [faithong.tati@gmail.com](mailto:faithong.tati@gmail.com)
