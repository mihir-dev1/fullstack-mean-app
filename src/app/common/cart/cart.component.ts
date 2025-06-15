import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CoreService } from '../../core/core.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AppState } from '../../store/app.state';
import { selectCart, selectCartQuantity } from '../../store/cart.selector';
@Component({
  selector: 'app-cart',
  imports: [MatIcon,MatBadgeModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  coreServices = inject(CoreService);
  cartItemCount$!: Observable<number>;
  store = inject(Store<AppState>);
  cartItem:any[] = [];
  cartQty:any;

  constructor() {
    // this.store.select('cart').subscribe((res) => {
    //   this.cartItem = res.cart;
    //   console.log(this.cartItem,'this.count$this.count$this.count$');
    // });
    this.store.select(selectCart).subscribe(res => {
      this.cartItem = res.cart;
    })
    this.store.select(selectCartQuantity).subscribe(res => {
      this.cartQty = res;
    })
  }

  ngOnInit() {
    // this.cartItemCount$ = this.cartItem.length;
  }
}
