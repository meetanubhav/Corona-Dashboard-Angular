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
  graphData : any [];
  casesInc : Number;
  totalActive : number;
  totalConfirm : number;
  totalRecovered : number;
  totalDeaths : number;
  serverResponse : boolean = true;
  constructor ( private service : DataService) { }

  ngOnInit(){
    // this.service.getData()
    // .subscribe(response => {
    //   this.myData = response.json();
    //   this.myData = Array(this.myData[this.myData.length-1]);
    this.service.getStateData()
      .subscribe(response => {
        this.myData = response.json();
        this.myData = this.myData["statewise"][0];
        this.totalActive = this.myData["active"];
        this.totalConfirm = this.myData["confirmed"];
        this.totalRecovered = this.myData["recovered"];
        this.totalDeaths = this.myData["deaths"];
        this.serverResponse = true;
    }, error => {
      this.serverResponse = false;
    })    

    this.service.getCountryGraph()
    .subscribe(x=>{
      this.graphData = x.json();
      this.casesInc = this.graphData[this.graphData.length-1].Cases - this.graphData[this.graphData.length-2].Cases;
    })

  }
  
  _currentDT : Number = Date.now();
  // total: number = this.myData.map(x=>x.cases).reduce((a,b)=>a+b);
  total: number = 20000;

  // keyData : any = Object.keys(stateWiseData)[0];

}