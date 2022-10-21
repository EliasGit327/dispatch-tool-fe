import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpUrlReqService } from "../../../../../../../core/web-data/url-req/http-url-req.service";
import UrlRequest from "../../../../../../../core/entities/url-request";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-create-req-dialog',
  templateUrl: './create-req-dialog.component.html',
  styleUrls: ['./create-req-dialog.component.css']
})
export class CreateReqDialogComponent implements OnInit {
  isLoading: boolean = false;

  reqFG = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(5)] ],
    description: [""],
    url: ["", [Validators.required] ]
  });
  reqControls = this.reqFG.controls;

  constructor(
    public dialogRef: MatDialogRef<CreateReqDialogComponent>,
    private snackBar: MatSnackBar,
    private reqHttpService: HttpUrlReqService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  onSubmitBtnClick(): void {
    this.isLoading = true;
    this.reqFG.disable();
    const sub = this.reqHttpService.create(new UrlRequest(this.reqFG.value as UrlRequest)).subscribe({
      next: (data) => this.dialogRef.close(data),
      error: (httpError: HttpErrorResponse) => console.error(httpError)
    });
    sub.add(() => {
      this.isLoading = false;
      this.reqFG.enable();
      this.reqFG.reset();
    });
  }
}
