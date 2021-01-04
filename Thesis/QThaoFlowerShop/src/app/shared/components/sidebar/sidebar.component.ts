import { AccountService } from 'src/app/services/account.service';
import { Component, OnInit } from '@angular/core';
import { CategoryDto } from 'src/app/models/category-dto';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  panelOpenState = false;
  categories: CategoryDto[] = [];
  themeCategories: CategoryDto[] = [];
  flowerCategories: CategoryDto[] = [];
  fullName: string = '';
  role: string ='';
  constructor(
    private categoryService: CategoryService,
    private accountService: AccountService,
    private router: Router
  ) {}
  checkLogin(): void{
    if (!this.accountService.isLogin()){
    this.router.navigate(['/login']);
    }
    else {
      this.router.navigate(['/buyProduct']);
    }
  }
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      this.themeCategories = categories.filter((cate) => cate.type === 'theme');
      this.flowerCategories = categories.filter(
        (cate) => cate.type === 'typeFlower'
      );
      console.log(categories);
    });
    this.fullName = this.accountService.getUser()?.fullName;
    this.role = this.accountService.getUser()?.role;
  }
}
