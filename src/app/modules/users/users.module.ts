import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { UsersRoutingModule } from "./users.routing.module";
import { MaterialModule } from "../../shared/material.module";
import { UserDetailsPageComponent } from "./pages/user-details-page/user-details-page.component";

@NgModule({
  declarations: [
    UserListPageComponent,
    UserDetailsPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }
