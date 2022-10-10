import { Component, OnInit } from '@angular/core';
import { HttpUsersService } from "../../../../core/web-data/http-users/http-users.service";
import { ActivatedRoute } from "@angular/router";
import { IUserEntity } from "../../../../core/entities/user-entity";
import { UserRole } from "../../../../core/enums/user-role";

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit {
  id: string | null;
  user?: IUserEntity;
  isLoading: boolean = false;
  userRole = UserRole;

  constructor(
    private httpUsers: HttpUsersService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.requestUser();
  }

  requestUser(): void {
    this.isLoading = true;
    if (this.id) {
      const sub = this.httpUsers.getUser(this.id)
        .subscribe({
          next: (data) => this.user = data,
          error: (e) => console.error(e.error)
        });
      sub.add(() => this.isLoading = false);
    }
  }

}
