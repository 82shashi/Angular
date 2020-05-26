import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import {interval} from 'rxjs';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {


  employees: Employee[];
  filteredEmployees: Employee[];

  selectedEmployee: Employee;

  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }


  constructor(private _employeeService: EmployeeService, private _router: Router,
    private _route: ActivatedRoute) {


  }

  filterEmployees(searchString: string): Employee[] {
    return this.employees.filter(e => e.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }


  ngOnInit() {

    this._employeeService.getEmployees().subscribe(emplist => {
    this.employees = emplist;
      if (this._route.snapshot.queryParamMap.has('searchTerm')) {
        this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
      }
      else
        this.filteredEmployees = this.employees;
    }
    );
    // console.log(this._route.snapshot.queryParamMap.has('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.get('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.getAll('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.keys);


  }

  handleNotify(eventData: Employee) {
    this.selectedEmployee = eventData;
    this._router.navigate(['/list', this.selectedEmployee.id],
      {
        queryParams: { 'searchTerm': this.searchTerm, 'testParam': 'testValue' }
      });
  }

}
