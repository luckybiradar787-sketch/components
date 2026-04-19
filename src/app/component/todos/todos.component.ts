import { Component, ElementRef, ViewChild } from '@angular/core';
import { Itodos } from 'src/app/models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
isInEditMode:boolean=false
editObj !:Itodos

  todoArr: Array<Itodos> = [
  {
    todoItem: "Angular",
    todoId: "123",
  },
  {
    todoItem: "JavaScript",
    todoId: "143",
  },
  {
    todoItem: "Html",
    todoId: "125",
  }
];

  onTodoAdd(ele:HTMLInputElement){
    let val=ele.value
    console.log(val)
    let newTodo:Itodos={
      todoItem:val,
      todoId:Date.now().toString()
    }
    ele.value=''
    this.todoArr.push(newTodo)
  }
 

  trackByFun(index:number, item:Itodos){
  return item.todoId
}

@ViewChild('todoControl') todoControl !:ElementRef
  // constructor() { }

  // ngOnInit(): void {
  // }

  onRemove(id:string){
    console.log(id)
    let getIndex=this.todoArr.findIndex(t=>t.todoId===id)
    this.todoArr.splice(getIndex,1)

  }


  onEdit(todo:Itodos){
    console.log(todo)
    this.isInEditMode=true
    this.editObj=todo
    this.todoControl.nativeElement.value=this.editObj.todoItem
  }

  


onUpdate(){
  let UPDATE_ID=this.editObj.todoId
  let UPDATED_OBJ:Itodos={
    todoItem:this.todoControl.nativeElement.value,
    todoId:UPDATE_ID
  }
  let getIndex=this.todoArr.findIndex(t=>t.todoId===UPDATE_ID)
  this.todoArr[getIndex]=UPDATED_OBJ
  this.todoControl.nativeElement.value=''
  this.isInEditMode=false
}

}
