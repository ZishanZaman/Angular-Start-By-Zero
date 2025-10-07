import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass1 } from './ng-class1/ng-class1';
import { FridayNight } from './friday-night/friday-night';
import { Textboxvalues } from './textboxvalues/textboxvalues';
import { IncreamentC } from './increament-c/increament-c';
import { DataBinding } from './data-binding/data-binding';
import { StaturcalDirc } from './staturcal-dirc/staturcal-dirc';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgClass1,
    FridayNight,
    Textboxvalues,
    IncreamentC,
    DataBinding,
    StaturcalDirc,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-by-zero');
}
