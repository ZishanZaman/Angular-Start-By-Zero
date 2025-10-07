import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-staturcal-dirc",
  templateUrl: "./staturcal-dirc.html",
  styleUrl: "./staturcal-dirc.css",
  imports: [CommonModule],
})
export class StaturcalDirc {
  public fruits = ["Banana", "Apple", "Mango", "Orange", "Grapes"];

  public sports = [
    {
      name: "Cricket",
      players: 11,
      age: 5,
    },
    {
      name: "Football",
      players: 11,
      age: 3,
    },
    {
      name: "Hockey",
      players: 11,
      age: 4,
    },
  ];

  // public Pizzaa = "Fajita";
  // // public display = 1000 > 150;
  // public display = 'kumar';
  // public fruit = 'Mango';
}
