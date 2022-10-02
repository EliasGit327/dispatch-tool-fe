import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from "./auth.routing.module";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../shared/material.module";
import { FormsModule } from "@angular/forms";
import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";

@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    MaterialModule,
    FormsModule,
  ]
})
export class AuthModule { }
