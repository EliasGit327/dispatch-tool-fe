import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

const tokenKey = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public token?: string;

  constructor(private router: Router) {
    const token = localStorage.getItem(tokenKey);
    if (token)
      this.token = token;
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem(tokenKey, token);
  }

  removeToken(): void {
    this.token = undefined;
    localStorage.removeItem(tokenKey);
  }

  logOut(): void {
    this.removeToken();
    this.router.navigate(['auth', 'login']).then();
  }
}
