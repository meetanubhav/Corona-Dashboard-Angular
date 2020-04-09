import { Component, OnInit } from '@angular/core';
import { StateDistrictWise } from './StateDistrictWise';

@Component({
  selector: 'app-state-district',
  templateUrl: './state-district.component.html',
  styleUrls: ['./state-district.component.css']
})
export class StateDistrictComponent implements OnInit {

  StateDistrictWise ;
  constructor() { }

  ngOnInit() {
  }
  stateValue :  string = "Kerala";
  
  stateDistricData(value:string){
    this.stateValue = value;
  }

  // output = StateDistrictWise.map(ddata => ddata.districtData.map(y => y.district));
  output = StateDistrictWise.map(x=>x.districtData.map(y=>y.district))
}