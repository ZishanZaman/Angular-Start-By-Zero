import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgClass1 } from "./ng-class1/ng-class1";
import { FridayNight } from "./friday-night/friday-night";
import { Textboxvalues } from "./textboxvalues/textboxvalues";
import { IncreamentC } from "./increament-c/increament-c";
import { DataBinding } from "./data-binding/data-binding";
import { StaturcalDirc } from "./staturcal-dirc/staturcal-dirc";
import { Parentchilddata } from "./parentchilddata/parentchilddata";
import { Child } from "./child/child";
@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    NgClass1,
    FridayNight,
    Textboxvalues,
    IncreamentC,
    DataBinding,
    StaturcalDirc,
    Parentchilddata,
    Child,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  public name = "Muhammad Zaman Khan Bal0ch";
  protected readonly title = signal("angular-by-zero");
}
