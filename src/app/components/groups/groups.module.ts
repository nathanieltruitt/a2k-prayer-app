import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {
  GroupsRoutingModule,
  RoutingComponents,
} from './groups-routing.module';

@NgModule({
  declarations: [RoutingComponents],
  imports: [SharedModule, GroupsRoutingModule],
  exports: [],
})
export class GroupsModule {}
