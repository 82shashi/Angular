import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import {EmployeeService} from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import {EmployeeDetailComponent  } from './employees/employee-detail-component';
import {CreateEmployeeCanDeactivateGuardService} from './employees/create-employee-can-deactivate-gaurd.service';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { DynamicFormQuestionComponentComponent } from './dynamic/dynamic-form-question-component/dynamic-form-question-component.component';
import {QuestionServiceService} from './dynamic/question-service.service';
import { DynamicFormComponentComponent } from './dynamic/dynamic-form-component/dynamic-form-component.component';
import { HttpClientModule } from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:'list',component:ListEmployeesComponent
  },
  {
    path:'list/:id',component:EmployeeDetailComponent
  },
  {
    path:'create',
    component:CreateEmployeeComponent,
    canDeactivate:[CreateEmployeeCanDeactivateGuardService]
  },
  {
    path:'',redirectTo:'/list',pathMatch:'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailComponent,
    EmployeeFilterPipe,
    DynamicFormQuestionComponentComponent,
    DynamicFormComponentComponent       
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [EmployeeService,CreateEmployeeCanDeactivateGuardService,QuestionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
