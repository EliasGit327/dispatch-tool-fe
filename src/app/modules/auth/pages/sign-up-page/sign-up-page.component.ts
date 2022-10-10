import { Component, OnInit } from '@angular/core';
import { HttpUsersService } from "../../../../core/web-data/http-users/http-users.service";
import { ICreateUserDto } from "../../../../core/dtos/create-dto";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  repeatedPassword: string = '';
  isPasswordHidden: boolean = true;
  isLoading: boolean = false;

  signUpData: ICreateUserDto = {
    name: '',
    password: ''
  };

  constructor(
    private httpUsers: HttpUsersService,
    private snackBar: MatSnackBar

  ) { }

  onSuccess(data: any): void {
    this.snackBar.open("User has been created!", "Close", { duration: 2000 });
    this.signUpData = { name: "", password: "" }
  }

  createUser(): void {
    if (this.repeatedPassword !== this.signUpData.password) {
      this.snackBar.open("Password does not match!", "Close", { duration: 2000 });
      return;
    }

    this.isLoading = true;
    const sub = this.httpUsers.createUser(this.signUpData)
      .subscribe({
        next: (data) => this.onSuccess(data),
        error: (e) => console.error(e)
      });
    sub.add(() => this.isLoading = false);
  }

  ngOnInit(): void {
  }

  onSignUpBtnClick() {
    this.createUser();
  }
}
