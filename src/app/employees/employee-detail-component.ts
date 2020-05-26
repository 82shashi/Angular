import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail-component.html',
  styleUrls: ['./employee-detail-component.css']
})
export class EmployeeDetailComponent implements OnInit {

  emp:Employee;
  private _id:number;
  constructor(private _employeeService:EmployeeService,private _route:ActivatedRoute,
    private _router:Router) 
  {
  

   }

  ngOnInit() 
  {    
    this._route.paramMap.subscribe(p=>
      {
        this._id = +p.get('id');
        this.emp = this._employeeService.getEmployee(this._id);
      }
      );    
  }

  viewNextEmployee()
  {   
    if(this._id < this._employeeService.getEmployeesCount())
      this._id = this._id + 1;
    else
    this._id =1;

    this._router.navigate(["/list",this._id]);  
  }

}
