import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

declare let jQuery:any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'], 
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  title = 'ngSlick';
 
 
  slides = [
    {img: "../../../assets/Bracelets/bracelet1.png"},
    {img: "../../../assets/Bracelets/bracelet2.png"},
    {img: "../../../assets/Bracelets/bracelet3.png"},
    {img: "../../../assets/Bracelets/bracelet4.png"},
   
  ];
 
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": true,
    'arrows': true,
    "dotsClass": 'slick-dots',
  };
  
  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  
  // slickInit(e) {
  //   console.log('slick initialized');
  // }
  
  // breakpoint(e) {
  //   console.log('breakpoint');
  // }
  
  // afterChange(e) {
  //   console.log('afterChange');
  // }
  
  // beforeChange(e) {
  //   console.log('beforeChange');
  // }

  // images = [
  //   "../../../assets/Bracelets/bracelet1.png",
  //   "../../../assets/Earrings/earring1.png",
  //   "../../../assets/Necklaces/necklace1.png",
  //   "../../../assets/Rings/ring1.png"
  // ];

  // constructor(config: NgbCarouselConfig) {
  //   // customize default values of carousels used by this component tree
  //   // config.interval = 10000;
  //   // config.wrap = true;
  //   // config.keyboard = false;
  //   // config.pauseOnHover = false;
  //   // config.showNavigationArrows = true;
  //   // config.pauseOnHover = true;
  //   // config.showNavigationIndicators = true;
  // }

  ngOnInit() {

    
  }


}
