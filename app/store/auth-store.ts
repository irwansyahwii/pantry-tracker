import { makeAutoObservable, makeObservable, observable } from "mobx";

export class AuthStore {
  isLoggedIn = false;

  constructor(){
    makeAutoObservable(this);
  }

  loggedIn(){
    this.isLoggedIn = true;
  }

  loggedOut(){
    this.isLoggedIn = false;
  }

  hydrate = (data: any) => {
    if (!data) return;
    this.isLoggedIn = data.isLoggedIn;
  };

}

export const authStore = new AuthStore();