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

    const qr = "data:image/png;base64,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";
    this.titleCarrusel = this.translate.instant('carrusel.title');

    this.imagePathFirst = 'assets/images/carrusel.svg';
    this.subtitleFirst = 'carrusel.slideFirst.subtitle';
    this.textFirst = 'carrusel.slideFirst.text';
    this.imagePathSecond = 'assets/images/carrusel2.svg';
    this.subtitleSecond = 'carrusel.slideSecond.subtitle';
    this.textSecond = 'carrusel.slideSecond.text';
    this.imagePathThird = qr;
    //this.imagePathThird = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACEAQMAAABrihHkAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAw0lEQVRIie2VMQ7DUAhDuYHvf0vfwLVJK0UdWiXuWMJA3vCDkfmZ+ceXkEQB2qIgTMLPFgURHTiKkkzQjwhb4qTS5ln7daJ9Y6gakgD15obrxJ1pIGRmLIhrI+bwiuyJlnl85D5RVCJ9ahpic4uwUKEiPhNLBTYk3tyNG1XENgJ3cd1iQZZJsDHBikStnTBkQ45NeW5LQbKwmXv8OQ3ZmyRCX0rvE2T48XpJsidK1ZDNtfhJ+3Wyk9f+iM435GXyjw/xAPSVAhoWGEr8AAAAAElFTkSuQmCC";
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
