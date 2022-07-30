import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  test1:string="Angular Pipes";
  test2:string="Hello World";
  test3:string="Angular";
  test4:string="Angular";
  student={
    fname: 'Mahi',
    lname: 'Mane',
    age: 25,
    address: 'satara',
  };
  employee={
    fname: 'vikas',
    lname:'wadkar',
    age :30,
    address: 'Pune',
  }
  date = new Date();
  salary = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
