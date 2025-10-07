import Cookies from 'js-cookie';

import { CookieExpires } from '@/core/lib/constants';

import type { SetCookieParams } from '@/core/lib/types';

export function setCookie({ key, value, expires }: SetCookieParams) {
  expires ??= CookieExpires;

  Cookies.set(key, value, { expires, sameSite: 'Lax', secure: true });
}

export function getCookie(key: string) {
  return Cookies.get(key);
}

export function deleteCookie(key: string) {
  return Cookies.remove(key);
}
