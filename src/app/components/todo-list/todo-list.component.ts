import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface TODO{
  id: number,
  title: string
}

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todoItem:string = "";
  todoList:TODO[] = [];
  isUpdate: boolean = false;
  updateId!:number;
  addValue(event:KeyboardEvent) {
    if(event.key === "Enter") {
      this.addTodoItem()
    }
  }
  addTodoItem() {
    if(this.todoItem === "") return
    if(this.isUpdate) {
      this.todoList[this.updateId].title = this.todoItem
      this.isUpdate = false;
    } else {
      this.todoList.push({
        id: this.todoList.length+1,
        title: this.todoItem
      });
    }
    this.todoItem = "";
  }

  updateItem(id:number) {
    this.isUpdate = true;
    this.updateId = this.todoList.findIndex(item => item.id == id);
    this.todoItem = this.todoList[this.updateId].title;
  }

  cancelUpdate() {
    this.isUpdate = false;
    this.updateId = 0;
    this.todoItem = "";
  }

  deleteItem(id:number) {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }
}
