import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.dto';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined;

  addTodo!: string;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        name: 'First todo',
        completed: false
      },
      {
        name: 'Second todo',
        completed: true
      },
    ]
  }

  toggle(event: Todo){
    const target = this.todos?.find(x => x.name == event.name);
    if(target){
      target.completed = !target.completed;
    }
  }

  remove(event: Todo){
    const target = this.todos?.find(x => x.name == event.name);
    if(target){
      if(this.todos){
        this.todos.splice(this.todos.findIndex(item => item.name === target.name),1);
      }
    }
  }

  add(){
    console.log(this.addTodo)
    this.todos?.push({name: this.addTodo, completed: false});
    this.addTodo = '';
  }
}
