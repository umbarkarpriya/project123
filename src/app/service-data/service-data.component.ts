import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { observable } from 'rxjs';
@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {
  
    public allData:any;
    public userData:any;
  constructor( private tempSer: DataService) {
     
    console.log("Component constructor");
    this.getDataFromBackend();
    this.getAllDataFromBackend();
    //this.tempSer.getData();
    //console.log(this.tempSer.data1);
   }

  ngOnInit(): void {
  }

  getDataFromBackend(){
    console.log(this.tempSer.getData());

    this.tempSer.getData().subscribe(
      (res)=>{
      console.log(res);
      this.userData= res;
      },
    (err)=>{
      console.log(err);
    }
    )
  }

  getAllDataFromBackend(){
    this.tempSer.getAllData().subscribe(
      (res)=>{
        console.log(res);
        this.allData= res;
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  
}
