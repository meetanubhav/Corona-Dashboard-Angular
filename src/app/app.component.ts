import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  _currentDT : Number = Date.now();

  cases : number = 5219;

  stateWiseData = [
    {
    "state":"Maharastra",
    "cases":1200
    },
    {
      "state":"Tamil Nadu",
      "cases":729
    },
    {
      "state":"Delhi",
    "cases":674
    }
  ]

}