import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { CommonModule, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, NgFor, NgIf],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})

export class ProductsComponent implements OnInit, OnDestroy {
  products: any[] = [];
  private subscription: Subscription = new Subscription(); 


  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription=this.http.get('https://fakestoreapi.com/products').subscribe((data: any) => {
      this.products = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Added to Cart: ' + product.title);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }
}

