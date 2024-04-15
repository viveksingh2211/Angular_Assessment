import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductTableComponent } from './product-table/product-table.component';
import { PricingSummeryComponent } from './pricing-summery/pricing-summery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet, ProductTableComponent, PricingSummeryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Product-detail';
}
