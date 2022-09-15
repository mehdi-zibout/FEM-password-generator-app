export function getUpper(): string {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

export function getLower(): string {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

export function getNumber(): string {
  return Math.floor(Math.random() * 10).toString();
}

export function getSymbol(): string {
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
