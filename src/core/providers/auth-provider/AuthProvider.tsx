'use client';

import { memo } from 'react';
import { useEffectOnce } from 'react-use';
import { useImmer } from 'use-immer';

import AuthContext from '@/core/contexts/auth-context';
import { DeviceUid } from '@/core/lib/constants';
import { useDeviceUid } from '@/core/lib/hooks/use-device-uid';

import type { AuthProviderState } from './types';
import type { PropsWithChildren } from 'react';

function AuthProvider({ children }: PropsWithChildren) {
  const [authState, setAuthState] = useImmer<AuthProviderState>({
    isAuth: false,
    username: null,
  });

  const { deviceUid } = useDeviceUid();

  useEffectOnce(() => {
    localStorage.setItem(DeviceUid, deviceUid);
  });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export default memo(AuthProvider);
