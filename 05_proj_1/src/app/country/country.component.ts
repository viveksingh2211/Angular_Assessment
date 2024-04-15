import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css',
})
export class CountryComponent {
  country = 'india';
}
