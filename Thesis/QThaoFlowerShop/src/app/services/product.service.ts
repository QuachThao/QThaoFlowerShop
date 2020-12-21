import { environment } from './../../environments/environment';
import { ProductDto } from 'src/app/models/product-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(environment.SERVER_URL + '/product/all');
  }
  getProductById(id: any): Observable<any> {
    return this.http.get<any>(environment.SERVER_URL + '/product/' + id);
  }
  Save(product: any): Observable<ProductDto> {
    return this.http.post<ProductDto>(environment.SERVER_URL + '/product/save', product);
  }
  Update(product: any): Observable<ProductDto> {
    return this.http.put<ProductDto>(environment.SERVER_URL + '/product/update', product);
  }
  remove(id: any): Observable<any> {
    return this.http.delete<any>(environment.SERVER_URL + '/product/' + id);
  }

  getProductsByCategory(id: string): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(environment.SERVER_URL + '/product/category/' + id);
  }
  getProductByAccountId(id: string): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(environment.SERVER_URL + '/cartitem/' + id);
  }
  buyProduct(userId: string, productId: string, inputnumber): Observable<ProductDto>{
      return this.http.post<ProductDto>(environment.SERVER_URL + '/cartitem/save', {
          productId: productId,
          accountId: userId,
          quantity: inputnumber,
      });
  }
  searchProduct(searchString: string): Observable<ProductDto[]>{
    return this.http.get<ProductDto[]>(environment.SERVER_URL + '/product/search/' + searchString);
  }
}
