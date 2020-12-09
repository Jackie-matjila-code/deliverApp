import { Component, OnInit } from '@angular/core';
declare var mapboxgl;
@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0amlsYXRqIiwiYSI6ImNraGtnamp5eTFrdXcycm1jamV2M282eGIifQ.gge0eb3bnscnAeqeVCuPbA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
    });
    map.addControl(new mapboxgl.NavigationControl());
    // Add geolocate control to the map.
map.addControl(
  new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  trackUserLocation: true
  })
  );
  }

}
