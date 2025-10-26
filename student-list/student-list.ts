import { Component, Inject, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Firstservice } from "../services/firstservice";

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: "app-student-list",
  templateUrl: "./student-list.html",
  styleUrls: ["./student-list.css"],
  providers: [Firstservice],
})
export class StudentList {
  public student: any = "";
  //   constructor(private std:Firstservice){
  // }
  // private std = inject(Firstservice);
  // ngOnInit() {
  //   this.std.getStudent();
  // }
  constructor(private std: Firstservice) {
    this.student = std.getStudent();
    console.log(std);
    console.log(this.student);
    console.log(std.getStudent());
  }
}
