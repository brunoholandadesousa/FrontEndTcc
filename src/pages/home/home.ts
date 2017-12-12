import { Component, Injectable, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/map';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;

  map: any;
  posts: any;

  constructor(public http: Http, public navCtrl: NavController, public geolocation: Geolocation,public dataService: DataProvider) {

  }

  ionViewDidLoad() {   
    this.initMap();       
  }

  initMap() {
    
    var pos = this.dataService.getRemoteData();
    let thiz = this;
    
    pos.then (data => {
      console.log(data.lt, data.lg);
      
      var latLng = new google.maps.LatLng(data.lt, data.lg);
      let mapOptions = {
        center:latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);     
      var marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
      });

      let content = "<h4></h4>";
      thiz.addInfoWindow(marker, content);
    });
    
  }
  
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }



}
