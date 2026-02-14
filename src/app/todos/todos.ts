import { Component, inject, OnInit, signal } from '@angular/core';
import { Todoservice } from '../service/todos';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})

//
export class Todos implements OnInit {
  // DI
  public todoService = inject(Todoservice);

  todoItems = signal<Todo[]>([]);

  // useeffect
  ngOnInit(): void {
    const items = this.todoService.todoItems;

    if (!items.length) return;

    this.todoItems.set(items);
  }
}
