import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FoodiesComponent } from './foodies.component';
import { FoodiesDirective } from '../foodies.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [FoodiesComponent, FoodiesDirective],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap:[FoodiesComponent]
})
export class FoodiesModule { 
  
}
