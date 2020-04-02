import { Component, OnInit } from '@angular/core';
import { RocketServiceService } from '../rocket-service.service';
@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  name
  employeeData
  constructor(private service:RocketServiceService) { }

  ngOnInit() {
    this.name=this.service.rocketName
    console.log(this.service.rocketName)
    //let service=new RocketServiceService()
   // console.log(service.rocketName)
  }
  getData(){
    console.log("1st line of  component")
  /* this.employeeData=this.service.getDataFromAPI()
   console.log(this.employeeData)*/

   let observable=this.service.getDataFromAPI()
  /* observable.subscribe((data)=>{
      console.log(data);
      this.employeeData=data*/
      observable.subscribe((response)=>{
      this.employeeData=response['data']
      console.log(this.employeeData)
         } )
  }
  postData(){
    let observable= this.service.postDataToAPI()
                    observable.subscribe((response)=>{
                      console.log(response)
                    })
  }
  putData(){

   let observable= this.service.updateDataInAPI()
                  observable.subscribe((response)=>{
                    console.log(response)
                  })

  }
  deleteData(){
 let observable =  this.service.deleteDataFromAPI()
                    observable.subscribe((response)=>{
                      console.log(response)
                    })

  }
}
