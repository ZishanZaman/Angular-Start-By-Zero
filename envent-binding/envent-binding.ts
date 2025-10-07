import { Component } from '@angular/core';

@Component({
  selector: 'app-envent-binding',
  imports: [],
  templateUrl: './envent-binding.html',
  styleUrl: './envent-binding.css',
})
export class EnventBinding {
  myEvent() {
    console.log('My Name is Shanii Bhaii');
  }
  // myEvent(envent: any) {
  //   console.log(event?.type);
  // }
  // envent object as argument

  // public name = '';
  // myEvent() {
  //   // console.log('My Name is Zeshan');
  //   // alert('Wellcome to Angular');
  //   this.name = 'Learning Never Ends';
  // }
  // myEvent(name: string, age: number) {
  //   alert(name + ' ' + age);
  // }
}
