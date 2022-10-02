import { Component, OnInit } from '@angular/core';

interface ICreateUserDto {
  username: string,
  password: string,
}

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
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSignUpBtnClick() {
    this.isLoading = !this.isLoading;
  }
}
