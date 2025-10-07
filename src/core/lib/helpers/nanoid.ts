import { customAlphabet } from 'nanoid';

export function generateId(len: number, char?: string) {
  char ??= '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

  const gen = customAlphabet(char, len);

  return gen();
}
