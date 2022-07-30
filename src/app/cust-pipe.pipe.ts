import { Pipe, PipeTransform } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Pipe({
  name: 'custPipe'
})
export class CustPipePipe implements PipeTransform {

 // transform(value: any, ...args: any[]): any {
    transform(value: string, ...args: string[]): any{
    //console.log(value);
    // console.log(args);
    //let res = value +5;
    //return value - args[0];
    const test = value.split('');
    for (var i=1; i< test.length; i++)
    
      if(i%2 === 0){
        test[0]=test[0].toLowerCase();
      }else{
       test[i]=test[i].toUpperCase();
      }
      return test.join('');
                              
    
  }

}
