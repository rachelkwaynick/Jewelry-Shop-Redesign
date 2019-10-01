import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'], 
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  images = [
    "../../../assets/Bracelets/bracelet1.png",
    "../../../assets/Earrings/earring1.png",
    "../../../assets/Necklaces/necklace1.png",
    "../../../assets/Rings/ring1.png"
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    // config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.pauseOnHover = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
  }


}
