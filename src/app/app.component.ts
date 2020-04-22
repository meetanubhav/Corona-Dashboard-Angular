import { Component, OnInit, Input } from '@angular/core';
// import { Data } from '@angular/router';
import { DataService } from './data.service';
import { error } from '@angular/compiler/src/util';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  myData : any[];
  casesIncreased : number;
  dailyData : any [];
  totalActive : number;
  totalConfirm : number;
  totalRecovered : number;
  totalDeaths : number;
  dailyConfirmed : number;
  dailyRecovered : number;
  dailyDeaths : number;
  stateData : any[];
  serverResponse : boolean = false;
  constructor ( private service : DataService,
                private metaTagService: Meta ) { }

  ngOnInit(){
    this.service.getData()
      .subscribe(response => {
        this.myData = response;
        this.stateData = this.myData['statewise'];
        this.dailyData = this.myData['cases_time_series'][this.myData['cases_time_series'].length - 1];
        this.myData = this.myData["statewise"][0];
        this.totalActive = this.myData["active"];
        this.totalConfirm = this.myData["confirmed"];
        this.totalRecovered = this.myData["recovered"];
        this.totalDeaths = this.myData["deaths"];
        this.dailyConfirmed = this.dailyData["dailyconfirmed"];
        this.dailyRecovered = this.dailyData["dailyrecovered"];
        this.dailyDeaths = this.dailyData["dailydeceased"];
        // this.casesIncreased = this.totalConfirm - this.myData["cases_time_series"][0]["dailyconfirmed"];
        // console.log(this.myData["cases_time_series"]);
        this.serverResponse = true;
    }, error => {
      this.serverResponse = false;
      console.log(error.status);
    })    

    this.metaTagService.addTags([
      { name: 'keywords', content: 'COVID19 , Covid19 , covid19 , COVID-19 , covid-19 , corona , corona live status , covid 19 live status , covid india , corona india live status ' },
      { name: 'description', content: `Covid 19 is a Chinese originated virus infected dieases in 2019 . And this
      has created a panademic worldwide. This website helps to know the status of the spread of virus and infected peoplein different
      region . This is an non profitable portal and initiative` },
      { name: 'author', content: 'Anubhav Gupta' },
      { charset: 'UTF-8' }
    ]);

  }
  
  currentDT : Number = Date.now();
  // total: number = this.myData.map(x=>x.cases).reduce((a,b)=>a+b);
  total: number = 20000;

  // keyData : any = Object.keys(stateWiseData)[0];

}