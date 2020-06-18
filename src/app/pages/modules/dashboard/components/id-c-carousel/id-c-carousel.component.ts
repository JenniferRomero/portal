import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-id-c-carousel',
  templateUrl: './id-c-carousel.component.html',
  styleUrls: ['./id-c-carousel.component.scss'],
  providers: [ TranslateService ]
})
export class IdCCarouselComponent implements OnInit {

  titleCarrusel: string;
  sliders: Array<any> = [];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {

    this.titleCarrusel = this.translate.instant('carrusel.title');

    this.sliders.push(
      {
          imagePath: '../../../../assets/images/carrusel.png',
          subtitle: 'carrusel.slideFirst.subtitle',
          text: 'carrusel.slideFirst.text'
      },
      {
          imagePath: '../../../../assets/images/carrusel2.png',
          subtitle: 'carrusel.slideSecond.subtitle',
          text: 'carrusel.slideSecond.text'
      },
      {
          imagePath: '../../../../assets/images/qr.png',
          subtitle: 'carrusel.slideThird.subtitle',
          text: 'carrusel.slideThird.text'
      },
      {
          imagePath: '../../../../assets/images/carrusel3.png',
          subtitle: 'carrusel.slideFourth.subtitle',
          text: 'carrusel.slideFourth.text'
      }
    );
  }

}
