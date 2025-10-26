import { Component, EventEmitter, Output, output } from "@angular/core";

@Component({
  selector: "app-childtoparent",
  imports: [],
  templateUrl: "./childtoparent.html",
  styleUrl: "./childtoparent.css",
})
export class Childtoparent {
  @Output() public childEvent = new EventEmitter();
  fireEvent() {
    this.childEvent.emit("Learning Never Ends");
  }
}
