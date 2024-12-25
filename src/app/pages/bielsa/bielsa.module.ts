import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BielsaPageRoutingModule } from './bielsa-routing.module';

import { BielsaPage } from './bielsa.page';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MyInterceptor } from 'src/app/share/html/my-interceptor';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BielsaPageRoutingModule],
  declarations: [BielsaPage],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
  ],
})
export class BielsaPageModule {}
