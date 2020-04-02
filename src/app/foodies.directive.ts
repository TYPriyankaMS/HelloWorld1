import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFoodies]'
})
export class FoodiesDirective {

  constructor(private element:ElementRef) {
    console.log(element.nativeElement.style)
    element.nativeElement.style.color="red"
    element.nativeElement.style.fontSize="30px"
    element.nativeElement.style.backgroundColor="black"
    element.nativeElement.style.textTransform="uppercase"
    element.nativeElement.style.display="none"
   }

}
