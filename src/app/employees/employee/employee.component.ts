import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(private employeeApi : EmployeeService) { }

  ngOnInit() {

  	this.resetForm()
  }
  onSubmit(form : NgForm){

  	if(form.value.$key == ""){

  		this.employeeApi.insertEmployee(form.value)
  	}else{

  		this.employeeApi.updateEmployee(form.value)
  	}
  	this.resetForm(form)

  }

  resetForm(form? : NgForm){

  	if(form != null){
  		form.reset()

  	}  	
  	this.employeeApi.selectedEmployee = {
  		$key:'',
  		name:'',
  		position:'',
  		office:'',
  		salary:0

  	}

  }


  onDelete(form : NgForm){

	if(confirm("This will delete record from database.Are you sure to delete?") == true){

		this.employeeApi.deleteEmployee(form.value.$key)
	}	
  	this.resetForm(form)

  }

}
