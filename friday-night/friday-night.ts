import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-friday-night',
  imports: [NgStyle],
  templateUrl: './friday-night.html',
  styleUrl: './friday-night.css',
})
export class FridayNight {
  // myStyles = {
  //   color: 'pink',
  //   'font-family': 'comic sans ms',
  //   'font-size': '22px',
  //   backgroundColor: 'black',
  // };
  public Condition = false;
}
