import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { UserRole } from "../enums/user-role";

const tokenKey = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public token?: string;
  public role?: UserRole;

  constructor(private router: Router) {
    const token = localStorage.getItem(tokenKey);
    if (token) {
      this.token = token;
      this.role = this.getRoleFromToken(token);
    }
  }

  setToken(token: string): void {
    this.token = token;
    this.role = this.getRoleFromToken(token);
    localStorage.setItem(tokenKey, token);
    this.router.navigate(['']).then();
  }

  removeToken(): void {
    this.token = undefined;
    localStorage.removeItem(tokenKey);
  }

  logOut(): void {
    this.removeToken();
    this.router.navigate(['auth', 'login']).then();
  }

  private getRoleFromToken(token: string): UserRole {
    let jwtData = token.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    return decodedJwtData.role;
  }
}
