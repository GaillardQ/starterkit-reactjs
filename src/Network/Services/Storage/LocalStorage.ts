export default class LocalStorage {
  static keys = {
    access_token: 'access_token',
    expiration_datetime: 'expiration_datetime',
    user: 'user', //example
  };

  static get(key: string): any {
    const value: any = localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return value;
  }
  static set(key: string, value: any): void {
    if (value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  static reset(key: string, newValue: any): void {
    LocalStorage.set(key, newValue);
  }
  static delete(key: string): void {
    localStorage.removeItem(key);
  }
}
