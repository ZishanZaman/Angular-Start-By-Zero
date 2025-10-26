import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "custom",
})
export class CustomPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    const [a] = args;

    return Math.pow(value, a);
  }
}
