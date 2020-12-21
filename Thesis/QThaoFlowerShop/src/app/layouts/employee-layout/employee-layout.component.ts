import { AccountService } from './../../services/account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.css']
})
export class EmployeeLayoutComponent implements OnInit {
  fullName: string = '';
  role: string ='';
  constructor(
    private router: Router,
    public accountService: AccountService

  ) { }
  logout(): void {
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/');
    // location.reload();
  }
  ngOnInit(): void {
    this.fullName = this.accountService.getUser()?.fullName;
    this.role = this.accountService.getUser()?.role;

  }

}
