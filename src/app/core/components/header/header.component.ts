import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() onMenuClick = new EventEmitter<void>();

  constructor(
    public authService: UserService,
  ) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.authService.logOut();
  }
}
