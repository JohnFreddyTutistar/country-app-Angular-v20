import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer";
import { HeaderApp } from "./shared/components/header-app/header-app";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('country-app');
}
