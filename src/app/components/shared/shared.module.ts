import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent, AuthComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
