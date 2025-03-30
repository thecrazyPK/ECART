import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { ProductsComponent } from '../../products/products.component';
import { CartComponent } from '../../cart/cart.component';
import { CheckoutComponent } from '../../checkout/checkout.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[HomeComponent,ProductsComponent,CartComponent,CheckoutComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}

