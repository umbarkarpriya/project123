import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
//import { resolve } from 'dns';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor(private ser:DataService) { }
  //public userData:any;
  ngOnInit(): void {
    const prom =new Promise(function(resolve,reject){
    setTimeout(() => {
      resolve("resolve promise");
      reject("reject promise");
      
    },3000)
  });
    prom.
    then((value:any)=>{
      console.log("promise executed");
    })
    .catch((value:any)=>{
      console.log("promise not executed" +value); 
    });
    this.getPromiseAPIData();
  }
     
  getPromiseAPIData(){
    this.ser.getPromData()
    .then((res:any)=>{
      console.log(res);
  
    })
    .catch((err:any)=>{
      console.log(err);
    })
  }

}
