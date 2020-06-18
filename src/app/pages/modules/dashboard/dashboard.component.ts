import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  welcome: string;
  textWelcome: any;
  textHelp: string;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.welcome = this.translate.instant('dashboard.welcome');
    this.textWelcome = this.translate.instant('dashboard.text-welcome');
    this.textHelp = this.translate.instant('dashboard.text-help');
  }

}
