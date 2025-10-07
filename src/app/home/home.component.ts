import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Welcome to the Home Page!';
  counter = 0;
  items = ['Angular', 'React', 'Vue'];

  increment() {
    this.counter++;
  }
}
