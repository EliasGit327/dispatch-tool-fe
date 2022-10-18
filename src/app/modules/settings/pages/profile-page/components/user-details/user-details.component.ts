import { Component, OnInit } from '@angular/core';
import { HttpAuthService } from "../../../../../../core/web-data/http-auth/http-auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpUsersService } from "../../../../../../core/web-data/http-users/http-users.service";
import { IUserEntity } from "../../../../../../core/entities/user-entity";
import { UserRole } from "../../../../../../core/enums/user-role";
import { UserService } from "../../../../../../core/services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  isLoading: boolean = false;
  user?: IUserEntity;
  userRole = UserRole;

  constructor(
    private httpAuth: HttpAuthService,
    private snackBar: MatSnackBar,
    private httpUser: HttpUsersService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.isLoading = true;
    const sub = this.httpUser.getLoggedUserData()
      .subscribe({
        next: (data) => this.user = data,
        error: (e) => this.snackBar.open(e.error.message, 'Close', {duration: 2000}),
      });
    sub.add(() => this.isLoading = false);
  }

  onRefreshBtnClick() {
    this.getData();
  }
}
