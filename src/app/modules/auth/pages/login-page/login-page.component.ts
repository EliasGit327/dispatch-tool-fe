import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../core/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isLoading: boolean = false;
  authData: { username: string, password: string } = {
    username: '',
    password: ''
  };
  isPasswordHidden: boolean = true;
  errorMessage?: string;

  constructor(
    public authService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  startLoading(): void {
    this.authService.setToken('TEST-TOKEN');
    this.router.navigate(['']).then(() => {});
    // this.isLoading = !this.isLoading;
  }

}
