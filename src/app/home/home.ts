import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,                 
  imports: [CommonModule],          
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  appTitle: string = 'Welcome to Angular 20';
  userImageUrl: string = 'https://media.tenor.com/Wj8onX9NJAAAAAAe/itsonlywanda.png';
  isHighlighted: boolean = true;
  currentDate: Date = new Date();

}