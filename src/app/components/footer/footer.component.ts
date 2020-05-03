import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG, faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands';
import { GetDataPostService } from './../../services/get-data-post.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  listPost: any ;

  constructor(
    private _getListPost: GetDataPostService,
  ) { }

  ngOnInit() {
    this._getListPost.getListPostsHome().subscribe((data: any) => {
      this.listPost = [...data];
      console.log('listPost: ', this.listPost);
      
    });
  }

  //_embedded -> wp:featuredmedia  -> source_url
}
