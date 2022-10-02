import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsPageComponent } from './pages/operations-page/operations-page.component';
import { MaterialModule } from "../../shared/material.module";
import { LoggingRoutingModule } from "./logging.routing.module";



@NgModule({
  declarations: [
    OperationsPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LoggingRoutingModule
  ]
})
export class LoggingModule { }
