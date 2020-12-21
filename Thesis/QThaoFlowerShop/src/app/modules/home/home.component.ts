import { Router } from '@angular/router';
import { CategoryDto } from 'src/app/models/category-dto';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/models/product-dto';
import { FormControl } from '@angular/forms';
import { VoiceRecognitionService } from 'src/app/services/voice-recognition.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: ProductDto[] = [];
  bestSellerProducts: ProductDto[] = [];
  boquetLovelyProducts: ProductDto[] = [];
  uniqueFlowerBoxProduct: ProductDto[] = [];
  elegantFlowerBaskets: ProductDto[] = [];
  favoriteFlowerShelf: ProductDto[] = [];
  ornamentalPots: ProductDto[] = [];
  otherGifts: ProductDto[] = [];
  birthday: ProductDto[] = [];
  resultSearch: ProductDto[] = [];
  // data: ProductDto[] = [];
  keyword = 'name';
  term: string;
  data: CategoryDto[] = [];
  isLoading = true;
  myControl = new FormControl();
  searchText;
  

  constructor(
    private productService: ProductService,
    private category: CategoryService,
    private router: Router,
    public voiceRecognitionService: VoiceRecognitionService
    ) { }

  ngOnInit(): void {
    this.productService.getProductsByCategory('a84095dd-c10e-4a4c-82d1-8667a06479d7').subscribe(products => {
      this.bestSellerProducts = products;
      // this.data = products;
    });
    this.productService.getProductsByCategory('89bdcef9-1c13-49a5-a729-972001d5a744').subscribe(products => {
      this.boquetLovelyProducts = products;
      // this.data = products;
    });
    this.productService.getProductsByCategory('5de27354-4be7-48e1-b32d-2c52a9f2e703').subscribe(products => {
      this.uniqueFlowerBoxProduct = products;
      // this.data = products;
    });
    this.productService.getProductsByCategory('cfe8c567-252b-4ef2-afbd-e3393044c089').subscribe(products => {
      this.elegantFlowerBaskets = products;
      // this.data = products;
    });
    this.productService.getProductsByCategory('a636b854-3384-4bb1-bdb5-6a4aca94b36d').subscribe(products => {
      this.favoriteFlowerShelf = products;
      // this.data = products;
    });
    this.productService.getProductsByCategory('3e52734d-136e-4150-9ee9-80c33abf6d77').subscribe(products => {
      this.ornamentalPots = products;
      // this.data = products;
    });
    this.productService.getProductsByCategory('c21161f8-dbf0-4649-ab2b-a5c0bf6c3f15').subscribe(products => {
      this.otherGifts = products;
      // this.data = products;
    });
    // this.productService.getAllProducts().subscribe(products =>{
    //   this.data = products;
    // })
    this.category.getAllCategories().subscribe(products =>{
      this.data = products;
      console.log(products)
    })
  }
 
 search(){
   this.productService.searchProduct(this.searchText).subscribe((product: any) =>{
     this.resultSearch = product;
   });
   console.log(this.searchText)
 }
  selectEvent(item) {
    // do something with selected item
    console.log(item)
    this.router.navigate(['/subCategory', item.id]);
  }
 
  onChangeSearch(val: string) {
        console.log(val)
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

  searchVoice(): void {
    this.voiceRecognitionService.init();
    this.voiceRecognitionService.start();
    this.voiceRecognitionService.text$.subscribe(text => {
      this.searchText  = text;
    })
  }

  cancelSearch(): void {
    this.voiceRecognitionService.stop();
    this.resultSearch = [];
  }
}
