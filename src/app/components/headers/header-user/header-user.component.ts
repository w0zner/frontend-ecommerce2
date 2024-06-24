import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {

  count: number = 0;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartService.currentList.subscribe(list => {
      this.count = 0
      list.forEach(
        item => {
          
          this.count += item.quantity
          console.log("item count ", this.count)
        }
      )
      
    })
  }



}
