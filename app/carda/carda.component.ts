import { Component, Input, input } from '@angular/core';
import {RouterLink } from '@angular/router';

@Component({
  selector: 'app-carda',
  imports: [RouterLink],
  templateUrl: './carda.component.html',
  styleUrl: './carda.component.scss'
})
export class CardaComponent {
  @Input() data:any={ 

    id:7,
    image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    title:"White Gold Plated Princess",
    price:9.99,
    category:"jewelery",
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    rate:3,
    count:400
  }
  }
