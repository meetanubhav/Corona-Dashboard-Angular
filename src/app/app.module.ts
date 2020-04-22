import { MatIcon } from '@angular/material/icon';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {NgForm, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CountryWiseComponent } from './country-wise/country-wise.component';
import { FooterComponent } from './footer/footer.component';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { StateWiseComponent } from './state-wise/state-wise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSpinner } from '@angular/material/progress-spinner';
@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      CountryWiseComponent,
      FooterComponent,
      ChartJsComponent,
      StateWiseComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatSpinner,
   ],
   providers: [
      DataService,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
