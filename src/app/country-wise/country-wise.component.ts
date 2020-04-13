import { Data } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-wise',
  templateUrl: './country-wise.component.html',
  styleUrls: ['./country-wise.component.css']
})
export class CountryWiseComponent implements OnInit {
  
  countrylist : any[];
  countryName : string = "";
  selectedCountryData : any[] = [];
  message : string = "No Country Selected"
  constructor(private service : DataService) { }

  ngOnInit() {
    this.service.getCountries()
    .subscribe( response =>
      {this.countrylist = response.json();}
    )
    console.log(this.selectedCountryData.length + "what ?");
  }
  thisCountryData(value: any){
    this.countryName = value.target.value;
    console.log(this.countryName+"...");

    this.service.getSelectedCountryStats(this.countryName)
    .subscribe( response => 
      {
        this.selectedCountryData = response.json();
        if(this.selectedCountryData.length==0){
          this.message = "This country has no covid-19 reports yet."
        }
        console.log(this.selectedCountryData);
      }

    )
  }

}
