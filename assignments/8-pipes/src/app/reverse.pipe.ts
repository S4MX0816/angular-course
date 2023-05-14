import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    const arr = value.split('');
    const finalVal = arr.reverse().join('');
    return finalVal;
  }
}
