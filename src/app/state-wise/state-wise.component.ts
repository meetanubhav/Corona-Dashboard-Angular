import { AppComponent } from './../app.component';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.css']
})
export class StateWiseComponent implements OnInit {

  stateData : any[];

  constructor(private service : DataService) { }

  ngOnInit() {
    this.service.getData()
    .subscribe(response => {
      this.stateData = response["statewise"];
    })
  }

}
