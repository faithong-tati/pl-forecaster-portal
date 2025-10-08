import { ThemeProvider } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Environment } from '@/core/constants';
import theme from '@/core/lib/theme';
import AuthProvider from '@/core/providers/auth-provider';
import ToastProvider from '@/core/providers/toast-provider';

import App from './App';

import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={Environment.GOOGLE_CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={new QueryClient()}>
          <AuthProvider>
            <ToastProvider>
              <App />
            </ToastProvider>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
);
