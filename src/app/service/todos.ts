import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Todoservice {
  // DI
  http = inject(HttpClient);

  // fake stuffs
  todoItems: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: 'Learn Angular basics',
      isCompleted: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'Understand dependency injection',
      isCompleted: true,
    },
    {
      userId: 2,
      id: 3,
      title: 'Build a todo service',
      isCompleted: false,
    },
    {
      userId: 2,
      id: 4,
      title: 'Practice RxJS operators',
      isCompleted: false,
    },
    {
      userId: 3,
      id: 5,
      title: 'Refactor components properly',
      isCompleted: true,
    },
  ];

  getTodos() {
    const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get<Todo[]>(baseUrl);
  }
}
