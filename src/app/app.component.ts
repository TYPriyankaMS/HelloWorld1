import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private router:Router){
  
}
routeToVeg(){
  this.router.navigate(["/veg",{name:"priyanka"}])
}
routeToNonVeg(){
  this.router.navigate(["/nonveg"])
}
  name = 'Priyanka';
  course = 'Angular training';
  num=5;
  a1=5;
  a2=8;
  b;

  clicked=(mesg)=>{
    console.log("clickking me"+mesg)
  }

  increment=()=>{
    this.num=this.num+1;
  }

  add=()=>{
   this.b= this.a1+this.a2;
  }
  sub=()=>{
    this.b=this.a1-this.a2;
  }
  mul=()=>{
    this.b=this.a1*this.a2;
  }
  div=()=>{
    this.b=this.a1/this.a2;
  }
 
}
 