import { ReviewDto } from './../models/review-dto';
import { environment } from './../../environments/environment';
import { ProductDto } from 'src/app/models/product-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  getAllReviews(): Observable<ReviewDto[]> {
    return this.http.get<ReviewDto[]>(environment.SERVER_URL + '/review/all');
  }
  saveComment(review: any): Observable<ReviewDto> {
    return this.http.post<ReviewDto>(
      environment.SERVER_URL + '/review/save',
      review
    );
  }
}
