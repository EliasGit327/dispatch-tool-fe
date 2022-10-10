import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthLayoutComponent } from "./layout/unauth-layout/unauth-layout.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { UserLayoutComponent } from "./layout/user-layout/user-layout.component";
import { LoggedGuard } from "./core/guards/logged.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: UserLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren:  () => import('./modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'user',
        loadChildren:  () => import('./modules/users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'logs',
        loadChildren:  () => import('./modules/logging/logging.module').then(m => m.LoggingModule),
      },
      {
        path: 'settings',
        loadChildren:  () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
      },
    ]
  },
  {
    path: 'auth',
    component: UnauthLayoutComponent,
    canActivate: [LoggedGuard],
    loadChildren:  () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
