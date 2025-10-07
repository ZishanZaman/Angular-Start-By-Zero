import { Component } from '@angular/core';

@Component({
  selector: 'app-increament-c',
  imports: [],
  templateUrl: './increament-c.html',
  styleUrl: './increament-c.css',
})
export class IncreamentC {
  public value: number = 0;
  // public data: any = 0;
  counter(str: string) {
    str === 'add' ? this.value++ : this.value--;
  }
  //   subtract(subtract: any) {
  //     this.data--;
  //   }
  // === this called ternairy operatoer or identical operator
}
