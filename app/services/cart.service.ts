import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];


  constructor() { }

  getCartItems() {
    return this.cartItems;
  }


  addToCart(product: any) {
    this.cartItems.push(product);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  clearCart() {
    this.cartItems = [];
  }
}
