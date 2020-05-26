import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'dynamic-question',
  templateUrl: './dynamic-form-question-component.component.html',
  styleUrls: ['./dynamic-form-question-component.component.css']
})
export class DynamicFormQuestionComponentComponent implements OnInit {

  @Input() 
  form:FormGroup;

  @Input()
  question:QuestionBase<string>;

  get isInValid(){return this.form.controls[this.question.key].invalid 
    && this.form.controls[this.question.key].touched;}

    control:any;

  constructor() { }

  ngOnInit() {

    this.control=this.form.controls[this.question.key];
  }

}
