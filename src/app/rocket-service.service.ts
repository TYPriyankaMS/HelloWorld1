import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RocketServiceService {

  rocketName="PSLV46"
  constructor(private http:HttpClient) {
   }

   getDataFromAPI(){
     console.log("entering service")
     //API Calls
    // let employeeData

     let observable=this.http.get("https://reqres.in/api/users?page=2");
    /* observable.subscribe( (data)=>{
                employeeData=data
                console.log("this is inside service")
                console.log(employeeData)
                console.log("done")
      } )
      return employeeData*/
      return observable
   }
   postDataToAPI(){
     let obj={
       "name":"priyanka",
       "job":"SE"
     }
    let observable =this.http.post("https://reqres.in/api/users",obj)
     return observable
   }
   updateDataInAPI(){
    let obj={
      "name":"priya",
      "job":"SE"
    }
    let observable=this.http.put("https://reqres.in/api/users/2",obj)
    return observable

   }
   deleteDataFromAPI(){
    let observable=this.http.delete("https://reqres.in/api/users/2")
    return observable

   }
}
