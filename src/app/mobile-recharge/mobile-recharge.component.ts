import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobile-recharge',
  templateUrl: './mobile-recharge.component.html',
  styleUrls: ['./mobile-recharge.component.css']
})
export class MobileRechargeComponent implements OnInit {

 /* mobileNum=new FormControl()
  operator=new FormControl()
  area =new FormControl()
  amount=new FormControl()
  rechargeGroup=new FormGroup({
    mobile:this.mobileNum,
    operator:this.operator,
    area:this.area,
    amount:this.amount
  })*/

  constructor(private builder:FormBuilder) { }
  rechargeGroup
  ngOnInit() {
    this.rechargeGroup=this.builder.group({
      mobile:[null,[Validators.required]] ,
      operator:['',[Validators.required,Validators.minLength(3)]],
      area:['karnataka'],
      amount:[null,[Validators.required,Validators.min(50)]]
    })
  }

}
