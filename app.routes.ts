import { Routes } from "@angular/router";
import { NgClass1 } from "./ng-class1/ng-class1";
import { FridayNight } from "./friday-night/friday-night";
import { Textboxvalues } from "./textboxvalues/textboxvalues";
import { IncreamentC } from "./increament-c/increament-c";
import { DataBinding } from "./data-binding/data-binding";
import { StaturcalDirc } from "./staturcal-dirc/staturcal-dirc";
import { Parentchilddata } from "./parentchilddata/parentchilddata";
import { Child } from "./child/child";
export const routes: Routes = [
  { path: "child", component: Child },
  { path: "parentchilddata", component: Parentchilddata },
  { path: "staturcaldirc", component: StaturcalDirc },
  { path: "databinding", component: DataBinding },
  { path: "increamentc", component: IncreamentC },
  { path: "textboxvalues", component: Textboxvalues },
  {
    path: "friday-night",
    component: FridayNight,
  },
  { path: "NgClass1", component: NgClass1 },
];
