import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class ToDos implements OnInit {
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Sample task',
        completed: false,
      },{
          content:'Another task',
          completed: true,
      }
    ];
  }
}
