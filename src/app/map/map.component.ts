import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { Coordinates } from './map.service';
import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService],
})
export class MapComponent implements OnInit {
  loaded = false;
  locationAccess = false;
  latitude = 0;
  longitude = 0;

  // Define our base layers so we can reference them multiple times
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });

  user = marker([this.latitude, this.longitude], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png',
    }),
  });

  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  options = {
    layers: [this.streetMaps, this.user],
    zoom: 20,
    center: latLng([this.latitude, this.longitude]),
  };
  constructor(private mapService: MapService) {}

  successCallback({ longitude, latitude }: Coordinates) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.loaded = true;
    this.locationAccess = true;
    this.options.center = latLng([this.latitude, this.longitude]);
    this.user.setLatLng([this.latitude, this.longitude]);
  }

  errorCallback() {
    this.loaded = true;
    this.locationAccess = false;
  }

  async ngOnInit() {
    this.mapService.getLocation(
      (coordinates: Coordinates) => this.successCallback(coordinates),
      this.errorCallback
    );
  }
}
