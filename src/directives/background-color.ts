import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
})
export class BackgroundColor {
  constructor(private el : ElementRef) {
this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
