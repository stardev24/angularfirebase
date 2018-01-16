import { Injectable } from '@angular/core';
import {Employee}  from './employee.model'
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

@Injectable()
export class EmployeeService {

  employeeList : AngularFireList<any>
  selectedEmployee: Employee = new Employee()
  constructor(private Firebase : AngularFireDatabase) { }

  getData(){
  	this.employeeList = this.Firebase.list("employee")
  	return this.employeeList
  }

  insertEmployee(employee : Employee){
  	this.employeeList.push({
  		name : employee.name,
		position:employee.position,
		office:employee.office,
		salary:employee.salary
  	})
  }

  updateEmployee(emp : Employee){
  	this.employeeList.update(emp.$key,{
  		name : emp.name,
		position:emp.position,
		office:emp.office,
		salary:emp.salary
  	})
  }

  deleteEmployee(key : string){
  	this.employeeList.remove(key)
  	
  }


}
