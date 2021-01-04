import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryDto } from '../models/category-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(environment.SERVER_URL + '/category/all');
  }
  update(category: any): Observable<CategoryDto> {
    return this.http.put<CategoryDto>(environment.SERVER_URL + '/category/update', category);
  }
  remove(id: any): Observable<any> {
    return this.http.delete<any>(environment.SERVER_URL + '/category/' + id);
  }
  save(category: any): Observable<CategoryDto> {
    return this.http.post<CategoryDto>(environment.SERVER_URL + '/category/save', category);
  }
}
