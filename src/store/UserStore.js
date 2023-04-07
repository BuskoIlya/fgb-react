import { makeAutoObservable } from 'mobx';
import { authService } from '../api';
import * as util from '../js/util';

export class UserStore {

  isAuth = false;

  fullName;
  initials;
  img;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(isAuth) {
    this.isAuth = isAuth;
  }

  setUser({ fullName, initials, img }) {
    this.fullName = fullName;
    this.initials = initials;
    this.img = img;
  }

  async checkAuth() {
    try {
      const { data } = await authService.checkAuth();
      const { token, img, ...userData } = data;
      this.setAuth(true);
      this.setUser({
        fullName: util.fullNameOfObj(userData),
        initials: userData.name?.substr(0, 1),
        img
      });
    } catch (e) {
      console.error(e);
    }
  }

  async login(email, password) {
    try {
      const { data } = await authService.login(email, password);
      const { token, img, ...userData } = data;
      this.setAuth(true);
      this.setUser({
        fullName: util.fullNameOfObj(userData),
        initials: userData.name?.substr(0, 1),
        img
      });
      localStorage.setItem('token', token);
    } catch (e) {
      console.error(e);
    }
  }

  async logout() {
    try {
      await authService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      console.error(e);
    }
  }

  async register(email, password) {
    try {
      const { data } = await authService.login(email, password);
      const { token, img, ...userData } = data;
      this.setAuth(true);
      this.setUser({
        fullName: util.fullNameOfObj(userData),
        initials: userData.name?.substr(0, 1),
        img
      });
      localStorage.setItem('token', token);
    } catch (e) {
      console.error(e);
    }
  }
}