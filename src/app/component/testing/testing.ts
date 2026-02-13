import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-testing',
  imports: [],
  templateUrl: './testing.html',
  styleUrl: './testing.scss',
})
export class Testing {
  counter = signal(0);
  count = signal({ name: 'Alain', age: 2 });

  increment() {
    this.counter.update((prev) => prev + 1);
  }
  decrement() {
    // if(this.counter )
    this.counter.update((prev) => prev - 1);
  }

  mutate() {
    this.count.update((prev) => ({ ...prev, age: (prev.age += 12) }));
  }

  makeNull() {
    this.counter.set(0);
    this.count.update((prev) => ({ ...prev, age: 0 }));
  }
}
