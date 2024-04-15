import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Fourth Project';

  student = [
    {
      studentId: 'Vivek123',
      Gender: 'Male',
      birth_Date: '23-Agu-2001',
      courseFee: 2000,
    },
    {
      studentId: 'Rabin432',
      Gender: 'Male',
      birth_Date: '12-dec-2003',
      courseFee: 3000,
    },
    {
      studentId: 'Amrita542',
      Gender: 'Female',
      birth_Date: '02-Oct-2007',
      courseFee: 2500,
    },
    {
      studentId: 'Aman234',
      Gender: 'Male',
      birth_Date: '05-July-2000',
      courseFee: 4000,
    },
    {
      studentId: 'Babli677',
      Gender: 'Female',
      birth_Date: '23-sep-1998',
      courseFee: 5000,
    },
    {
      studentId: 'Avinash827',
      Gender: 'Male',
      birth_Date: '13-March-2002',
      courseFee: 2300,
    },
  ];
  total = this.student.length;
  noFemale = this.student.filter((f) => f.Gender === 'Female').length;
  noMale = this.student.filter((m) => m.Gender === 'Male').length;
}
