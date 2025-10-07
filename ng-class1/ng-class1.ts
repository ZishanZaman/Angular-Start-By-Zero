import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-ng-class1',
  imports: [NgClass],
  templateUrl: './ng-class1.html',
  styleUrl: './ng-class1.css',
})
export class NgClass1 {
  public c = new MyClass();
  // public Condition = false;
  // public Condition1 = true;
  public CssClass = 'myColor myWriting';
  // public CssWriting = 'myWriting';
  public cssArray = ['myColor', 'myWriting'];
}

class MyClass {
  myColor = true;
  myWriting = true;
}
