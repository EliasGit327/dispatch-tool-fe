import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../core/services/user.service";
import { Router } from "@angular/router";
import { HttpAuthService } from "../../../../core/web-data/http-auth/http-auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isLoading: boolean = false;
  authData: { name: string, password: string } = {
    name: '',
    password: ''
  };
  isPasswordHidden: boolean = true;
  errorMessage?: string;

  constructor(
    public authService: UserService,
    private router: Router,
    private httpAuthService: HttpAuthService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  loginBtnPressed(): void {
    this.isLoading = !this.isLoading;
    const subscription = this.httpAuthService.login(this.authData)
      .subscribe({
        next: (data) => {
          this.authService.setToken(data.token);
        },
        error: (e: HttpErrorResponse) => {
          const text = e.status != 0 ? e.error.message : "Connection refused";
          this.snackBar.open(
            text,
            "Close",
            { duration: 2000, panelClass: ["bg-red-700", "text-white"] }
          );
        },
      });
    subscription.add(() => this.isLoading = false);
  }

}
