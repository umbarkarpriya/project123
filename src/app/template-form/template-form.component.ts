import { Component, OnInit } from '@angular/core';
//import { DataService } from '../service/data.service';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
         
  public courses: any = ['BE', 'BCOM', 'BSC', 'MTech', 'MSC'];
  
  
  constructor() { }

  ngOnInit(): void {

  }
  onSubmitForm(frm:any){
    console.log(frm.value);
    console.log(frm.value.email);
    //this.isSubmitted=true;

//     this.ser.sendData(this.frm.value).subscribe(
//       (res)=>{
//         console.log(res);
//       },
//       (err)=>console.log(err)
//     )
// }
}
}