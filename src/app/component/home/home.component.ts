import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  stdArr: any[] = [];
  showDetails: boolean = false;
  snackBar: any;

  constructor(private stdService: StudentService,private _snackBar:MatSnackBar) {}

  ngOnInit() {
    this.stdArr = this.stdService.getAllStudents();
  }

  onView(std: any) {
    this.stdService.setStudent(std);
    this.showDetails = true;

     this._snackBar.open(`The Student ${std.name} is Loaded  Successfully !!!`,"close",{
      duration:2000
     })
  }

  onBack() {
    this.showDetails = false;
  }
}