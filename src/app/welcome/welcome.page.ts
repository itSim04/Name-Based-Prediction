import { Component } from '@angular/core';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss']
})
export class WelcomePage {

  dog_pic: String = "https://ionicframework.com/docs/img/demos/card-media.png";
  
  constructor(private dog: FetchService) {

    this.dog.fetchImage().subscribe(response => this.dog_pic = response.message);

  }

}
