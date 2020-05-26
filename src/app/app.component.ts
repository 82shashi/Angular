import { Component } from '@angular/core';
import {QuestionBase} from './dynamic/question-base';
import {QuestionServiceService} from './dynamic/question-service.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionServiceService]
})
export class AppComponent {
  title = 'EmployeeApp';
  questions$:Observable<QuestionBase<any>[]>;

  constructor(service:QuestionServiceService)
  {
     this.questions$=service.getQuestions();
     //this.questions$=service.getDepartmentQuestions();
  }

}
