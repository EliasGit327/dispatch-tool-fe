import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./shared/material.module";
import { UnauthLayoutComponent } from './layout/unauth-layout/unauth-layout.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing.module";
import { UserLayoutComponent } from "./layout/user-layout/user-layout.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { JwtInterceptor } from "./core/interceptors/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    UnauthLayoutComponent,
    UserLayoutComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
