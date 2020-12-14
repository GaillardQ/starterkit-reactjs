/**
 * All networking url used in this app
 */
export default class ServicesUrls {
  static path = process.env.REACT_APP_HOST;

  static get apiPath(): string {
    return `${ServicesUrls.path || ''}/api`;
  }

  /**
   * LOGIN
   */
  static getLogin() {
    return `${ServicesUrls.apiPath}/auth/login`;
  }

  /**
   * EXAMPLE
   */
  static getExample() {
    return `${ServicesUrls.apiPath}/example`;
  }
}
