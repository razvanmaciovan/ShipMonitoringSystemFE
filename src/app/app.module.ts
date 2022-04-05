import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { PortApiService } from './port-api.service';
import { PortComponent } from './port/port.component';
import { ShowPortComponent } from './port/show-port/show-port.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    PortComponent,
    ShowPortComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PortApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
