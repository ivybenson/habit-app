import config from "../config";

export default {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    !!this.getAuthToken();
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
};
