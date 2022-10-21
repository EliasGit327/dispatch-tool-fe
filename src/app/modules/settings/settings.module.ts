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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserDetailsComponent } from "./pages/profile-page/components/user-details/user-details.component";
import { RequestsListComponent } from "./pages/settings-page/components/requests-list/requests-list.component";
import {
  CreateReqDialogComponent
} from "./pages/settings-page/components/requests-list/create-req-dialog/create-req-dialog.component";
import {
  TelegramSettingsComponent
} from "./pages/settings-page/components/telegram-settings/telegram-settings.component";
import {
  EditReqDialogComponent
} from "./pages/settings-page/components/requests-list/edit-req-dialog/edit-req-dialog.component";

@NgModule({
  declarations: [
    SettingsPageComponent,
    ProfilePageComponent,
    DispatchSettingsComponent,
    CreateDispatchSettingsDialogComponent,
    UserDetailsComponent,
    RequestsListComponent,
    CreateReqDialogComponent,
    TelegramSettingsComponent,
    EditReqDialogComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
