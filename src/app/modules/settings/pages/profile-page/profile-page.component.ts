import { Component, OnInit } from '@angular/core';
import { HttpAuthService } from "../../../../core/web-data/http-auth/http-auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(
    private httpAuth: HttpAuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onTestBtnClick(): void {
    const sub = this.httpAuth.testAuth().subscribe({
      next: (response) => this.snackBar.open(response.message, 'Close', { duration: 2000 }),
      error: (e) => console.error(e)
    });
  }
}
