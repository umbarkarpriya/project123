import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {  filter, map, of, pipe  } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor() { }

  dataStream : any;
  ngOnInit(): void {
    
         //1]from
         this.dataStream = from([1,2,3,4,5]);
         this.dataStream.subscribe((res:any)=>{console.log(res)})

         //2]of
          this.dataStream= of(12,24,56,23,45);
          console.log(this.dataStream);

          //map/pipe/filter
          this.dataStream.pipe(map((x:any)=>x*5),
          filter((y:any)=> y % 2 ===0)).subscribe((res:any)=>{
            console.log(res);
          });
       
        }

}
