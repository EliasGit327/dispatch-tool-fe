import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../core/services/user.service";
import { UserRole } from "../../../../core/enums/user-role";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(
    private userService: UserService
  ) {
    this.isAdmin = userService.role === UserRole.Admin;
  }

  ngOnInit(): void {
  }

}
