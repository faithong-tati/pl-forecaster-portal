import type { AuthProviderState } from '@/core/providers/auth-provider/types';
import type { Updater } from 'use-immer';

export interface IAuthContext {
  authState: AuthProviderState;
  setAuthState: Updater<AuthProviderState>;
}
