import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import {NgForm, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CountryWiseComponent } from './country-wise/country-wise.component';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      CountryWiseComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpModule
   ],
   providers: [
      DataService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
