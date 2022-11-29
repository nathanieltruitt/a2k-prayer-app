import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrayersComponent } from './prayers.component';

const routes: Routes = [
  {
    path: '',
    component: PrayersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayersRoutingModule {}
export const RoutingComponents = [PrayersComponent];
