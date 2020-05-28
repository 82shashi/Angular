import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { QuestionBase } from './dynamic/question-base';
import { QuestionServiceService } from './dynamic/question-service.service';
import { Observable } from 'rxjs';
import { EmployeeService } from './employees/employee.service';
import { Employee } from './models/employee.model';
import { DynamicFormComponentComponent } from './dynamic/dynamic-form-component/dynamic-form-component.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionServiceService]
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DynamicFormComponentComponent, { static: false }) empForm: DynamicFormComponentComponent;



  title = 'EmployeeApp';
  //questions$:Observable<QuestionBase<any>[]>;
  questions: QuestionBase<any>[];
  employee: Employee;

  subs: any;

  constructor(private service: QuestionServiceService,
    private employeeService: EmployeeService) {

    //this.questions$=service.getDepartmentQuestions();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  ngOnInit(): void {

    //this.questions$=new Observable<QuestionBase<any>[]>();
    //this.questions$=this.service.getQuestions();
    this.subs = this.service.getQuestions().subscribe(data =>
      this.questions = data,
      error => console.log(error));
  }

  ngAfterViewInit(): void {


  }


  OnSave() {

    // console.log(JSON.stringify(this.employee));
    // console.log(JSON.stringify(this.empForm.form.value));


    // console.log(JSON.stringify(p));

    this.employeeService.getEmployees().subscribe(data => {
      this.employee = this.employeeService.getEmployee(1);

      const p = { ...this.employee, ...this.empForm.form.value };

      this.employeeService.update(p).subscribe(
        {
          next: (data) => console.log('Saved Employee:' + JSON.stringify(data)),
          error: err => console.log(err)
        }
      );
    }
    );






  }
}
