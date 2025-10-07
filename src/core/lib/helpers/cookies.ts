import Cookies from 'js-cookie';

import { CookieExpires } from '@/core/lib/constants';

import { decode, encode } from './codec';

import type { SetCookieParams } from '@/core/lib/types';

export function setCookie({ key, value, expires }: SetCookieParams) {
  expires ??= CookieExpires;

  Cookies.set(key, encode(value), { expires, sameSite: 'Lax', secure: true });
}

export function getCookie(key: string) {
  try {
    return decode(Cookies.get(key));
  } catch {
    return '';
  }
}

export function deleteCookie(key: string) {
  return Cookies.remove(key);
}
