import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-bielsa',
  templateUrl: './bielsa.page.html',
  styleUrls: ['./bielsa.page.scss'],
  standalone: false,
})
export class BielsaPage implements OnInit {
  iframeSrc!: SafeResourceUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    //this.fetchPageContent();
    //this.refreshIframe();
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.bielsa-aragnouet.org/'
    );
  }

  refreshIframe() {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(''); // Limpia la fuente del iframe
    setTimeout(() => {
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.bielsa-aragnouet.org/'
      ); // Restablece la fuente del iframe
    }, 100);
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    console.log('Infinite scroll event', ev);
    this.refreshIframe();
    setTimeout(() => {
      ev.target.complete();
    }, 500);
  }

  fetchPageContent() {
    this.http
      .get('https://www.bielsa-aragnouet.org/', { responseType: 'text' })
      .pipe(
        catchError((error) => {
          console.error('Error fetching page content', error);
          return of('');
        })
      )
      .subscribe((response) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(response, 'text/html');
        const elements = doc.querySelectorAll('road'); // Replace 'your-selector' with the actual selector
        elements.forEach((element) => {
          console.log(element.textContent);
        });
      });
  }
}
