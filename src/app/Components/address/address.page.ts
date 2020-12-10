import { Router } from '@angular/router';
import {Feature, MapService } from './../../Services/map/map.service';
import { Component, OnInit } from '@angular/core';

declare var mapboxgl;
@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  checkAddress ="";

  delivery = false;
  collect = true;
  coordinates : any;
  list : any;
  selectedAddress : string= "";
  lat;
  lng;


  addresses = [];
  constructor(private mapDoa: MapService, private router:Router) { }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0amlsYXRqIiwiYSI6ImNraGtnamp5eTFrdXcycm1jamV2M282eGIifQ.gge0eb3bnscnAeqeVCuPbA';
    var map = new mapboxgl.Map({
   
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
    });
    map.addControl(new mapboxgl.NavigationControl());
    map.on("load", () =>{
      map.resize();
      });
    // Add geolocate control to the map.
    map.addControl(
     new mapboxgl.GeolocateControl({
     positionOptions: {
     enableHighAccuracy: true
    },
      trackUserLocation: true
     }));
     var marker = new mapboxgl.Marker() // initialize a new marker
  .setLngLat([-122.25948, 37.87221]) // Marker [lng, lat] coordinates
  .addTo(map); // Add the marker to the map
  }

  search(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
      this.mapDoa.search_word(searchTerm)
        .subscribe((features: Feature[]) => {
          this.coordinates = features.map(feat => feat.geometry)
          this.addresses = features.map(feat => feat.place_name)
          this.list = features;
          console.log(this.list)
        });
    } else {
      this.addresses = [];
    }
  }


  addressCheck(event){
    this.checkAddress = event.target.value;
    console.log("info",this.checkAddress);


}


onSelect(address, i) {
  this.selectedAddress = address;
  //  selectedcoodinates=

  console.log("lng:" + JSON.stringify(this.list[i].geometry.coordinates[0]))
  console.log("lat:" + JSON.stringify(this.list[i].geometry.coordinates[1]))
  this.lng = JSON.stringify(this.list[i].geometry.coordinates[0])
  this.lat = JSON.stringify(this.list[i].geometry.coordinates[1])
  // this.user.coords = [this.lng,this.lat];
  console.log("index =" + i)
  console.log(this.selectedAddress)
  // this.user.address = this.selectedAddress;
  this.addresses = [];
}

finish(){
  this.router.navigateByUrl('thank-you');
}

}
