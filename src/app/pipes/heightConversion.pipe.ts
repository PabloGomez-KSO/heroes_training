import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'heightPipe'
})
export class HeightConversionPipe implements PipeTransform {
  /**
   * This method transform a height in feet into meters.
   */
  transform(value: number): number {
    let heightInMeters = value*0.3048;
    return Number(heightInMeters.toFixed(2));
  }
}
