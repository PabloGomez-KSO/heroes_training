import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'idPipe'
})
export class IdConversionPipe implements PipeTransform {
  /**
   * This method gets the ordinal number suffix
   */
  transform(value: number): string {
    switch(value){
      case 1:
        return value + "st";
      case 2:
        return value + "nd";
      case 3:
        return value + "rd";
      default:
        return value + "th";
    }
  }

}
