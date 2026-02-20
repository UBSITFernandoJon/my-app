import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home';
import { UserInteractionComponent } from './user-interaction/user-interaction';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, UserInteractionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
