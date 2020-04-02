import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})

export class TreeComponent implements OnInit {
  name1="priyanka"
  toggle=false
  constructor() { }

  ngOnInit() {
  }
  togglefunc=()=>{
   /*   
    if(this.toggle==false){
      this.toggle=true
    }else if(this.toggle==true){
      this.toggle=false
    }*/
    this.toggle=!this.toggle
  }

  fruit;

  getFruit=()=>{
    this.fruit="orange";
  }

  trees=["Banyan","neem","coconut","Mango","JackFruit"]//arrays

  laptop1={name:"Dell", price:50000000}//objects
  laptop2={name:"HP", price:40000000}

  laptops=[this.laptop1,this.laptop2]

  studentMarks=60



  



}
