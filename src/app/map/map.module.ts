import { NgModule } from '@angular/core';
import { MapService } from './map.service';
import { MapComponent } from './map.component';
import { CommonModule } from '@angular/common';

const declarations = [MapComponent];

@NgModule({
  declarations,
  imports: [CommonModule],
  exports: [declarations],
  providers: [MapService],
})
export class MapModule {}
