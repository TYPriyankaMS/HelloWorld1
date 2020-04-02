import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { }

  homeWork="Angular 7"
  id
  receive(result){
    console.log(result)
  }
  ngOnInit() {
    
  }

}
