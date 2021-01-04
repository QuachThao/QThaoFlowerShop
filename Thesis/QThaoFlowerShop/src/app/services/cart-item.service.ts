import { CartItemDto } from './../models/cartItem-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(private http: HttpClient) { }
  getAllCartitems(): Observable<CartItemDto[]> {
    return this.http.get<CartItemDto[]>(environment.SERVER_URL + '/cartitem/all');
  }
  Save(productId: any, accountId: any, quantity: any): Observable<CartItemDto> {
    const body = {
      productId: productId,
      accountId: accountId,
      quantity: quantity
    }
    return this.http.post<CartItemDto>(environment.SERVER_URL + '/cartitem/save', body);
  }
  remove(id: any): Observable<any> {
    return this.http.delete<any>(environment.SERVER_URL + '/cartitem/' + id);
  }
  clear(id: any): Observable<any> {
    return this.http.delete<any>(environment.SERVER_URL + '/cartitem/clear/' + id);
  }

}
