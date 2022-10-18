import { Component, OnInit, Optional } from '@angular/core';
import { HttpUsersService } from "../../../../core/web-data/http-users/http-users.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { CreateUserDto } from "../../../../core/dtos/create-user-dto";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  isLoading: boolean = false;
  repeatedPassword: string = '';
  isPasswordHidden: boolean = true;

  signUpFG = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(7)] ],
    password: ["", [Validators.required, Validators.minLength(7)] ],
    repeatPassword: ["", [Validators.required, Validators.minLength(7)] ]
  });
  signUpCtrl = this.signUpFG.controls;

  constructor(
    private httpUsers: HttpUsersService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {}

  confirmPassword(control: FormControl, group: FormGroup, matchPassword: string): { mismatch: boolean } {
    if (!control.value || group.controls[matchPassword].value !== null || group.controls[matchPassword].value === control.value) {
      return { mismatch: false }
    }
    return { 'mismatch': true }
  }

  onSuccess(data: any): void {
    this.snackBar.open("User has been created!", "Close", {
      duration: 2000, panelClass: ["bg-green-700", "text-white"]
    });
    this.signUpFG.reset();
  }

  clearNameBtnClick(): void {
    this.signUpFG.patchValue({ name: "" });
  }

  onSignUpBtnClick(): void {
    if (this.signUpCtrl.password.value !== this.signUpCtrl.repeatPassword.value) {
      this.snackBar.open("Passwords does not match!", "Close", {
        duration: 2000, panelClass: ["bg-red-700", "text-white"]
      });
      return
    }

    this.createUser();
  }

  createUser(): void {
    this.signUpFG.disable();
    this.isLoading = true;
    const sub = this.httpUsers.createUser(new CreateUserDto(this.signUpFG.value))
      .subscribe({
        next: (data) => this.onSuccess(data),
        error: (e) => {
          const text = e.status != 0 ? e.error.message : "Connection refused";
          this.snackBar.open(
            text,
            "Close",
            { duration: 2000, panelClass: ["bg-red-700", "text-white"] }
          );
        }
      });
    sub.add(() => {
      this.signUpFG.enable();
      this.isLoading = false;
    });
  }

}
