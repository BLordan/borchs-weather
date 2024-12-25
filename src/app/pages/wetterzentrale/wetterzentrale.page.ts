import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Link } from 'src/app/share/interfaces/link';

@Component({
  selector: 'app-wetterzentrale',
  templateUrl: './wetterzentrale.page.html',
  styleUrls: ['./wetterzentrale.page.scss'],
  standalone: false,
})
export class WetterzentralePage implements OnInit {
  espanaGEM: Link[] = [];
  espanaARPEGE: Link[] = [];
  europe: Link[] = [];

  prefersDark = false;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleTheme();
    }
    this.espanaGEM = [
      {
        id: 1,
        zone: 'Nieve',
        image: 'https://www.wetterzentrale.de/maps/GEMOPSP00_3_25.png',
        url: 'https://www.wetterzentrale.de/maps/GEMOPSP00_{0}_25.png',
      },
      {
        id: 2,
        zone: 'Precipitacion',
        image: 'https://www.wetterzentrale.de/maps/GEMOPSP00_6_4.png',
        url: 'https://www.wetterzentrale.de/maps/GEMOPSP00_{0}_4.png',
      },
    ];

    this.espanaARPEGE = [
      {
        id: 1,
        zone: 'Nieve',
        image: 'https://www.wetterzentrale.de/maps/ARPOPEU12_3_25.png',
        url: 'https://www.wetterzentrale.de/maps/ARPOPEU12_{0}_25.png',
      },
      {
        id: 2,
        zone: 'Precipitacion',
        image: 'https://www.wetterzentrale.de/maps/ARPOPEU12_6_4.png',
        url: 'https://www.wetterzentrale.de/maps/ARPOPEU12_{0}_4.png',
      },
    ];

    this.europe = [
      {
        id: 1,
        zone: 'Nieve',
        image: 'https://www.wetterzentrale.de/maps/GEMOPEU00_3_25.png',
        url: 'https://www.wetterzentrale.de/maps/GEMOPEU00_{0}_25.png',
      },
      {
        id: 2,
        zone: 'Precipitaciones',
        image: 'https://www.wetterzentrale.de/maps/GEMOPEU00_3_4.png',
        url: 'https://www.wetterzentrale.de/maps/GEMOPEU00_{0}_4.png',
      },
    ];
  }

  async viewPrediction(imageUrl: string) {
    // const modal = await this.modalController.create({
    //   component: WetterImageModalComponent,
    //   componentProps: {
    //     image: imageUrl,
    //   },
    //   cssClass: 'custom-modal',
    // });
    // return await modal.present();
  }

  toggleTheme() {
    this.prefersDark = !this.prefersDark;
    document.body.classList.toggle('dark', this.prefersDark);
  }

  // viewPrediction(imageUrl: string) {
  //   const popup = document.createElement('app-image-popup');
  //   popup.setAttribute('imageUrl', imageUrl);
  //   document.body.appendChild(popup);
  // }
}
