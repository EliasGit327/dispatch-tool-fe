import { Component, OnInit } from '@angular/core';
import { IDispatchSettings } from "../../../../../../core/entities/dispatch-settings-entity";
import {
  HttpDispatchSettingsService
} from "../../../../../../core/web-data/http-dispatch-settings/http-dispatch-settings.service";
import { MatDialog } from '@angular/material/dialog';
import {
  CreateDispatchSettingsDialogComponent
} from "./create-dispatch-settings-dialog/create-dispatch-settings-dialog.component";

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
        next: () => this.requestSettings(),
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
    const sub = this.httpDispatchSettings.get().subscribe({
      next: (data) => this.data = data,
      error: (e) => console.error(e)
    });
    sub.add(() => this.isLoading = false);
  }

  requestTestAuth(): void {
    this.isLoading = true;
    const sub = this.httpDispatchSettings.test().subscribe({
      next: (data) => console.warn(data),
      error: (e) => console.error(e)
    });
    sub.add(() => this.isLoading = false);
  }

  onTestBtnClick(): void {
    this.requestTestAuth();
  }
}
