import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telegram-settings',
  templateUrl: './telegram-settings.component.html',
  styleUrls: ['./telegram-settings.component.css']
})
export class TelegramSettingsComponent implements OnInit {
  telegramId?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
