import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html'
})
export class StudentDetailsComponent implements OnInit {

  studentObj: any;
  
  constructor(private stdService: StudentService) {}

  ngOnInit() {
  
    this.studentObj = this.stdService.getStudent();

  }
}