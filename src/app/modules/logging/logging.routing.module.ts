import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { OperationsPageComponent } from "./pages/operations-page/operations-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OperationsPageComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggingRoutingModule { }
