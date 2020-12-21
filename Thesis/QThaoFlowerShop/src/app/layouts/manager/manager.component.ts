import { UserDto } from './../../models/user-dto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';



@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
fullName: string = '';
role: string='';
  constructor(
    private router: Router,
    private accountService: AccountService,
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
