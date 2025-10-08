import { Component, Input, input } from "@angular/core";

@Component({
  selector: "app-child",
  imports: [],
  templateUrl: "./child.html",
  styleUrl: "./child.css",
})
export class Child {
  @Input() myData: any = "";
}
