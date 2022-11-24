import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { SharedModule } from './components/shared/shared.module';
import { AuthModule } from '@auth0/auth0-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AuthModule.forRoot({
      domain: 'dev-5uc1pddae8rn2b8x.us.auth0.com',
      clientId: 'CLfWKBcwPQyn4UB3BGtnlpvcLj3ikDb4',
    }),
    SharedModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
