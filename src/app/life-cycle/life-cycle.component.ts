import { Component, OnInit,  OnChanges,  DoCheck, AfterContentInit,  AfterContentChecked, AfterViewInit, AfterViewChecked,  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements 
  OnInit,
   OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy 
  {
  constructor() { 
    console.log("This is contructor method");
  }
  ngOnChanges():void{
    console.log("This is ngOnChanges method");
    console.log("hello");
  }

  ngOnInit(): void {
    console.log("This is oninit method");
  }
  ngDoCheck(){
    console.log("This is ngDocheck method");
  }

  ngAfterContentInit(): void {
    console.log("This is ngAfterContentInit method");  
  }

  ngAfterContentChecked(): void {
    console.log("This is ngAfterContentChecked method"); 
  }

  ngAfterViewInit(): void {
    console.log("This is ngAfterViewInit method"); 
  }

  ngAfterViewChecked(): void {
    console.log("This is ngAfterViewChecked method"); 
  }

 ngOnDestroy(): void {
  console.log("This is ngOnDestroy method"); 
 }

}
