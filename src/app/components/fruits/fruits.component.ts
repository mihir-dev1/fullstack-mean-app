import { Component, inject, ChangeDetectionStrategy, } from '@angular/core';
import { CoreService } from '../../core/core.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Category } from '../../core/category';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { increment, decrement } from '../../store/counter.actions';
import { Store } from '@ngrx/store';
import { addCart } from '../../store/cart.action';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-fruits',
  imports: [MatCardModule, MatButtonModule, MatGridListModule, RouterLink,MatProgressSpinnerModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss',
})
export class FruitsComponent {
  coreService = inject(CoreService);
  categoryList:any;
  loaderShow:boolean = false;
  activeRoute = inject(ActivatedRoute);
  store = inject(Store);

  ngOnInit() {
    // this.getCategoryList()
    this.loaderShow = true;
    this.activeRoute.data.subscribe(response => {
      this.categoryList = response['category'];
      this.loaderShow = false;
    },error => {
      this.loaderShow = false;
      console.log(error);
    })
  }

  // getCategoryList() {
  //   this.coreService.getCategory().subscribe((response:Category) => {
  //   },error => {
  //     console.log(error);
  //   })
  // }

  // itemCount = 0;
  // removeC
  addCartItem(item:any) {
    this.store.dispatch(addCart(item));
  }

  removeCart(){
    this.store.dispatch(decrement());
  }

}
