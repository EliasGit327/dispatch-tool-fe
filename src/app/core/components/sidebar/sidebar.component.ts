import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from "../../services/user.service";
import { UserRole } from "../../enums/user-role";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() afterSelect = new EventEmitter<void>();
  isAdmin: boolean = false;

  constructor(
    private userService: UserService
  ) {
    this.isAdmin = this.userService.role === UserRole.Admin;
  }

  ngOnInit(): void {
  }

  onSelect(): void {
    this.afterSelect.emit();
  }
}
