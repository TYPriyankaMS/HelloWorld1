import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Rocket1Service {
  employeeData
  name="PSLV1"
  constructor(private http:HttpClient) {

   }
   getDataFromAPI(){
       let observable= this.http.get("https://reqres.in/api/users?page=2")
       observable.subscribe((data)=>{
         console.log(data)
         this.employeeData=data
         console.log(this.employeeData)

       })
   }
   postDataToAPI(){
     let obj={
       "name" : "priyanka",
       "Job"  : "Software Engineer"
     }
        let observable=this.http.post("https://reqres.in/api/users",obj)
        return observable
   }
   putDataToAPI(){
     let obj={
       "name" : "priya",
       "job" : "software Developer"
     }
     let observable=this.http.put("https://reqres.in/api/users/2",obj)
     return observable
   }
   deleteDataFromAPI(){
    let observable= this.http.delete("https://reqres.in/api/users/id")
    return observable
   }
}
