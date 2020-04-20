import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  faEnvelope = faEnvelope;
  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;
  faTwitter = faTwitter;
  faInstagram = faInstagram;


  constructor() { }

  ngOnInit() {
  }

}
