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

    this.titleCarrusel = this.translate.instant('carrusel.titulo');
    // console.log(this.translate.instant('carrusel.titulo'));

    this.sliders.push(
      {
          imagePath: '../../../../assets/images/carrusel.png',
          subtitle: this.translate.instant('carrusel.slideFirst.subtitulo'),
          text: this.translate.instant('carrusel.slideFirst.texto')
      },
      {
          imagePath: '../../../../assets/images/carrusel2.png',
          subtitle: this.translate.instant('carrusel.slideSecond.subtitulo'),
          text: this.translate.instant('carrusel.slideSecond.texto')
      },
      {
          imagePath: '../../../../assets/images/qr.png',
          subtitle: this.translate.instant('carrusel.slideThird.subtitulo'),
          text: this.translate.instant('carrusel.slideThird.texto')
      },
      {
          imagePath: '../../../../assets/images/carrusel2.png',
          subtitle: this.translate.instant('carrusel.slideFourth.subtitulo'),
          text: this.translate.instant('carrusel.slideFourth.texto')
      }
    );
  }

}
