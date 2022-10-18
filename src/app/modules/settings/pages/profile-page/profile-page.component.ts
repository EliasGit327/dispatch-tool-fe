import { Component, OnInit } from '@angular/core';
import { HttpAuthService } from "../../../../core/web-data/http-auth/http-auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpUsersService } from "../../../../core/web-data/http-users/http-users.service";
import { IUserEntity } from "../../../../core/entities/user-entity";
import { UserRole } from "../../../../core/enums/user-role";
import { UserService } from "../../../../core/services/user.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit(): void {
  }


}
