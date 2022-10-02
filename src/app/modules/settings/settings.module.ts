import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from "./pages/settings-page/settings-page.component";
import { SettingsRoutingModule } from "./settings.routing.module";
import { MaterialModule } from "../../shared/material.module";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";



@NgModule({
  declarations: [
    SettingsPageComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule
  ]
})
export class SettingsModule { }
