import { ProductDto } from './../../models/product-dto';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css'],
})
export class SubCategoryComponent implements OnInit {
  page = 0;
  size = 5;
  data = [];
  products: ProductDto[] = [];
  birthday: ProductDto[] = [];
  categoryId: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params.id;
      this.productService.getProductsByCategory(this.categoryId).subscribe(products => {
        this.products = products;
      });
      
    })
    // this.productService.getProductsByCategory('AB3F351A-47DB-4189-9F1C-0A9F3E13F6F7').subscribe(products => {
    //   this.birthday = products;
    //   // this.data = products;
    //   console.log(products)
    // });
    this.getData({ pageIndex: this.page, pageSize: this.size });

  }
  getData(obj: any): void {
    let index = 0;
    const startingIndex = obj.pageIndex * obj.pageSize;
    const endingIndex = startingIndex + obj.pageSize;

    this.data = this.products.filter(() => {
      index++;
      return index > startingIndex && index <= endingIndex ? true : false;
    });
  }
}
