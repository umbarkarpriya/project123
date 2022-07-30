import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string,): string {
         return value.split('').reverse().join('');
  /*transform(value: string, ...args:string[]): string{
         const test = value.split('');
         for (var i=1; i< test.length; i++)
         {
           if(i%2==0){
             test[0]=test[0].toLowerCase();
           }else{
            test[i]=test[i].toUpperCase();
           }
           return test.join('');
         }                                                                                                                                                                                                                                                                          
}*/
  }
}
