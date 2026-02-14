import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.html',
  styleUrls: ['./greeting.scss'],
})
export class Greeting {
  @Input() props!: string;
  @Input() isSent!: boolean;
  @Input() toggleSent!: () => void;

  input = signal('');

  keyUpHandler(event: Event) {
    const target = event?.target as HTMLInputElement;

    this.input.set(target?.value);

    console.log(target?.value);
  }
}
