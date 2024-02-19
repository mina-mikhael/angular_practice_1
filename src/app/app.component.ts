import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  name = "My First App";
  goals = [
    "Learn Angular",
    "Build a cool app",
    "Get a job as an Angular Developer",
  ];
}
