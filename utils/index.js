export function isVaildUserName(userName) {
  return userName.length > 4 || userName.length < 2;
}

export function isVaildPassword(password) {
  return password.length < 8 || password.length > 10;
}

