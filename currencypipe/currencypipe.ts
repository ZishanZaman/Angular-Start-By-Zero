import { Component, Input, input } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  imports: [CommonModule],
  selector: "app-currencypipe",
  templateUrl: "./currencypipe.html",
  styleUrl: "./currencypipe.css",
})
export class CurrencyPipe {
  public myName = "Zeshan Zaman";
  // public int = LearnPipes;
  public myNumber: any = 9.2734;
}
