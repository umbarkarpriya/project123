import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public Samplestring:string = "";
  public link:any;
  public fullName:String = "mahi vaidya";
  constructor() { }

  ngOnInit(): void {

    //Interpolation
    this.Samplestring="Welcome to my home";

    //Attribute Binding
    this.link="https://www.Facebook.com/";
  }
  showElement(){
    console.log("Hello this is event");
  }

  


}
