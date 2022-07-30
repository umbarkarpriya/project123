import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustDir]'
})
export class CustDirDirective {

  constructor(private ele: ElementRef) { 
   this.ele.nativeElement.style.background ="violet";
    this.ele.nativeElement.style.color ="red";
  }

}
