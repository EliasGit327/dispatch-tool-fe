import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from "./pages/settings-page/settings-page.component";
import { SettingsRoutingModule } from "./settings.routing.module";
import { MaterialModule } from "../../shared/material.module";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import {
  DispatchSettingsComponent
} from "./pages/settings-page/components/dispatch-settings/dispatch-settings.component";
import {
  CreateDispatchSettingsDialogComponent
} from "./pages/settings-page/components/dispatch-settings/create-dispatch-settings-dialog/create-dispatch-settings-dialog.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SettingsPageComponent,
    ProfilePageComponent,
    DispatchSettingsComponent,
    CreateDispatchSettingsDialogComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class SettingsModule { }
