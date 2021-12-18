import { NgModule } from '@angular/core';
import { MapService } from './map.service';
import { MapComponent } from './map.component';
import { CommonModule } from '@angular/common';
import { MapPipe } from './map.pipe';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

const declarations = [MapComponent, MapPipe];

@NgModule({
  declarations,
  imports: [CommonModule, LeafletModule],
  exports: [declarations],
  providers: [MapService],
})
export class MapModule {}
