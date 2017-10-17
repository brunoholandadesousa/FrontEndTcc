import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var google;
let latLngNew = new google.maps.LatLng(-16.763740,-49.271720);


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement : ElementRef;
  
  map: any;
 
  constructor(public http: Http,public navCtrl: NavController,public geolocation: Geolocation) {

  }

  ionViewDidLoad(){  
   this.initMap();
   
  }

  initMap(){
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      
     
           
          
           let mapOptions = {            
             center: latLng,latLngNew,
             zoom: 15,
             mapTypeId: google.maps.MapTypeId.ROADMAP
           }
      
           this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
         }, (err) => {
           console.log(err);
         });      
         //directionsDisplay.setMap(this.map);
         
        
          
      /* let latLng = new google.maps.LatLng(-16.763740, -49.271720);
      
           let mapOptions = {
             center: latLng,
             zoom: 15,
             mapTypeId: google.maps.MapTypeId.ROADMAP
           }
      
           this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); */
  }

  addMarker(){
    
     let marker = new google.maps.Marker({
       map: this.map,
       animation: google.maps.Animation.DROP,
       position: this.map.latLngNew,
      
     });
    
     let content = "<h4>Information!</h4>";         
    
     this.addInfoWindow(marker, content);
    
  }

  addInfoWindow(marker, content){
    
     let infoWindow = new google.maps.InfoWindow({
       content: content
     });
    
     google.maps.event.addListener(marker, 'click', () => {
       infoWindow.open(this.map, marker);
     });
    
   }

}
