import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
  result="completed task"
  
  @Input() task
  @Output() submit=new EventEmitter();
  ngOnInit() {
    
    console.log("This is child component");
    
    console.log(this.task)
    this.submit.emit(this.result)
  }

}
