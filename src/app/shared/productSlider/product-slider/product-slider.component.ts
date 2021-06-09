import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/core";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']

})
export class ProductSliderComponent implements OnInit {
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log("slide change");
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
