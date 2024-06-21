import { Component, OnInit } from '@angular/core';
import { ItemCart } from 'src/app/common/item-cart';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sumary-order',
  templateUrl: './sumary-order.component.html',
  styleUrls: ['./sumary-order.component.css']
})
export class SumaryOrderComponent implements OnInit {

  items: ItemCart[] = [];
  total: number= 0;

  firstname: string= "";
  lastname: string= "";
  email: string= "";
  address: string= "";

  constructor(private cartService:CartService, private userService: UserService){}

  ngOnInit(): void {
    this.items= this.cartService.convertToListFromMap();
    this.total= this.cartService.totalCart();
    this.getUser(1);
  }

  deleteItem(productId: number){
    this.cartService.deleteItemCart(productId);
    this.items= this.cartService.convertToListFromMap();
    this.total= this.cartService.totalCart();
  }

  getUser(id: number){
    this.userService.getUserById(id).subscribe(
      data=> {
        this.firstname= data.firstname;
        this.lastname= data.lastname;
        this.email= data.email;
        this.address= data.address;
      }
    )
  }


}
