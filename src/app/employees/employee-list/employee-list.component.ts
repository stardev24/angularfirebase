import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service'
import {Employee} from '../shared/employee.model'

import {AngularFireList} from 'angularfire2/database'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeelist : Employee [];
  data: AngularFireList<Employee>
  constructor(private employeeApi : EmployeeService) { }

  ngOnInit() {
  	var x = this.employeeApi.getData();
  	x.snapshotChanges().subscribe(items => {
  		this.employeelist = []
  		items.forEach(element => {
  			console.log("each obj -->",element)
  			var y = element.payload.toJSON()
  			y["$key"] = element.key
  			this.employeelist.push(y as Employee)

  		})

  	})
  }

  onItemClick(emp : Employee){
  	this.employeeApi.selectedEmployee = Object.assign({},emp)

  }

}
