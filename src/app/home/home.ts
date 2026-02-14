import { Component, signal } from '@angular/core';
import { Greeting } from '../component/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  template: `
    <div>
      <p>
        {{ title() }}
      </p>
      <app-greeting [props]="message()" [isSent]="isSent()" [toggleSent]="toggleSent" />
    </div>
  `,
  styles: ``,
})
export class Home {
  title = signal('Home works');
  message = signal('Yoo mesg from parent');
  isSent = signal(true);

  toggleSent() {
    this.isSent.update((prev) => !prev);
  }
}
