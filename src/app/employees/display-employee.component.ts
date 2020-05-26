import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {


  @Input() emp:Employee;

  @Output() notify:EventEmitter<Employee>=new EventEmitter<Employee>();

  private selectedEmployeeId:number;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {

    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  handleClick()
  {
    this.notify.emit(this.emp);
  }

}
