
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
    {id:5, name:'Huawei', price:7500},
    {id:6, name:'Aspiron',price: 8500},
    {id:4, name:'Lenovo', price:13500},
    {id:5, name:'Huawei', price:11000},
    {id:6, name:'Aspiron',price: 18500}
    
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
