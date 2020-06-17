import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-id-c-user',
  templateUrl: './id-c-user.component.html',
  styleUrls: []
  //styleUrls: ['./id-c-user.component.scss']
})
export class IdCUserComponent implements OnInit {

  titleUser: string;
  textUser: string;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.titleUser = this.translate.instant('welcome.titulo-registro');
    this.textUser = this.translate.instant('welcome.texto-registro');
  }

}
