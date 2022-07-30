import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  // Structural Directives
  public age:number= 22;
  showData:boolean = false;
  names:any = ['Yogesh', 'Pradip', 'Sonal', 'Surekha'];
  num:any = 4;

  //Attribute Directives
  myClass1:any;
  myClass2:any;
  myStyle:any = {'color':'black', 'font-size': '20px', 'background-color': 'orange'};
  myClass3:any="test3";


  constructor() { }

  ngOnInit(): void {
  }

}
