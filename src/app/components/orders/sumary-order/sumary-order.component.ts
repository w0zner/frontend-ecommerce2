import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ItemCart } from 'src/app/common/item-cart';
import { Order } from 'src/app/common/order';
import { OrderProduct } from 'src/app/common/order-product';
import { OrderState } from 'src/app/common/order-state';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

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

  orderProducts: OrderProduct[] = []
  userId= 1;


  constructor(private cartService:CartService, private userService: UserService, private orderService: OrderService){}

  ngOnInit(): void {
    this.items= this.cartService.convertToListFromMap();
    this.total= this.cartService.totalCart();
    this.getUser(this.userId);
  }

  generateOrder(){
    this.items.forEach(
      item=> {
        let orderProduct = new OrderProduct(null, item.productId, item.quantity, item.price)
        this.orderProducts.push(orderProduct)
      }
    )

    let order = new Order(null, new Date(), this.orderProducts, OrderState.CACELLED, this.userId)

    this.orderService.createOrder(order).subscribe(
      response => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Orden Nro.[" + response.id + "] generada exitosamente",
          showConfirmButton: false
          
        });

        //this.toastr.success("")  Orden  generada exitosamente", "Confirmación de compra
      }
    )
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
