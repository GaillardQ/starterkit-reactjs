// Service
import LocalStorage from '../Storage/LocalStorage';
// Types
import * as WsExceptionTypes from '../../Model/WsException.type';
// Utils
import ServicesUrls from './ServicesUrls';
// Common
import Common from '../../../Resources/Common';

export interface IPostParams {
  key: string;
  value: string | number;
}

export default class ServicesUtils {
  static getHeaders(needAuth = false): Headers {
    const headers = new Headers({});

    headers.append('Accept', 'application/json');
    if (needAuth) {
      const token = LocalStorage.get(LocalStorage.keys.access_token);
      const bearer = `Bearer ${token}`;
      headers.append('Authorization', bearer);
    }
    return headers;
  }

  // TEST
  static test(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ result: 'Webservice done' }), 1000);
    });
  }

  // TEST
  static testFail(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({
          message: [
            'Webservice failed (message 1)',
            'Webservice failed (message 2)',
          ],
        });
      }, 1000);
    });
  }

  static get(url: string, needAuth = true): Promise<any> {
    const headers = this.getHeaders(needAuth);
    headers.append('Content-Type', 'application/json; charset=utf-8');

    const init: RequestInit = {
      headers,
      method: 'GET',
      mode: 'cors',
      cache: 'default',
    };

    return ServicesUtils.callUrl(url, init);
  }

  static post(url: string, data: any, needAuth = true): Promise<any> {
    const headers = this.getHeaders(needAuth);
    headers.append('Content-Type', 'application/json; charset=utf-8');

    const init: RequestInit = {
      headers,
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(data),
    };

    const redirectIf401: boolean =
      url === ServicesUrls.getLogin() ? false : true;

    return ServicesUtils.callUrl(url, init, redirectIf401);
  }

  static put(url: string, data: any, needAuth = true): Promise<any> {
    const headers = this.getHeaders(needAuth);
    headers.append('Content-Type', 'application/json; charset=utf-8');

    const init: RequestInit = {
      headers,
      method: 'PUT',
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(data),
    };

    const redirectIf401: boolean =
      url === ServicesUrls.getLogin() ? false : true;

    return ServicesUtils.callUrl(url, init, redirectIf401);
  }

  static delete(url: string, needAuth = true): Promise<any> {
    const headers = this.getHeaders(needAuth);
    headers.append('Content-Type', 'application/json; charset=utf-8');

    const init: RequestInit = {
      headers,
      method: 'DELETE',
      mode: 'cors',
      cache: 'default',
    };

    return ServicesUtils.callUrl(url, init);
  }

  static callUrl(url: string, init: RequestInit, redirectIf401 = true) {
    const defaultMessage = 'Une erreur est survenue...';
    return fetch(url, init)
      .catch(() => {
        throw defaultMessage;
      })
      .then((response: any) => {
        const statusCode: number | boolean = ServicesUtils.handleErrors(
          response,
          redirectIf401
        );

        if (statusCode !== false) {
          return response.json().then((data: WsExceptionTypes.IWsException) => {
            throw data;
          });
        }

        return response.json();
      });
  }

  static handleErrors(response: { status?: number }, redirect = true) {
    if (!response || !response.status || response.status > 299) {
      if (response && response.status === 401 && redirect) {
        LocalStorage.delete(LocalStorage.keys.access_token);
        LocalStorage.delete(LocalStorage.keys.expiration_datetime);
        window.location.href = `/${Common.Routes.routeLogin}`;
      }
      return response.status || 1;
    }
    return false;
  }
}
