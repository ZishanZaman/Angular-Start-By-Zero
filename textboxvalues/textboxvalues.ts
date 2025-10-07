import { Component } from '@angular/core';

@Component({
  selector: 'app-textboxvalues',
  imports: [],
  templateUrl: './textboxvalues.html',
  styleUrl: './textboxvalues.css',
})
export class Textboxvalues {
  public displayName = '';
  getNames(first: any, last: any) {
    this.displayName = first + ' ' + last;
  }
}
