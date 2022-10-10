import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isOpen: boolean = true;

  title = 'dispath-tool-fe';

  ngOnInit(): void {
  }
}
