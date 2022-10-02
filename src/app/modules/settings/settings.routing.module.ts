import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SettingsPageComponent } from "./pages/settings-page/settings-page.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SettingsPageComponent
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
