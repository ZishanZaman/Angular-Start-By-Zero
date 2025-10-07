import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  imports: [],
  template: `<h2>
    {{ 2 + 2 }}
    {{ name + ' ' + age }}
  </h2>`,
  styleUrl: './string-interpolation.css',
})
export class StringInterpolation {
  public name = 'Learning Never Ends';
  public age = 21;
  helloMessage() {
    return 'Hello Zeshan Zaman';
  }

  public url = window.location.href;
}
