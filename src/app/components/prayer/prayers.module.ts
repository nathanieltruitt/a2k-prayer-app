import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {
  PrayersRoutingModule,
  RoutingComponents,
} from './prayers-routing.module';

@NgModule({
  declarations: [RoutingComponents],
  imports: [SharedModule, PrayersRoutingModule],
  exports: [],
})
export class PrayersModule {}
