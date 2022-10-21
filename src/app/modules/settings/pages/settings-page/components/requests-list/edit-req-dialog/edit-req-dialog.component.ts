import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpUrlReqService } from "../../../../../../../core/web-data/url-req/http-url-req.service";
import UrlRequest from "../../../../../../../core/entities/url-request";
import { HttpErrorResponse } from "@angular/common/http";
import { EditUrlReqDto } from "../../../../../../../core/dtos/edit-url-req-dto";

@Component({
  selector: 'app-edit-req-dialog',
  templateUrl: './edit-req-dialog.component.html',
  styleUrls: ['./edit-req-dialog.component.css']
})
export class EditReqDialogComponent implements OnInit {
  isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EditReqDialogComponent>,
    private snackBar: MatSnackBar,
    private reqHttpService: HttpUrlReqService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: UrlRequest,
  ) {}

  reqFG = this.formBuilder.group({
    name: [this.data.name || "", [Validators.required, Validators.minLength(5)] ],
    description: [this.data.description || ""],
    url: [this.data.url || "", [Validators.required] ]
  });
  reqControls = this.reqFG.controls;


  ngOnInit(): void {
  }

  onSubmitBtnClick(): void {
    console.warn(this.reqFG.value)
    this.isLoading = true;
    this.reqFG.disable();
    const sub = this.reqHttpService.update(
      new EditUrlReqDto({ ...this.reqFG.value, _id: this.data._id } as EditUrlReqDto)
    ).subscribe({
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
