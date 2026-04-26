import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IStudentone } from 'src/app/models/student-one';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-student-one',
  templateUrl: './student-one.component.html',
  styleUrls: ['./student-one.component.scss']
})
export class StudentOneComponent implements OnInit {

  stdArr: Array<IStudentone> = [
  {
    name: "Rahul Sharma",
    age: 20,
    course: "CS",
    city: "Latur",
    stdId:'12',
    isActive:true,
  },
  {
    name: "Sagar Khandre",
    age: 26,
    course: "Data Entry",
    city: "Mumbai",
    stdId:'17',
    isActive:false,
  },
  {
    name: "Akansha Rajput",
    age: 24,
    course: "Testing",
    city: "Pune",
    stdId:'19',
    isActive:true,

  }
]; 

 isInEditMode:boolean=false

editId !:string

@ViewChild('name') name!: ElementRef;
@ViewChild('age') age!: ElementRef;
@ViewChild('course') course!: ElementRef;
@ViewChild('city') city!: ElementRef;
@ViewChild('isActive') isActive!:ElementRef;

  constructor(
    // private _snackBar:MatSnackBar 
    private _snackBar:SnackBarService
  ) { }

  ngOnInit(): void {}

  onStdAdd(){
    let stdObj :IStudentone={
      name:this.name.nativeElement.value,
      age:this.age.nativeElement.value,
      course:this.course.nativeElement.value,
      city:this.city.nativeElement.value,
      isActive:this.isActive.nativeElement.value,
      stdId:Date.now().toString()
    }
    
  this.stdArr.unshift(stdObj)
    
     this.name.nativeElement.value=''
     this.age.nativeElement.value=''
     this.course.nativeElement.value=''
     this.city.nativeElement.value=''

    //  this._snackBar.open(`The Student ${stdObj.name} is Added Successfully !!!`,"close",{
    //   duration:3000,
    //   horizontalPosition:'left',
    //   verticalPosition:'top'

    //  })
    this._snackBar.openSnackbar(`The Student ${stdObj.name} is Added Successfully !!!`)
  }

  trackByStudentoneId(index:number,std:IStudentone){
    return std.stdId
  }

  onRemove(stdId:string){
    let getIndex=this.stdArr.findIndex(s=>s.stdId===stdId)
    // this.stdArr.splice(getIndex,1)
    let removedStd=this.stdArr.splice(getIndex,1)
    // this._snackBar.open(`The Student is Removed Successfully !!!`,"close",{
    //   duration:3000,
    //   horizontalPosition:'left',
    //   verticalPosition:'top'

    //  })
    this._snackBar.openSnackbar(`The Student ${removedStd[0].name} is removed Successfully !!!`)
  }

  onEdit(std:IStudentone){
    // console.log(std);
    this.isInEditMode=true;
    this.editId=std.stdId
    this.name.nativeElement.value=std.name;
    this.age.nativeElement.value=std.age;
    this.course.nativeElement.value=std.course;
    this.city.nativeElement.value=std.city ;
    this.isActive.nativeElement.value=std.isActive
  }
  onUpdate(){
    //getUpdated_ID
    let UPDATED_ID=this.editId
    //get UPDATED_OBJ
    let UPDATED_OBJ:IStudentone={
      name:this.name.nativeElement.value,
      age:this.age.nativeElement.value,
      course:this.course.nativeElement.value,
      city:this.city.nativeElement.value,
      isActive:this.isActive.nativeElement.value,
      stdId:UPDATED_ID
    }
    console.log(UPDATED_OBJ)
    // get index number
    let getIndex=this.stdArr.findIndex(s=>s.stdId===UPDATED_ID)
    //Update in  Array
    this.stdArr[getIndex]=UPDATED_OBJ

     this.name.nativeElement.value=''
     this.age.nativeElement.value=''
     this.course.nativeElement.value=''
     this.city.nativeElement.value=''
     this.editId=''
     this.isInEditMode=false,
     this._snackBar.openSnackbar(`The Student ${UPDATED_OBJ.name} is Updated Successfully !!!`)
  }
}
