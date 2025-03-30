import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrls:['./checkout.component.scss'] 
})
export class CheckoutComponent {
  constructor(private cartService: CartService) {}

  checkout() {
    alert('Order placed successfully!');
    this.cartService.clearCart();
  }

}
