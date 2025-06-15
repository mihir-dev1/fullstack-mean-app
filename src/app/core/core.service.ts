import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  api_url:string = environment.API_URL;
  private cartData = new BehaviorSubject<any>(0);
  $cartData = this.cartData.asObservable();

  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category>  {
    return this.http.get<Category>(this.api_url+'/category');
  }

  getCategoryDetails(id:string): Observable<Category>{
    return this.http.get<Category>(this.api_url+'/category/'+id);
  }

  sendData(data: any) {
    if(typeof(data) === 'number') {
      this.cartData.next(data); // Update data
    }
  }

}
