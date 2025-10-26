import { Component, inject } from "@angular/core";
import { Firstservice } from "../services/firstservice";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-studentdata",
  templateUrl: "./studentdata.html",
  styleUrls: ["./studentdata.css"],
})
export class Studentdata {
  public students: any = "";
  private std = inject(Firstservice);
  ngOnInit() {
    this.students = this.std.getStudent();
  }
}
