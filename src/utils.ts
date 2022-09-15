import { StrengthType } from './components/Strength';

function getUpper(): string {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getLower(): string {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getNumber(): string {
  return Math.floor(Math.random() * 10).toString();
}

function getSymbol(): string {
  const randomSymbs = [
    String.fromCharCode(Math.floor(Math.random() * 15 + 33)),
    String.fromCharCode(Math.floor(Math.random() * 7 + 58)),
    String.fromCharCode(Math.floor(Math.random() * 6 + 91)),
    String.fromCharCode(Math.floor(Math.random() * 4 + 123)),
  ];
  return randomSymbs[Math.floor(Math.random() * 4)][0];
}

export default function generatePassword(
  length: number,
  {
    upperCase,
    lowerCase,
    numbers,
    symbols,
  }: {
    upperCase: boolean;
    lowerCase: boolean;
    numbers: boolean;
    symbols: boolean;
  }
): string {
  let password: string[] = [];
  // getting at least one upper one lower one number one symbol if requested
  if (upperCase && password.length < length) password.push(getUpper());
  if (lowerCase && password.length < length) password.push(getLower());
  if (numbers && password.length < length) password.push(getNumber());
  if (symbols && password.length < length) password.push(getSymbol());
  // filling the rest
  while (password.length < length) {
    let x = Math.random();
    if (x < 0.35) {
      if (lowerCase && password.length < length) password.push(getLower());
    } else if (x < 0.65) {
      if (upperCase && password.length < length) password.push(getUpper());
    } else if (x < 0.85) {
      if (numbers && password.length < length) password.push(getNumber());
    } else if (symbols && password.length < length) {
      password.push(getSymbol());
    }
  }
  // rearreanging the password
  let passwordTheWord = '';
  while (password.length > 0) {
    const random = Math.floor(Math.random() * password.length);
    passwordTheWord = passwordTheWord.concat(password[random]);
    password.splice(random, 1);
  }
  return passwordTheWord;
}

export function measureStrength(
  length: number,
  {
    upperCase,
    lowerCase,
    numbers,
    symbols,
  }: {
    upperCase: boolean;
    lowerCase: boolean;
    numbers: boolean;
    symbols: boolean;
  }
): StrengthType {
  const numberOfChecked = (+upperCase +
    +lowerCase +
    +numbers +
    +symbols) as StrengthType;
  if (length <= 0 || numberOfChecked === 0) return 0;
  if (length < 8) return 1;
  if (length < 12 && numberOfChecked <= 2) return 2;
  if (
    (length < 12 && numberOfChecked > 2) ||
    (length >= 12 && numberOfChecked <= 2)
  )
    return 3;
  if (length >= 12 && numberOfChecked > 2) return 4;
  // I think I cover all cases idk why typescript is complaining anyways
  return 0;
}
