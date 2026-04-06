const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const CHARACTERS_LENGTH = CHARACTERS.length;

export function generateRandomString(length: number): string {
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = CHARACTERS[Math.floor(Math.random() * CHARACTERS_LENGTH)];
  }
  return result.join('');
}
