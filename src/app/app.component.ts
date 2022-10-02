import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen: boolean = true;

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  showFiller: boolean = false;

  title = 'dispath-tool-fe';
}
