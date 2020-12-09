
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList = [];

  products = [
    {id:1, name:'Dell', price:4500, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6ZxxxOq4rcneDcf5kII2UFCAwTu43l82AhkZpfMvvCernKOh32srGMcb8Mk&usqp=CAc'} ,
    {id:2, name:'Acer', price:5500, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6ZxxxOq4rcneDcf5kII2UFCAwTu43l82AhkZpfMvvCernKOh32srGMcb8Mk&usqp=CAc'},
    {id:3, name:'Hp', price:6500, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6ZxxxOq4rcneDcf5kII2UFCAwTu43l82AhkZpfMvvCernKOh32srGMcb8Mk&usqp=CAc'},
    {id:4, name:'Lenovo', price:3500,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6ZxxxOq4rcneDcf5kII2UFCAwTu43l82AhkZpfMvvCernKOh32srGMcb8Mk&usqp=CAc'},
    {id:5, name:'Huawei', price:7500,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6ZxxxOq4rcneDcf5kII2UFCAwTu43l82AhkZpfMvvCernKOh32srGMcb8Mk&usqp=CAc'},
    {id:6, name:'Aspiron',price: 8500,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6ZxxxOq4rcneDcf5kII2UFCAwTu43l82AhkZpfMvvCernKOh32srGMcb8Mk&usqp=CAc'},
    {id:4, name:'Lenovo', price:13500,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6ZxxxOq4rcneDcf5kII2UFCAwTu43l82AhkZpfMvvCernKOh32srGMcb8Mk&usqp=CAc'},
    {id:5, name:'Huawei', price:11000,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6ZxxxOq4rcneDcf5kII2UFCAwTu43l82AhkZpfMvvCernKOh32srGMcb8Mk&usqp=CAc'},
    {id:6, name:'Aspiron',price: 18500,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6ZxxxOq4rcneDcf5kII2UFCAwTu43l82AhkZpfMvvCernKOh32srGMcb8Mk&usqp=CAc'}
    
  ]

  constructor() { }

  addToCart(product){
   this.cartList.push(product);
  }


  removeItemAll(product) {
    // var idx = this.cartList.indexOf(product);
    //   if (idx !== -1) {
    //     this.cartList.splice(idx, 1);
    //   }
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
