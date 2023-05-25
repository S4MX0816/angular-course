import { APP_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: APP_ID, useValue: 'manually-setup-ng-universal-app' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
