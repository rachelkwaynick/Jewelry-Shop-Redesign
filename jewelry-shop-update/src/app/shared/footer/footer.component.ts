import { Component, OnInit } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faTwitterSquare = faTwitterSquare;
  faInstagram = faInstagram;


  constructor() { }

  ngOnInit() {
  }

}
