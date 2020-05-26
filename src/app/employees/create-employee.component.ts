import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from "../models/department.model";
import {Employee} from "../models/employee.model";
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";
import {EmployeeService} from '../employees/employee.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('createEmployeeForm',{read:'createEmployeeForm', static:true}) public createEmployeeForm:NgForm;

  datePickerConfig:Partial<BsDatepickerConfig>;

  employee:Employee=  
  {
    id:null,
    name:null,
    dateOfBirth:null,
    contactPreference:null,
    phoneNumber:null,
    department:'-1',
    gender:null,
    isActive:null,
    email:"",
    photoPath:null   

  };
  departments:Department[]=
  [
    {id:1,name:"Help Desk"},
    {id:2,name:"HR"},
    {id:3,name:"IT"},
    {id:4,name:"Paroll"},
    {id:5,name:"Accounts"}
  ];
  
  previewPhoto=false;
  constructor(private _employeeService:EmployeeService, private _router:Router) 
  {
    this.datePickerConfig=Object.assign({},
      {
        containerClass:"theme-dark-blue",
        showWeekNumbers:true,
        minDate:new Date(2018,0,1),
        maxDate:new Date(2020,11,31),
        dateInputFormat:'DD/MM/YYYY'
      }
      );

     
   }

  ngOnInit() {
  }

  saveEmployee():void
  {

    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  
  }

  togglePhotoPreview()
  {
    this.previewPhoto=!this.previewPhoto;
  }


}
