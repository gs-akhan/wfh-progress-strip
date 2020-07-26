import { Component } from '@angular/core';
import { routes } from "./routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public routes = routes;
  title = 'wfh-progress-strip';
}
