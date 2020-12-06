
import { CartService } from './../../Services/cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

cart = [];
items = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }
  add(product){
    this.cartService.addToCart(product);
     console.log(this.cartService.getCart());
  }
}
