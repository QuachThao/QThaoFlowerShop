import { Component, OnInit, ViewChild, VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbSlideEvent,
  NgbSlideEventSource,
  NgbCarousel,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  private counter = 0;

  constructor() {}
  ngOnInit(): void {
    // setInterval(() => {
    // Chỗ này %5 để nó chạy 0 1 2 3 4 0 1 2 3 4
    // thiếu cái % 5 này thì nó chạy 0 1 2 3 4 5 6 7 8 9
    // nhưng mà mình chỉ có 5 cái (tức là index cuối là 4)
    // k có % 5 là nó truy cập vượt mảng á, nên lỗi
    // this.counter = (this.counter + 1) % 5;
    // querySelectorAll là để lấy ra mấy cái label
    // cái label nó nằm trong cái có class navigation, bản thân nó có class .bar nên t viết vầy
    // muốn chcắ hơn thì thêm tên thẻ luôn
    // hoặc để vầy cũng được, dù sao số label trong 1 cái navigation cũng k đổi
    // tìm theo cái mô tả của mình thì nó có thể ra nhiều kết quả, nên cái hàm này
    // nó trả về một mảng, chỗ ngoặc vuông là truy cập mảng thôi.
    // const label = document.querySelectorAll('.navigation label')[this.counter] as HTMLElement;
    // lấy ra xong thì click, để chung 1 dòng cũng được mà t tách cho nhìn thôi
    //     label.click();
    //   }, 2000);
  }
}
