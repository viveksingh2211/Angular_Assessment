import { Routes } from '@angular/router';
import { ProductTableComponent } from './product-table/product-table.component';
import { PricingSummeryComponent } from './pricing-summery/pricing-summery.component';
export const routes: Routes = [
  {
    path: 'product-table',
    component: ProductTableComponent,
  },
  {
    path: 'price-summary',
    component: PricingSummeryComponent,
  },
];
