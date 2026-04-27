import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './Test/test.component';
import { TableComponent } from './table/table.component';
import { TodoComponent } from './component/Todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './component/todos/todos.component';
import { StudentOneComponent } from './component/student-one/student-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './component/home/home.component';
import { StudentDetailsComponent } from './component/student-details/student-details.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    TestComponent,
    TableComponent,
    TodoComponent,
    TodosComponent,
    StudentOneComponent,
    HomeComponent,
    StudentDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
