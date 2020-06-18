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
    // console.log(this.translate.instant('carrusel.titulo'));

    this.sliders.push(
      {
          imagePath: '../../../../assets/images/carrusel.png',
          subtitle: this.translate.instant('carrusel.slideFirst.subtitle'),
          text: this.translate.instant('carrusel.slideFirst.text')
      },
      {
          imagePath: '../../../../assets/images/carrusel2.png',
          subtitle: this.translate.instant('carrusel.slideSecond.subtitle'),
          text: this.translate.instant('carrusel.slideSecond.text')
      },
      {
          imagePath: '../../../../assets/images/qr.png',
          subtitle: this.translate.instant('carrusel.slideThird.subtitle'),
          text: this.translate.instant('carrusel.slideThird.text')
      },
      {
          imagePath: '../../../../assets/images/carrusel3.png',
          subtitle: this.translate.instant('carrusel.slideFourth.subtitle'),
          text: this.translate.instant('carrusel.slideFourth.text')
      }
    );
  }

}
