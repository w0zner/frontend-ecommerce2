import { OrderProduct } from "./order-product";
import { OrderState } from "./order-state";

export class Order {

    constructor(
      public id: number | null,
      public dateCreated:Date,
      public orderProducts: OrderProduct[],
      public orderState: OrderState,
      public userId:number
    ){}

    getTotal(){
        let total= 0
        for(let  orderProduct of this.orderProducts) {
            total += orderProduct.price * orderProduct.quantity
        }
        console.log(total)
    }
      
}
