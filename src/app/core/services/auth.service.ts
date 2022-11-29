import { Injectable } from '@angular/core';
import { User, AuthService as AuthZeroService } from '@auth0/auth0-angular';
import { BehaviorSubject, Subscription, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AuthZeroService) {}

  // login() {
  //   this.auth.loginWithRedirect();
  // }

  logout() {
    this.auth.logout();
  }

  get isAuthenticated() {
    return this.auth.isAuthenticated$;
  }
}
