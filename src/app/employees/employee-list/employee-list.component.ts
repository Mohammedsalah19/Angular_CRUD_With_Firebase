import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

import { AngularFireList,  } from 'angularfire2/database';
 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  }) 
export class EmployeeListComponent implements OnInit {
employeList : AngularFireList<any>;
  constructor(private _emoloyeservice: EmployeeService) { }

  ngOnInit() {
   var users= this._emoloyeservice.GetData(); 

  }

}
