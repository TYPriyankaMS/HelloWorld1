import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RocketComponent } from './rocket/rocket.component';
import  {HttpClientModule} from '@angular/common/http';
import { InsuranceComponent } from './insurance/insurance.component';
import { MobileRechargeComponent } from './mobile-recharge/mobile-recharge.component';
import { VegComponent } from './veg/veg.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { OfferComponent } from './offer/offer.component'
import { RouterModule, Routes} from '@angular/router';
import { StartersComponent } from './starters/starters.component';
import { MaincourseComponent } from './maincourse/maincourse.component';
import { DesertsComponent } from './deserts/deserts.component';
import { Rocket1Component } from './rocket1/rocket1.component';
import { Insurance1Component } from './insurance1/insurance1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

let routes:Routes=[
   {component:VegComponent,path:"veg",children:[
     {component:StartersComponent,path:"starter"},
     {component:MaincourseComponent,path:"maincourse"},
     {component:DesertsComponent,path:"desserts"}
   ]},
   {component:NonvegComponent,path:"nonveg"},
  {component:OfferComponent,path:"offer"},
  {path:"**",redirectTo:"offer"}/* default path*/
]
@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TeacherComponent,
    StudentComponent,
    RocketComponent,
    InsuranceComponent,
    MobileRechargeComponent,
    VegComponent,
    NonvegComponent,
    OfferComponent,
    StartersComponent,
    MaincourseComponent,
    DesertsComponent,
    Rocket1Component,
    Insurance1Component,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  //bootstrap: [RocketComponent]
  //bootstrap:[MobileRechargeComponent]
 //bootstrap:[AppComponent]
// bootstrap:[Rocket1Component]
bootstrap:[Insurance1Component]
})
export class AppModule { }
