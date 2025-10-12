## 🔐 Google OAuth — Getting a Client ID

We use Google OAuth as one of our sign-in methods. Follow these steps to create your own **Client ID** for local development.

👉 [Google Cloud Console](https://console.cloud.google.com/)

### 1) Create a project in Google Cloud

1. Go to **Google Cloud Console** and create or select a project.
2. Open **APIs & Services** → **OAuth consent screen**.
3. App type: **External** → fill in basic info.
4. Add your Gmail as a **test user** if the app is in Testing mode.
5. Save & continue (no scopes needed for basic sign-in).

### 2) Create OAuth credentials (Web)

1. Go to **APIs & Services → Credentials**.
2. Click **Create Credentials → OAuth client ID**.
3. Choose **Web application**.

**Authorized JavaScript origins** (pick what you use):

- `http://localhost:3000` ← for local dev
- `http://localhost` ← required fallback (some libs use this)
- `https://pl-forecaster-portal.vercel.app` ← production (deployed app)

**Authorized redirect URIs** (not required):

Click **Create** and copy your **Client ID**.

### 3) Add it to your env file and we're good to go

```bash
# Google OAuth Client ID
VITE_GOOGLE_CLIENT_ID=<YOUR_CLIENT_ID>
```

