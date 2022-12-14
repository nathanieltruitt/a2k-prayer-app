import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthComponent } from './components/shared/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'prayers',
    loadChildren: () =>
      import('./components/prayer/prayers.module').then((m) => m.PrayersModule),
  },
  {
    path: 'groups',
    loadChildren: () =>
      import('./components/groups/groups.module').then((m) => m.GroupsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
