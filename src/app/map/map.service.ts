import { Injectable } from '@angular/core';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class MapService {
  getLocation(callback: Function, errorCallback: Function): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        console.log('support for geolocation', latitude, longitude);
        callback({ longitude, latitude });
      });
    } else {
      console.log('No support for geolocation');
      errorCallback();
    }
  }
}
