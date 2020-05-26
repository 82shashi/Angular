import { Injectable } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {QuestionBase} from './question-base';
@Injectable()
export class QuestionControlService 
{

    toFormGroup(questions:QuestionBase<string>[])
    {
        let group:any={};
        questions.forEach(question=>
            {
                group[question.key]=this.getFormControl(question);                  
                
            }
        );

        return new FormGroup(group);
    }

    getFormControl(question:QuestionBase<string>) : FormControl
    {
        var control=new FormControl(question.value||'');
        if(question.required)
            control.setValidators(Validators.required);
        if(question.type==="email")
            control.setValidators(Validators.email);

        return control;
    }

}