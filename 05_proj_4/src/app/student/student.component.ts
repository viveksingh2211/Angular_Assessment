import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  @Input() total: number = 0;
  @Input() noFemale: number = 0;
  @Input() noMale: number = 0;
}
