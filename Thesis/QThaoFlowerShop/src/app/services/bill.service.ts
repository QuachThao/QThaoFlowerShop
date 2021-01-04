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
      environment.SERVER_URL + '/bill/chart/' + 2021
    );
  }
  sellingAmount(): Observable<BillDto[]> {
    return this.http.get<BillDto[]>(
      environment.SERVER_URL + '/bill/selling-amount/' + 2021
    );
  }
  Save(
    accountId: any,
    guide: any,
    note: any,
    productId: any,
    quantity: any,
    timeDelivery: any,
    total: any,
    fullNameSender: any,
    phoneSender: any,
    emailSender: any,
    fullNameReceiver: any,
    phoneReceiver: any,
    adReceiver: any
  ): Observable<BillDto> {
    const body = {
      accountId: accountId,
      guide: guide,
      note: note,
      productId: productId,
      quantity: quantity,
      timeDelivery: timeDelivery,
      total: total,
      fullNameSender: fullNameSender,
      phoneSender: phoneSender,
      emailSender: emailSender,
      fullNameReceiver: fullNameReceiver,
      phoneReceiver: phoneReceiver,
      adReceiver: adReceiver,
    };
    console.log(body);
    return this.http.post<BillDto>(environment.SERVER_URL + '/bill/save', body);
  }
}
