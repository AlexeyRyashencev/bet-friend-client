import { observable, action } from 'mobx';

class UserStore {
  @observable isLogin;
  @observable fullName;

  constructor() {
    this.isLogin = false;
    this.fullName = '';
  }

  get getToken() {
    return this.token;
  }

  set setToken(token) {
    localStorage.setItem('token', token);
    this.token = token;
  }
}

const userStore = new UserStore();

export default userStore;
export { UserStore };
