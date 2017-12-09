import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 

  constructor(public navCtrl: NavController, public dataService: DataProvider) {

  }

  
}
