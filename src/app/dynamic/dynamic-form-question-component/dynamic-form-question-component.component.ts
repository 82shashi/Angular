import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { QuestionBase } from '../question-base';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'dynamic-question',
  templateUrl: './dynamic-form-question-component.component.html',
  styleUrls: ['./dynamic-form-question-component.component.css']
})
export class DynamicFormQuestionComponentComponent implements OnInit {

  private validationMessages={
    required:'' ,
    email:'Please enter valid email address.'

  };


  @Input() 
  form:FormGroup;

  @Input()
  question:QuestionBase<string>;

  get isInValid(){return this.form.controls[this.question.key].invalid 
    && this.form.controls[this.question.key].touched;}

  control:any;

  validationMessage:string;

  constructor() { }

  ngOnInit() 
  {

    const control=this.form.get(this.question.key);
    this.validationMessages.required=this.question.label + ' is required';

    control.valueChanges.pipe(debounceTime(1000)).subscribe(value=>this.setMessage(control));

  }

  setMessage(c:AbstractControl):void
  {
    this.validationMessage='';
    if((c.touched || c.dirty) && c.errors)
      this.validationMessage=Object.keys(c.errors).map(
        key=>this.validationMessages[key]).join(' ');

  }

}
