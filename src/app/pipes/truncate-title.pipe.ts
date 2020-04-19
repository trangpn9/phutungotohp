import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateTitle'
})
export class TruncateTitlePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    let trail = args.length > 1 ? args[1] : '...';
    let splitValue = value.split(" ");
    let result;
    // value.length > limit ? value.substring(0, limit) + trail : value;
    if (splitValue.length > limit) {
      result = (splitValue.slice(0, limit)).join(' ') + trail;
    } else {
      result = value;
    }
    return result; 
  }

}
