import { BillDto } from './../models/bill-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { notEqual } from 'assert';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  constructor(private http: HttpClient) {}
  getAllBills(): Observable<BillDto[]> {
    return this.http.get<BillDto[]>(environment.SERVER_URL + '/bill/all');
  }
  getChart(): Observable<BillDto[]> {
    return this.http.get<BillDto[]>(
      environment.SERVER_URL + '/bill/chart/' + 2020
    );
  }
  Save(
    productId: any,
    accountId: any,
    quantity: any,
    note: any,
    guide: any,
    timeDelivery: any,
    total: any
  ): Observable<BillDto> {
    const body = {
      productId: productId,
      accountId: accountId,
      quantity: quantity,
      note: note,
      guide: guide,
      timeDelivery: timeDelivery,
      total: total,
    };
    return this.http.post<BillDto>(environment.SERVER_URL + '/bill/save', body);
  }
}
