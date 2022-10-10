import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from "./home.routing.module";
import { MaterialModule } from "../../shared/material.module";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { UsersWidgetComponent } from "./pages/home-page/components/users-widget/users-widget.component";

@NgModule({
  declarations: [
    HomePageComponent,
    UsersWidgetComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
