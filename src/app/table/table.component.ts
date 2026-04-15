import { Component } from "@angular/core";
import { Employee } from "../models/table";

@Component({
     selector:'app-table', //app>> prefix hai 
     templateUrl: './table.component.html',
     styleUrls:["./table.component.scss"],
})

export class TableComponent{

employees:Array<Employee> = [
  { id: 1, name: 'Rahul', age: 25, department: 'IT', salary: 30000 },
  { id: 2, name: 'Sneha', age: 28, department: 'HR', salary: 35000 },
  { id: 3, name: 'Amit', age: 30, department: 'Finance', salary: 40000 },
  { id: 4, name: 'Priya', age: 26, department: 'IT', salary: 32000 }
];

}