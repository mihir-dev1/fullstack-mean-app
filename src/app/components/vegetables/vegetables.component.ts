import { Component, inject, ChangeDetectionStrategy, } from '@angular/core';
import { CoreService } from '../../core/core.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Category } from '../../core/category';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../../store/counter.actions';

@Component({
  selector: 'app-vegetables',
  imports: [MatCardModule, MatButtonModule, MatGridListModule,RouterLink],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.scss'
})
export class VegetablesComponent {
  coreService = inject(CoreService);
  categoryList:any;
  activeRoute = inject(ActivatedRoute);
  store = inject(Store);
  count$: Observable<number>;

  constructor(){
    this.activeRoute.data.subscribe(response => {
      this.categoryList = response['category'];
    })
    this.count$ = this.store.select('count');
  }

  // getCategoryList() {
  //   this.coreService.getCategory().subscribe((response:Category) => {
  //     this.categoryList = response;
  //   },error => {
  //     console.log(error);
  //   })
  // }

  addCart() {
    this.store.dispatch(increment({msg:`Hi it's Working fine bro...`}));
  }

  removeCart(){
    this.store.dispatch(decrement());
  }
}
