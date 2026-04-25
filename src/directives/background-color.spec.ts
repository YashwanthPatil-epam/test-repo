import { ElementRef } from '@angular/core';
import { BackgroundColor } from './background-color';

describe('BackgroundColor', () => {
  it('should create an instance', () => {
   const el = { nativeElement: document.createElement('div') } as ElementRef;
    const directive = new BackgroundColor(el);
    expect(directive).toBeTruthy();
  });
});
