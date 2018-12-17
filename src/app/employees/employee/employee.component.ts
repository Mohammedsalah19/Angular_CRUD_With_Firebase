import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
 
})
export class EmployeeComponent implements OnInit {

  constructor( private _emoloyeservice: EmployeeService  ) { }

  ngOnInit() {
   }


  onsubmit(form:NgForm){

    this._emoloyeservice.InsertDate(form.value);

    this.resetForm(form);
  }

  resetForm(form:NgForm){

    if (form !=null)
      {
    form.reset();
this._emoloyeservice.selectedemployee={

                $key:"",
                name:"",
                position:"",
                office:"",
                salary:0
                };

      }
  }


}
