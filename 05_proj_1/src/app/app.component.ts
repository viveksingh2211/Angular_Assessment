import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RadioComponent } from './radio/radio.component';
import { CountryComponent } from './country/country.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RadioComponent, CountryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'First Assignment For Today';
  fruit = ['Apple', 'Mango', 'Grapes', 'Banana', 'Water-Mealon'];
}
