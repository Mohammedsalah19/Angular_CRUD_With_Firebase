import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';


@Injectable()


export class EmployeeService {

selectedemployee:Employee = new Employee();
_employeeList :AngularFireList<any>;

ff:any=[];
 constructor( private _firebase:AngularFireDatabase) { }


 // function to get data from firebase

  GetData(){


     this._employeeList=this._firebase.list('employees');
     return this._employeeList;

  }
// function to insert to firebase
 
  InsertDate(_employee : Employee){
  
    this._employeeList.push({
      name :_employee.name,
      position :_employee.position,
      office :_employee.office,
      salary :_employee.salary,
      
    });

  }





}
