import { RegexAlphabet } from '@/core/lib/constants';

function rot13(text: string): string {
  return text.replace(RegexAlphabet, (char) =>
    String.fromCharCode(
      char.charCodeAt(0) + (char.toUpperCase() <= 'M' ? 13 : -13),
    ),
  );
}

export function encode<T>(data: T): string {
  const json = JSON.stringify(data);
  const uri = encodeURIComponent(json);
  const base64 =
    typeof btoa === 'function'
      ? btoa(uri)
      : Buffer.from(uri, 'utf-8').toString('base64');

  return rot13(base64);
}

export function decode<T>(text?: string | null): T | undefined {
  if (!text) return undefined;

  const unrot = rot13(text);
  const uri =
    typeof atob === 'function'
      ? atob(unrot)
      : Buffer.from(unrot, 'base64').toString('utf-8');

  return JSON.parse(decodeURIComponent(uri));
}
