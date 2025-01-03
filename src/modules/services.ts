import axios from 'axios';
import { Bumawiki } from './constants';

export type LocalStorageKey = 'access_token' | 'refresh_token';

export class Storage {
  private static isWindowAvailable() {
    return typeof window !== 'undefined';
  }

  static getItem(key: LocalStorageKey) {
    if (this.isWindowAvailable()) return localStorage.getItem(key);
  }

  static setItem(key: LocalStorageKey, value: string) {
    if (!this.isWindowAvailable()) return;
    localStorage.setItem(key, value);
  }

  static delItem(key: LocalStorageKey) {
    if (!this.isWindowAvailable) return;
    localStorage.removeItem(key);
  }

  static clear() {
    if (this.isWindowAvailable()) localStorage.clear();
  }
}

export const authorizationHeader = () => ({
  headers: {
    Authorization: Storage.getItem(Bumawiki.token.access),
  },
});

export const refreshTokenHeader = () => ({
  headers: {
    RefreshToken: Storage.getItem(Bumawiki.token.refresh),
  },
});

export const http = axios.create({
  baseURL: '/insert-proxy',
  timeout: 10000,
});

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;
    const { code } = error.response.data;
    const isAccessTokenExpiredError = code === Bumawiki.error.token_403_2;

    if (isAccessTokenExpiredError && !request.sent) {
      request.sent = true;
      request.headers.Authorization = await refresh();
      return http(request);
    }
    return Promise.reject(error);
  },
);

const refresh = async () => {
  const { data } = await http.put('/auth/refresh/access', {}, refreshTokenHeader());
  Storage.setItem(Bumawiki.token.access, data.accessToken);
  return data.accessToken;
};
