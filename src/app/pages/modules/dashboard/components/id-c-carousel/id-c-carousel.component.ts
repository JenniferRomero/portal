import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GenerateQr } from 'src/app/core/models/generate-qr.model';
import { GenerateQrService } from 'src/app/services/services.index';

@Component({
  selector: 'app-id-c-carousel',
  templateUrl: './id-c-carousel.component.html',
  //styleUrls: ['./id-c-carousel.component.scss'],
  providers: [ TranslateService ]
})
export class IdCCarouselComponent implements OnInit {

  titleCarrusel: string;
  sliders: Array<any> = [];


  imagePathFirst: string;
  subtitleFirst: string;
  textFirst: string;
  imagePathSecond: string;
  subtitleSecond: string;
  textSecond: string;
  imagePathThird: string;
  subtitleThird: string;
  textThird: string;
  imagePathFourth: string;
  subtitleFourth: string;
  textFourth: string;

  constructor(private translate: TranslateService, private _generateQr: GenerateQrService) { }

  ngOnInit(): void {

    const idTransaction = '1';
    const channel = 'Web';

    const data = new GenerateQr(idTransaction, channel);
    /*this._generateQr.getQRCode(data).subscribe(resp => {
      console.log(resp);
    });*/

    this.titleCarrusel = this.translate.instant('carrusel.title');

    this.imagePathFirst = 'assets/images/carrusel.svg';
    this.subtitleFirst = 'carrusel.slideFirst.subtitle';
    this.textFirst = 'carrusel.slideFirst.text';
    this.imagePathSecond = 'assets/images/carrusel2.svg';
    this.subtitleSecond = 'carrusel.slideSecond.subtitle';
    this.textSecond = 'carrusel.slideSecond.text';
    //this.imagePathThird = qr;
    this.imagePathThird = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACEAQMAAABrihHkAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAw0lEQVRIie2VMQ7DUAhDuYHvf0vfwLVJK0UdWiXuWMJA3vCDkfmZ+ceXkEQB2qIgTMLPFgURHTiKkkzQjwhb4qTS5ln7daJ9Y6gakgD15obrxJ1pIGRmLIhrI+bwiuyJlnl85D5RVCJ9ahpic4uwUKEiPhNLBTYk3tyNG1XENgJ3cd1iQZZJsDHBikStnTBkQ45NeW5LQbKwmXv8OQ3ZmyRCX0rvE2T48XpJsidK1ZDNtfhJ+3Wyk9f+iM435GXyjw/xAPSVAhoWGEr8AAAAAElFTkSuQmCC";
    this.subtitleThird = 'carrusel.slideThird.subtitle';
    this.textThird = 'carrusel.slideThird.text';
    this.imagePathFourth = 'assets/images/carrusel3.svg';
    this.subtitleFourth = 'carrusel.slideFourth.subtitle';
    this.textFourth = 'carrusel.slideFourth.text';


    /*this.sliders.push(
      {
          imagePath: '../../../../assets/images/carrusel.svg',
          subtitle: 'carrusel.slideFirst.subtitle',
          text: 'carrusel.slideFirst.text'
      },
      {
          imagePath: '../../../../assets/images/carrusel2.svg',
          subtitle: 'carrusel.slideSecond.subtitle',
          text: 'carrusel.slideSecond.text'
      },
      {
          imagePath: this.imagePathThird,
          subtitle: 'carrusel.slideThird.subtitle',
          text: 'carrusel.slideThird.text'
      },
      {
          imagePath: '../../../../assets/images/carrusel3.svg',
          subtitle: 'carrusel.slideFourth.subtitle',
          text: 'carrusel.slideFourth.text'
      }
    );*/
  }

}
