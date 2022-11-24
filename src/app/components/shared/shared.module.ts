import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [NavbarComponent, AuthComponent],
  imports: [],
  exports: [NavbarComponent],
})
export class SharedModule {}
