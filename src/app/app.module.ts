import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GooglePlacesService } from './google-places.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [GooglePlacesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
