import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion } from './question-textbox';
import { of, Observable, throwError } from 'rxjs';
import { RadioButtonsQuestion } from './question-radiobuttons';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class QuestionServiceService {

  private url:string='http://localhost:3000/questions';
  constructor(private http:HttpClient) { }
  //json-server --watch db.json

 getQuestions(): Observable<QuestionBase<any>[]> {
  return this.http.get<QuestionBase<any>[]>(this.url)
    .pipe( 
      tap(data => console.log(JSON.stringify(data))),
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



  getDepartmentQuestions() {
    let questions: QuestionBase<any>[] =
      [
        new QuestionBase<string>(
          {
            key: 'name',
            label: 'Name',
            type: 'text',
            required: true,
            controlType: 'textbox',
            order: 1
          }
        ),
        new QuestionBase<string>(
          {
            key: 'hod',
            label: 'HOD',
            controlType: 'textbox',
            value: '',
            required: true,
            order: 2
          }
        ),
        new QuestionBase<boolean>(
          {
            key: 'isActive',
            label: 'Is Active',
            type:'checkbox',    
            value:true,        
            controlType: 'checkbox',           
            order: 3
          }
        ),
        new QuestionBase<string>(
          {
            key: 'emailAddress',
            label: 'Email',
            type: 'email',
            controlType: 'textbox',
            order: 4
          })
      ];


    console.log(JSON.stringify(questions));
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
