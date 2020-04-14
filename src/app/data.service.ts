import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  // private url = 'https://api.data.gov.in/resource/cd08e47b-bd70-4efb-8ebc-589344934531?limit=all&api-key=579b464db66ec23bdd000001cdc3b564546246a772a26393094f5645&format=viz';
  private url = 'https://api.covid19api.com/live/country/india/status/confirmed';
  private countryList = 'https://api.covid19api.com/countries';
  private covid19indiaorgUrl = 'https://api.covid19india.org/data.json';

  constructor(private http : Http) { }

  getData(){
    return this.http.get(this.covid19indiaorgUrl)
    .map((response:any) => response.json());
  }
  getCountries(){
    return this.http.get(this.countryList)
    .map((response:any) => response.json());
  }
  getSelectedCountryStats(value:string){
    return this.http.get('https://api.covid19api.com/live/country/'+value+'/status/confirmed')
    .map((response:any) => response.json());
  }

  
}
