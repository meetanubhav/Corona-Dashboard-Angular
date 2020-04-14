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
  confirmedCase : Number;
  activeCase : Number;
  RecoveredCase : Number;
  DeceasedCase : Number;
  message : string = "No Country Selected"
  cssMsg : string = "alert alert-secondary text-uppercase mt-2";
  constructor(private service : DataService) { }

  ngOnInit() {
    this.service.getCountries()
    .subscribe( response =>
      {
        this.countrylist = response.json();
      }
    )
  }
  thisCountryData(value: any){
    this.countryName = value.target.value;

    this.service.getSelectedCountryStats(this.countryName)
    .subscribe( response => 
      {
        this.selectedCountryData = response.json();

        this.confirmedCase = this.selectedCountryData.reduce((a :Number , b) => a > b.Confirmed ? a : b.Confirmed,0);
        this.activeCase = this.selectedCountryData.reduce((a :Number , b) => a > b.Active ? a : b.Active,0);
        this.RecoveredCase = this.selectedCountryData.reduce((a :Number , b) => a > b.Recovered ? a : b.Recovered,0);
        this.DeceasedCase = this.selectedCountryData.reduce((a :Number , b) => a > b.Deaths ? a : b.Deaths,0);
        if(this.selectedCountryData.length===0){
          this.message = "This country has no covid-19 reports yet."
          this.cssMsg = 'alert alert-success text-uppercase mt-2';
        }
      }

    )
  }

}
