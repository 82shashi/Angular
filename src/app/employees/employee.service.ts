import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable,of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable()
export class EmployeeService
{

    private url:string='';
    
    constructor()
    {

    }


     private listEmployees:Employee[]=
     [
       {
         id:1,
         name:'Shashi Kant',
         gender:'Male',
         contactPreference:'email',
         email:'shashikants2005@gmail.com',
         dateOfBirth:new Date('12/01/1981'),
         department:'1',
         isActive:true,
         photoPath:"assets/images/Image1.jpg"
       },
       {
         id:2,
         name:'Subhi',
         gender:'Female',
         contactPreference:'email',
         email:'subhi2005@gmail.com',
         dateOfBirth:new Date('05/15/2015'),
         department:'2',
         isActive:true,
         photoPath:"assets/images/Image2.jpg"
       },
       {
         id:3,
         name:'Mangal Singh',
         gender:'Male',
         contactPreference:'email',
         email:'mangal2005@gmail.com',
         dateOfBirth:new Date('05/15/1995'),
         department:'1',
         isActive:true,
         photoPath:"assets/images/Image3.jpg"
       },
       {
         id:4,
         name:'Veer Bhadra',
         gender:'Male',
         contactPreference:'email',
         email:'veer2005@gmail.com',
         dateOfBirth:new Date('02/09/1985'),
         department:'3',
         isActive:true,
         photoPath:"assets/images/Image4.jpg"
       }
   
   
     ];

     getEmployees():Observable<Employee[]>
     {
        
        return of(this.listEmployees).pipe(delay(5000));

     }

     save(employee:Employee)
     {
         this.listEmployees.push(employee);
     }

     getEmployee(id:number):Employee
     {
         return this.listEmployees.find(a=>a.id===id);
     }

     getEmployeesCount():Number
     {
         return this.listEmployees.length;
     }


}