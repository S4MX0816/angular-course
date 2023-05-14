import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform<T extends Record<string, any>>(value: T[], propName: keyof T): any {
    value.sort((a, b) => a[propName].localeCompare(b[propName]));
    return value;
  }
}
