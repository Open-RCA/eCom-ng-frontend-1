import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
   slideIndex = 1;
  constructor() { }


  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }



plusSlides(n) {
  this.showSlides(this.slideIndex += n);
}

currentSlide(n) {
  this.showSlides(this.slideIndex = n);
}

showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    (<HTMLElement>slides[i]).style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  (<HTMLElement>slides[this.slideIndex-1]).style.display = "block";
  dots[this.slideIndex-1].className += " active";
  captionText.innerHTML =  (<HTMLImageElement>dots[this.slideIndex-1]).alt;
}
}
