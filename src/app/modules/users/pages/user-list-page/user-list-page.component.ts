import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { UserRole } from "../../../../core/enums/user-role";
import { HttpUsersService } from "../../../../core/web-data/http-users/http-users.service";
import { IUserEntity } from "../../../../core/entities/user-entity";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  dataSource!: MatTableDataSource<IUserEntity>;
  displayedColumns: string[] = ["_id", "name", "role", "createdAt", "isActive", "actions"];
  userRole = UserRole;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  isLoading: boolean = false;

  constructor(
    private httpUsers: HttpUsersService,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource([] as IUserEntity[]);
  }

  ngOnInit(): void {
    this.requestUsers();
  }

  onDetailsBtnClick(id: string): void {
    this.router.navigate(["/user", id]).then();
  }

  requestUsers(): void {
    this.isLoading = true;
    const sub = this.httpUsers.getUsersFullData().subscribe({
      next: (data) => this.dataSource.data = data,
      error: (e) => console.error(e.error)
    });
    sub.add(() => this.isLoading = false);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
