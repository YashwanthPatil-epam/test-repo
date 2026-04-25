import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasepipe',
})
export class UppercasepipePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}



