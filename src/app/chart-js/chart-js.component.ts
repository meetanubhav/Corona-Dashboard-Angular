import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import * as $ from 'jquery';
import * as CanvasJS from '../../assets/canvasjs.min'

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.css']
})
export class ChartJsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let dataPoints = [];
	let dpsLength = 0;
	let chart = new CanvasJS.Chart("chartContainer",{
    animationEnabled: true,
    axisX: {
      valueFormatString: "MMM DD YYYY"
    },
    axisY: {
      title: "No of Cases",
    },
    
		data: [{
      type: "spline",
			dataPoints : dataPoints,
		}]
	});
	
	$.getJSON("https://api.covid19api.com/total/dayone/country/india/status/confirmed", function(data) {  
		$.each(data, function(key, value){
      var year = parseInt((value.Date).slice(0,4));
      var month = parseInt((value.Date).slice(5,7))-1;
      var date = parseInt((value.Date).slice(8,10));
      // dataPoints.push({x: parseInt(String((value.Date).slice(5,7))+String((value.Date).slice(8,10))), y: parseInt(value.Cases)});
      dataPoints.push({x: new Date(year,month,date) , y: parseInt(value.Cases)});
    });
		dpsLength = dataPoints.length;
    chart.render();
    
    
  });
  
  }

}
