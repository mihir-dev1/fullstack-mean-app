import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-category-details',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent {

  categoryDetails:any;
  router = inject(ActivatedRoute);
  core = inject(CoreService);
  constructor(){
    this.router.params.subscribe(response => {
      this.getCategoryData(response['id'])
    })
  }

  getCategoryData(id:string) {
    this.core.getCategoryDetails(id).subscribe((response:any) => {
      this.categoryDetails = response;
    },error => {
      console.log("Error..",error);
    })
  }


}
