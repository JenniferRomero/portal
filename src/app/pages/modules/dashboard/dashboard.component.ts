import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  bienvenido: string;
  textBienvenida: any;
  textHelp: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.bienvenido = this.translate.instant('welcome.bienvenido');
    this.textBienvenida = this.translate.instant('welcome.texto-bienvenida');
    this.textHelp = this.translate.instant('welcome.texto-ayuda');
  }

}
