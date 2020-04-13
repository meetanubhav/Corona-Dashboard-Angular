import { Component, OnInit } from '@angular/core';
// import { Data } from '@angular/router';
import { DataService } from './data.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  myData : any[];
  serverResponse : boolean = true;
  constructor ( private service : DataService) { }

  ngOnInit(){
    this.service.getData()
    .subscribe(response => {
      this.myData = response.json();
      this.serverResponse = true;
    }, error => {
      this.serverResponse = false;
    })
  }
  
  _currentDT : Number = Date.now();
  // total: number = this.myData.map(x=>x.cases).reduce((a,b)=>a+b);
  total: number = 20000;

  // keyData : any = Object.keys(stateWiseData)[0];

}