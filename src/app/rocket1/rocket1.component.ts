import { Component, OnInit } from '@angular/core';
import { Rocket1Service } from '../rocket1.service';

@Component({
  selector: 'app-rocket1',
  templateUrl: './rocket1.component.html',
  styleUrls: ['./rocket1.component.css']
})
export class Rocket1Component implements OnInit {
    name
  constructor(private service:Rocket1Service) { }


  ngOnInit() {
   this.name= this.service.name
   console.log(this.name)
  }

  getData(){
    
  }
  postData(){
    let observable=this.service.postDataToAPI()
                    observable.subscribe((response)=>{
                      console.log(response)
                    })
  }
  putData(){
    let observable=this.service.putDataToAPI()
                    observable.subscribe((response)=>{
                      console.log(response)
                    })  
                    }
  deleteData(){
         let observable=this.service.deleteDataFromAPI()
                        observable.subscribe((response)=>{
                          console.log(response)
                        })
                    }
  }


