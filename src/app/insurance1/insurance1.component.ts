import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance1',
  templateUrl: './insurance1.component.html',
  styleUrls: ['./insurance1.component.css']
})
export class Insurance1Component implements OnInit {

  constructor() { }
  name
  tenure
  nominee
  amount
  ngOnInit() {
  }
  sendData(){
    console.log(this.name,this.tenure,this.nominee,this.amount)
  }
}
