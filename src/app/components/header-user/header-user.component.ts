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
      this.count = list.length;
    })
    //this.count = this.cartService.totalItems();
  }



}
