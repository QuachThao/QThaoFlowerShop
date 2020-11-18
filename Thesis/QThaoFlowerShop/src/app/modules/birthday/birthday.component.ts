import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css'],
})
export class BirthdayComponent implements OnInit {
  page = 0;
  size = 5;
  data = [];
  data2 = [
    { id: 1, url: '/assets/image/bestseller/1.jpg', name: '1' },
    { id: 2, url: '/assets/image/bestseller/2.jpg', name: 'asd' },
    { id: 3, url: '/assets/image/bestseller/3.jpg', name: 'asd' },
    { id: 4, url: '/assets/image/bestseller/4.jpg', name: 'asd' },
    { id: 5, url: '/assets/image/bestseller/5.jpg', name: 'asd' },
    { id: 6, url: '/assets/image/bestseller/6.jpg', name: 'asd' },
    { id: 7, url: '/assets/image/bestseller/7.jpg', name: 'asd' },
    { id: 8, url: '/assets/image/bestseller/8.jpg', name: 'asd' },
    { id: 9, url: '/assets/image/bestseller/9.jpg', name: 'asd' },
    { id: 10, url: '/assets/image/bestseller/10.jpg', name: 'nafjnfkajs' },
    { id: 11, url: '/assets/image/bestseller/11.jpg', name: 'nafjnfkajs' },
    { id: 12, url: '/assets/image/bestseller/12.jpg', name: 'nafjnfkajs' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.getData({ pageIndex: this.page, pageSize: this.size });
  }
  getData(obj: any): void {
    let index = 0;
    const startingIndex = obj.pageIndex * obj.pageSize;
    const endingIndex = startingIndex + obj.pageSize;

    this.data = this.data2.filter(() => {
      index++;
      return index > startingIndex && index <= endingIndex ? true : false;
    });
  }
}
