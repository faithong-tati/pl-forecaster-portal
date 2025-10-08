import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { Routes } from '@/core/constants';
import { getGoogleUser } from '@/core/lib/api/get-google-user';
import { CookieAuth } from '@/core/lib/constants';
import { setCookie } from '@/core/lib/helpers';
import { useDeviceUid } from '@/core/lib/hooks/use-device-uid';
import { useToast } from '@/core/providers/toast-provider/useToast';
import { usePostUser } from '@/modules/users/hooks/api/use-post-user';

import type { GoogleJwtPayload } from '@/core/lib/types';

export default function useSignIn() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const toast = useToast();
  const { deviceUid } = useDeviceUid();
  // async hooks
  const { mutateAsync: postUserApi } = usePostUser();
  const onGoogleLogin = useGoogleLogin({
    flow: 'implicit',
    scope: 'openid email profile',
    onSuccess: async (token) => {
      const response = await getGoogleUser({ token: token.access_token });
      const profile: GoogleJwtPayload = await response.json();

      await postUserApi({
        email: profile.email,
        providerRef: deviceUid,
        imageUrl: profile.picture,
        username: profile.sub,
      });

      setCookie({ key: CookieAuth, value: deviceUid });

      navigate({
        to: `/$locale${Routes.dashboard.path}`,
        params: { locale: i18n.language },
      });

      toast.onOpen('signIn.success', 'success');
    },
    onError: () => {
      toast.onOpen('signIn.failed', 'error');
    },
  });

  return { onGoogleLogin };
}
