import { useMemo } from 'react';

import { DeviceUid } from '@/core/lib/constants';
import { generateId, hasLocalStorageKey } from '@/core/lib/helpers';

export function useDeviceUid() {
  const hasKey = hasLocalStorageKey(DeviceUid);

  if (!hasKey && typeof window !== 'undefined') {
    localStorage.setItem(DeviceUid, generateId(12));
  }

  const deviceUid = useMemo(
    () =>
      typeof window !== 'undefined'
        ? (localStorage.getItem(DeviceUid) ?? '')
        : '',
    [],
  );

  return {
    deviceUid,
    hasKey,
  };
}
