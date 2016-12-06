import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroToHyphen'
})
export class ZeroToHyphenPipe implements PipeTransform {

  transform(value: number): any {
      if(value == 0){return '-';}
      return value;
  }

}
