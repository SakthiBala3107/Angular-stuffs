import { Component, computed, inject } from '@angular/core';
import { Todoservice } from '../service/todos';
import { Todo } from '../model/todo.type';
import { catchError, map, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [], // No imports needed for built-in control flow
  templateUrl: './todos.html',
  styleUrls: ['./todos.scss'],
})
export class Todos {
  // DI
  public todoService = inject(Todoservice);

  // fetch using signals
  todosSignal = toSignal(
    this.todoService.getTodos().pipe(
      map((todos) => ({ data: todos, loading: false, error: null })),
      catchError((err) => of({ data: [], loading: false, error: 'Failed to load todos' })),
    ),
    { initialValue: { data: [], loading: true, error: null } },
  );

  viewState = computed(() => {
    const { data, loading, error } = this.todosSignal();

    return {
      isLoading: loading,
      isError: !!error,
      errorMessage: error,
      //  actual  data and loading and erro states
      todos: loading
        ? [{ id: -1, title: 'Loading todos...' }]
        : error
          ? [{ id: -2, title: 'Error: ' + error }]
          : data,
    };
  });

  //
}
