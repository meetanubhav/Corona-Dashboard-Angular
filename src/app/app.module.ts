import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgForm, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StateDistrictComponent } from './state-district/state-district.component';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      StateDistrictComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
