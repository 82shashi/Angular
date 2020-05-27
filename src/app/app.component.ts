import { Component, OnInit, OnDestroy } from '@angular/core';
import {QuestionBase} from './dynamic/question-base';
import {QuestionServiceService} from './dynamic/question-service.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionServiceService]
})
export class AppComponent implements OnInit, OnDestroy{
 
  title = 'EmployeeApp';
  //questions$:Observable<QuestionBase<any>[]>;
  questions:QuestionBase<any>[];


  subs:any;

  constructor(private service:QuestionServiceService)
  {
     
     //this.questions$=service.getDepartmentQuestions();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  ngOnInit(): void {
   
    //this.questions$=new Observable<QuestionBase<any>[]>();
    //this.questions$=this.service.getQuestions();
    this.subs=this.service.getQuestions().subscribe(data=>this.questions=data,error=>console.log(error));

  }



}
