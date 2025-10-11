import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useImmer } from 'use-immer';

import NotSupport from '@/core/components/not-support';
import { DefaultLocale, Routes, SupportedLocale } from '@/core/constants';
import AuthContext from '@/core/contexts/auth-context';
import { CookieAuth } from '@/core/lib/constants';
import { getCookie } from '@/core/lib/helpers';
import { useDeviceUid } from '@/core/lib/hooks/use-device-uid';
import { useScreenMediaType } from '@/core/lib/hooks/use-screen-media-type';
import { useGetUserById } from '@/modules/users/hooks/api/use-get-user-by-id';

import type { AuthProviderState } from './types';
import type { Locale } from '@/core/types';
import type { PropsWithChildren } from 'react';

function AuthProvider({ children }: PropsWithChildren) {
  const [authState, setAuthState] = useImmer<AuthProviderState>({
    isAuth: false,
    loading: false,
    username: null,
  });

  // hook
  const { deviceUid } = useDeviceUid();
  const cookieDeviceUid = getCookie(CookieAuth);
  const { mediaType } = useScreenMediaType();
  const { i18n } = useTranslation();
  // async hook
  const { data } = useGetUserById({ providerRef: deviceUid });

  useEffect(() => {
    setAuthState((draft) => {
      draft.loading = true;
    });

    setAuthState((draft) => {
      draft.isAuth = !!deviceUid && deviceUid === cookieDeviceUid;
    });

    setAuthState((draft) => {
      draft.loading = false;
    });
  }, [cookieDeviceUid, deviceUid, setAuthState]);

  useEffect(() => {
    const pathnameArray = location.pathname.split('/').filter(String);

    if (pathnameArray.length) {
      const next = pathnameArray[0] as Locale;
      const isSupported = SupportedLocale.includes(next);

      if (!isSupported) {
        location.replace(`/${DefaultLocale}${Routes.dashboard.path}`);
      }

      i18n.changeLanguage(isSupported ? next : DefaultLocale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (mediaType === 'mobile') {
    return <NotSupport />;
  }

  return (
    <AuthContext.Provider
      value={{ authState, setAuthState, user: data ?? null }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default memo(AuthProvider);
