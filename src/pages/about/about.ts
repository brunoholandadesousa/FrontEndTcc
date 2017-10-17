import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  users: any[];
  page: number;

  constructor(public navCtrl: NavController, public dataService: DataProvider,
    public navParams: NavParams, private toast: ToastController) {

  }

  ionViewDidLoad() {
    this.dataService.getRemoteData();
    //this.dataService.getLocalData();
  }

  /*  ionViewDidEnter(){
     this.dataService.getRemoteData();
     this.users = [];
     this.page = 1;
    // this.getAllUsers(this.page);
   } */


}
