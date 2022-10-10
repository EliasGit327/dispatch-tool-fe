import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {
  HttpDispatchSettingsService
} from "../../../../../../../core/web-data/http-dispatch-settings/http-dispatch-settings.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-dispatch-settings-dialog',
  templateUrl: './create-dispatch-settings-dialog.component.html',
  styleUrls: ['./create-dispatch-settings-dialog.component.css']
})
export class CreateDispatchSettingsDialogComponent implements OnInit {
  isLoading: boolean = false;
  data: { name: string, password: string } = {
    name: '',
    password: ''
  };

  constructor(
    public dialogRef: MatDialogRef<CreateDispatchSettingsDialogComponent>,
    private httpDispSetRepo: HttpDispatchSettingsService,
    private snackBar: MatSnackBar
  ) { }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  onCreateBtnClick(): void {
    this.dialogRef.disableClose = true;
    this.isLoading = true;

    const sub = this.httpDispSetRepo.create(this.data)
      .subscribe({
        next: (data) => this.dialogRef.close(data),
        error: (e) => this.snackBar.open(e.error.message, 'Close', { duration: 2000 })
      });
    sub.add(() => {
      this.isLoading = false;
      this.dialogRef.disableClose = false;
    });
  }
}
