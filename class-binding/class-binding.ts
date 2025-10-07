import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  imports: [],
  templateUrl: './class-binding.html',
  styleUrl: './class-binding.css',
})
export class ClassBinding {
  myColor() {
    throw new Error('Method not implemented.');
  }
  public CssClass = 'myColor myWriting';

  public condition = false;
  myCall() {
    if (10 > 5) {
      return 'myColor';
    } else {
      return 'myWriting';
    }
  }
}
