import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <p>
      {{ title() }}
    </p>
  `,
  styles: ``,
})
export class Home {
  title = signal('Home works');
}
