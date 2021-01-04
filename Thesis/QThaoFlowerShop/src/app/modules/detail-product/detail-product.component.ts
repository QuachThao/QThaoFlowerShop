import { ReviewService } from './../../services/review.service';
import { CategoryService } from './../../services/category.service';
import { CartItemService } from './../../services/cart-item.service';
import { DialogLoginSuccessComponent } from './../dialog-login-success/dialog-login-success.component';
import { ProductDto } from './../../models/product-dto';
import { ProductService } from './../../services/product.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogModel, DialogAddSuccessfulComponent } from 'src/app/modules/dialog-add-successful/dialog-add-successful.component';
import { AccountService } from 'src/app/services/account.service';



@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  inputnumber = 1;
  currentRate = 0;
  formGroup: FormGroup;
  result: string;
  product: ProductDto;
  productId: string;
  comment: string;
  bestSellerProducts: ProductDto[] = [];
  otherGifts: ProductDto[] = [];
  commentsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private accountService: AccountService,
    private productService: ProductService,
    private cartitem: CartItemService,
    private cate: CategoryService,
    private review: ReviewService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
  confirmDialog(): void {
    const message = ``;
    // const dialogData = new ConfirmDialogModel('Đã thêm vào giỏ hàng!', message);
    // const dialogRef = this.dialog.open(DialogAddSuccessfulComponent, {
    //   maxWidth: '400px',
    //   data: dialogData
    // });
    // dialogRef.afterClosed().subscribe(dialogResult => {
    //   this.result = dialogResult;
    // });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params.id;
      console.log(this.productId)
      this.productService.getProductById(this.productId).subscribe(product => {
        product.url = product.url.substring(1);
        this.product = product;
        console.log(this.product)
        this.productService.getProductsByCategory(this.product.categoryId).subscribe(products => {
          console.log(this.product.categoryId)
          this.bestSellerProducts = products;
          // this.data = products;
        });
      });
    })
    
    this.productService.getProductsByCategory('c21161f8-dbf0-4649-ab2b-a5c0bf6c3f15').subscribe(products => {
      this.otherGifts = products;
      // this.data = products;
    });
  }
  commentForm() {
    this.commentsForm = this.fb.group({
      content: ['', []],
    });
  }
  addToCart(): void {
    if (this.accountService.isLogin()) {
      const userId = this.accountService.getUser().id;
      const productId = this.route.snapshot.params.id;
      this.productService.buyProduct(userId, productId, this.inputnumber).subscribe();
      this.confirmDialog();
    } else {
      // Open login modal here
    }
  }
  checkLogin(): void{
    if (!this.accountService.isLogin()){
    this.router.navigate(['/login']);
    }
    else {
    const message = ``;
    const dialogData = new ConfirmDialogModel('Đã thêm vào giỏ hàng!', message);
    const dialogRef = this.dialog.open(DialogAddSuccessfulComponent, {
      maxWidth: '500px',
      data: dialogData
    });
    setTimeout(function() {
      dialogRef.close();
    }, 2000);
  }
    // if (!this.accountService.isLogin()){
    //   console.log('anbhe'); 
      // this.dialog.open(DialogAddSuccessfulComponent, {
      //   width: '400px',
      // });
      // this.router.navigate(['/', 'management']);
    }
    Comment(): void{
      if (!this.accountService.isLogin()){
        this.router.navigate(['/login']);
        }
        else{
          const productId = this.route.params.subscribe(params => {
            this.productId = params.id;
            console.log("comment", this.productId)
          })
          const accountId = this.accountService.getUser().id;
          const content = this.commentsForm.value;
          console.log("data form",content)
          // this.review.saveComment(content).subscribe();
          // location.reload();
        }
    }
}