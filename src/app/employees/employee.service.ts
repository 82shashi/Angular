import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  private baseUrl: string = 'http://localhost:3000/employees';
  private listEmployees: Employee[];

  constructor(private http: HttpClient) { 
    
  }  

  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.baseUrl)
      .pipe(
        tap(data=>this.listEmployees=data),
        catchError(this.handleError)
      );
  }



  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }


  save(employee: Employee) {
    this.listEmployees.push(employee);
  }

  update(employee: Employee):Observable<Employee>
  {
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    const url=`${this.baseUrl}/${employee.id}`;
    return this.http.put<Employee>(url,employee,{headers:headers});
  }


  getEmployee(id: number): Employee {
    return this.listEmployees.find(a => a.id === id);
  }

  getEmployeesCount(): Number {
    return this.listEmployees.length;
  }


}