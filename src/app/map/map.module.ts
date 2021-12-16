import { NgModule } from '@angular/core';
import { MapService } from './map.service';
import { MapComponent } from './map.component';
import { CommonModule } from '@angular/common';
import { MapPipe } from './map.pipe';

const declarations = [MapComponent, MapPipe];

@NgModule({
  declarations,
  imports: [CommonModule],
  exports: [declarations],
  providers: [MapService],
})
export class MapModule {}
