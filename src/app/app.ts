import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './component/header/header';
import { Testing } from './component/testing/testing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
    <!-- <div><app-testing /></div> -->
  `,
  styles: [
    `
      main {
        padding: 16px;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('Alains_Angular');
}
