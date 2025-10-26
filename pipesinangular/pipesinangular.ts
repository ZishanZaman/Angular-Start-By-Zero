import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  imports: [CommonModule],
  selector: "app-pipesinangular",
  templateUrl: "./pipesinangular.html",
  styleUrl: "./pipesinangular.css",
})
export class Pipesinangular {
  public chanelName = "learning never ends";
  public name = "Zishan Zaman";
  public person = {
    name: "Kumar",
    age: 23,
    height: 5.6,
  };
  public myDate = new Date();
  months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
}
