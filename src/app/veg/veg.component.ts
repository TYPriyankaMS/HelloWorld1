import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {

  devName
  constructor(private router:Router,private actrouter:ActivatedRoute) {

    this.devName=actrouter.params['_value'].name
   }
   routeToStarter(){
      this.router.navigate(["veg/starter"])
   }
   routeToMainCourse(){
     this.router.navigate(["veg/maincourse"])
   }
   routeToDesserts(){
     this.router.navigate(["veg/desserts"])

   }

  ngOnInit() {
  }

}
