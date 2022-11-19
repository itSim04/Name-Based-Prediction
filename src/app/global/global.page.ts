import { Component } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: 'global.page.html',
  styleUrls: ['global.page.scss']
})
export class GlobalPage {

  constructor() {

    setInterval(() => console.log("Welcome"), 2000);

  }

}
