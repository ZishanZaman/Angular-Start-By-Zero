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
import { Childtoparent } from "./childtoparent/childtoparent";
import { Pipesinangular } from "./pipesinangular/pipesinangular";
import { CurrencyPipe } from "./currencypipe/currencypipe";
import { CustomPipe } from "./pipes/custom-pipe";
import { StudentList } from "./student-list/student-list";
import { Studentdata } from "./studentdata/studentdata";
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
    Childtoparent,
    Pipesinangular,
    CurrencyPipe,
    CustomPipe,
    StudentList,
    Studentdata,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  public name = "Muhammad Zaman Khan Bal0ch";
  protected readonly title = signal("angular-by-zero");
  public msg = "";
}
