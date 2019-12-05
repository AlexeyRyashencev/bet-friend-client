import { observable, action } from 'mobx';

class AuthStore {
  @observable token;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  get getToken() {
    return this.token;
  }

  set setToken(token) {
    localStorage.setItem('token', token);
    this.token = token;
  }
}

const authStore = new AuthStore();

export default authStore;
export { AuthStore };
