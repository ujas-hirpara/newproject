import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNulll]'
})
export class NulllDirective {

  constructor(private element :ElementRef) { 
    element.nativeElement.value = ""
  }

}
