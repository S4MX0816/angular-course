import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './welcome/details/details.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, DetailsComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
