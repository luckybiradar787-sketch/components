import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // 🔥 Dummy Data
  stdArr = [
    {
      stdId: '1',
      name: 'Rahul',
      age: 22,
      course: 'Angular',
      Description:"Angular is a popular, open-source front-end framework developed by Google for building dynamic, high-performance web applications. It uses TypeScript to create component-based, single-page applications (SPAs) that offer a smooth, app-like user experience. Angular provides a complete toolkit, including routing and data binding",
      city: 'Pune',
      isActive: true
    },
    {
      stdId: '2',
      name: 'Amit',
      age: 24,
      course: 'React',
      Description:"React (also known as React.js or ReactJS) is a free, open-source JavaScript library used for building user interfaces (UIs). Developed by Meta (formerly Facebook), it allows developers to create dynamic, interactive web and mobile applications by focusing on reusable pieces of the interface called components.",
      city: 'Mumbai',
      isActive: false
    },
    {
      stdId: '3',
      name: 'Sneha',
      age: 21,
      course: 'Java',
      Description:'Java is a high-level, object-oriented programming language and software platform first released by Sun Microsystems in 1995 and currently maintained by Oracle. It is designed to have as few implementation dependencies as possible, following the core philosophy of "Write Once, Run Anywhere" (WORA).',
      city: 'Nagpur',
      isActive: true
    }
  ];

  selectedStudent: any = null;

  // 👉 set data
  setStudent(std: any) {
    this.selectedStudent = std;
  }

  // 👉 get data
  getStudent() {
    return this.selectedStudent;
  }

  // 👉 get all students
  getAllStudents() {
    return this.stdArr;
  }
}