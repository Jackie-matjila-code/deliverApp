
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList = [];

  products = [
    {id:1, name:'Dell', price:4500} ,
    {id:2, name:'Acer', price:5500},
    {id:3, name:'Hp', price:6500},
    {id:4, name:'Lenovo', price:3500},
    {id:5, name:'Product 5', price:7500},
    {id:6, name:'Product 6',price: 8500},
    {id:7, name:'Product 7', price:9500},
  ]

  constructor() { }

  addToCart(product){
   this.cartList.push(product);
  }

  removeItem(product){
    var i = 0;
   while(i < this.cartList.length){
    if(this.cartList[i] === product){
      this.cartList.splice(i, 1);
    }else{
      ++i;
    }
  }
  return this.cartList;
 }
 getCart() {
  return this.cartList;
}
getProducts() {
  return this.products;
}
}
