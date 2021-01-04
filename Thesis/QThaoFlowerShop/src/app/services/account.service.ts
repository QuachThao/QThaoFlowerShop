import { environment } from './../../environments/environment';
import { UserDto } from 'src/app/models/user-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(user: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(environment.SERVER_URL + '/account/login', user);
  }
  getAllUsers(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(environment.SERVER_URL + '/account/all');
  }
  getUsersByRole(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(environment.SERVER_URL + '/account/role');
  }
  Save(user: any): Observable<UserDto> {
    return this.http.post<UserDto>(environment.SERVER_URL + '/account/save', user);
  }
  changePass(pass: any):Observable<UserDto>{
    return this.http.post<UserDto>(environment.SERVER_URL + '/account/changePass', pass)
  }
  remove(id: any): Observable<any> {
    return this.http.delete<any>(environment.SERVER_URL + '/account/accounts/' + id);
  }
  isLogin(): boolean {
    return !!sessionStorage.getItem('user');
  }

  getUser(): UserDto {
    return JSON.parse(sessionStorage.getItem('user')) || null;
  }
}
