import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { Coordinates } from './map.service';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService],
})
export class MapComponent implements OnInit {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }),
    ],
    zoom: 7,
    center: latLng([46.879966, -121.726909]),
  };

  loaded = false;
  locationAccess = false;
  latitude = 0;
  longitude = 0;

  source = '';

  constructor(private mapService: MapService) {}

  successCallback({ longitude, latitude }: Coordinates) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.loaded = true;
    this.locationAccess = true;
    this.source = `https://www.openstreetmap.org/export/embed.html?bbox=11.645553410053253%2C48.192565960755516%2C11.648745238780975%2C48.19387836444258&amp;layer=mapnik&amp;marker=${this.latitude}%2C${this.longitude}`;
  }

  errorCallback() {
    console.log('error');
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
