import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';
import { RadioButtonsQuestion } from './question-radiobuttons';

@Injectable()
export class QuestionServiceService {

  constructor() { }

  getQuestions() {
    let questions: QuestionBase<string>[] =
      [
        new QuestionBase<string>(
          {
            key: 'designation',
            label: 'Designation',
            controlType: 'dropdown',
            options: [
              { key: 'manager', value: 'Manager' },
              { key: 'developer', value: 'Developer' },
              { key: 'hrp', value: 'HR Personal' },
              { key: 'engineer', value: 'Engineer' }
            ],
            order: 4
          }
        ),
        new QuestionBase<string>(
          {
            key: 'sex',
            label: 'Sex',
            type: 'radio',
            controlType: 'radio',
            options: [
              { key: 'male', value: 'Male' },
              { key: 'female', value: 'Female' }
            ],
            order: 5
          }
        ),
        new QuestionBase<string>(
          {
            key: 'firstName',
            label: 'First Name',
            controlType: 'textbox',
            value: '',
            required: true,
            order: 1
          }
        ),
        new QuestionBase<string>(
          {
            key: 'salary',
            label: 'Salary',
            value: '',
            controlType: 'textbox',
            required: true,
            order: 2
          }
        ),
        new QuestionBase<string>(
          {
            key: 'emailAddress',
            label: 'Email',
            type: 'email',
            controlType: 'textbox',
            order: 3
          })
      ];


    console.log(JSON.stringify(questions));
    return of(questions.sort((a, b) => a.order - b.order));
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
