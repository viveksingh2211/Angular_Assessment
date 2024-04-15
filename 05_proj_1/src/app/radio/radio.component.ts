import { Component } from '@angular/core';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css',
})
export class RadioComponent {
  title = 'Radio Part';
  
  isValid = true;
  chooseOption(text: string) {
    this.isValid = text === 'valid' ? true : false;
  }
}
