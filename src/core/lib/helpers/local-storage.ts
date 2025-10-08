export function hasLocalStorageKey(key: string) {
  if (typeof window === 'undefined') return '';

  const value = localStorage.getItem(key);

  return value !== null && value.trim() !== '';
}
