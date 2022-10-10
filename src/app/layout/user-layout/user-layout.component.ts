import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {
  isOpen: boolean = true;
  isMobile: boolean = false;

  constructor(public breakpointObserver: BreakpointObserver) {
  }

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }


  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = false;
          this.isOpen = true;
        } else {
          this.isMobile = true;
          this.isOpen = false;
        }
      });
  }

  onSidenavSelect() {
    if (this.isMobile)
      this.isOpen = false;
  }
}
