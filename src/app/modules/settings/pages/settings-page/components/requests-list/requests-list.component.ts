import { Component, OnInit } from '@angular/core';
import UrlRequest from "../../../../../../core/entities/url-request";
import { MatDialog } from "@angular/material/dialog";
import { CreateReqDialogComponent } from "./create-req-dialog/create-req-dialog.component";
import { HttpUrlReqService } from "../../../../../../core/web-data/url-req/http-url-req.service";
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit {
  urlReqs?: UrlRequest[];
  isLoading: boolean = false;

  constructor(
    private dialog: MatDialog,
    private httpUrlReqService: HttpUrlReqService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.requestData();
  }

  requestData(): void {
    this.urlReqs = []
    this.isLoading = true;
    const sub = this.httpUrlReqService.getForUser().subscribe({
      next: (data) => this.urlReqs = data,
      error: (httpError: HttpErrorResponse) => {
        this.snackBar.open("Couldn't get data", "Close", {
          duration: 2000, panelClass: ["bg-red-700", "text-white"]
        });
      }
    });
    sub.add(() => {
      this.isLoading = false;
    })
  }

  onCreateBtnClick(): void {
    const dialogRef = this.dialog.open(CreateReqDialogComponent, { minWidth: "66%" });
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        console.warn("Y");
    });
  }

  onReloadBtnClick() {
    this.requestData();
  }
}
