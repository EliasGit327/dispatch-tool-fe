import { Component, OnInit } from '@angular/core';
import { IDispatchSettings } from "../../../../../../core/entities/dispatch-settings-entity";
import {
  HttpDispatchSettingsService
} from "../../../../../../core/web-data/http-dispatch-settings/http-dispatch-settings.service";
import { MatDialog } from '@angular/material/dialog';
import {
  CreateDispatchSettingsDialogComponent
} from "./create-dispatch-settings-dialog/create-dispatch-settings-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-dispatch-settings',
  templateUrl: './dispatch-settings.component.html',
  styleUrls: ['./dispatch-settings.component.css']
})
export class DispatchSettingsComponent implements OnInit {
  data?: IDispatchSettings;
  isLoading: boolean = false;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private httpDispatchSettings: HttpDispatchSettingsService
  ) {
  }

  ngOnInit(): void {
    this.requestSettings();
  }

  deleteSettings(): void {
    this.isLoading = true;
    const sub = this.httpDispatchSettings.delete()
      .subscribe({
        next: () => this.data = undefined,
        error: (e) => console.error(e)
      });
    sub.add(() => this.isLoading = false)
  }

  onRefreshBtnClick(): void {
    this.requestSettings();
  }

  onCreateBtnClick(): void {
    const dialogRef = this.dialog.open(CreateDispatchSettingsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.requestSettings();
    });
  }

  requestSettings(): void {
    this.isLoading = true;
    this.data = undefined;
    const sub = this.httpDispatchSettings.get().subscribe({
      next: (data) => this.data = data,
      error: (httpError: HttpErrorResponse) => {
        if (httpError.status !== 404) {
          console.error(httpError);
          const mes = httpError.error.message;
          this.snackBar.open(mes, "Close", {
            duration: 5000, panelClass: ["bg-red-700", "text-white"]
          });
        }
      }
    });
    sub.add(() => this.isLoading = false);
  }

  requestTestAuth(): void {
    this.isLoading = true;
    const sub = this.httpDispatchSettings.test().subscribe({
      next: (data) => this.requestSettings(),
      error: (e) => console.error(e)
    });
    sub.add(() => this.isLoading = false);
  }

  onTestBtnClick(): void {
    this.requestTestAuth();
  }
}
