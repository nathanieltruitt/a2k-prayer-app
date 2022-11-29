import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { SharedModule } from './components/shared/shared.module';
import { AuthModule } from '@auth0/auth0-angular';
import { PrayersModule } from './components/prayer/prayers.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PrayersModule,
    AuthModule.forRoot({
      domain: 'dev-5uc1pddae8rn2b8x.us.auth0.com',
      clientId: 'CLfWKBcwPQyn4UB3BGtnlpvcLj3ikDb4',
      redirectUri: 'http://127.0.0.1:4200',
      cacheLocation: 'localstorage',
    }),
    SharedModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
