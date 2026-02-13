import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Hello, {{ title() }}</h1>
    <p>Fckin Easy</p>
    <p>Fckin Easy</p>

    <router-outlet />
  `,
  styles: [
    `
      p {
        border: 2px solid red;
        color: purple;
        font-weight: 600;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('Alains_Angular');
}
