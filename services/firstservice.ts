import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Firstservice {
  getStudent() {
    return [
      { name: "Ali Khan", age: 23, standard: 12 },
      { name: "Umar", age: 23, standard: 12 },
      { name: "Zeshan", age: 23, standard: 12 },
      { name: "Qamar", age: 23, standard: 12 },
    ];
  }
}
