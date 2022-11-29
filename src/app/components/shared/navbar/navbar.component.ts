import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  faArrowCircleLeft,
  faLayerGroup,
  faPrayingHands,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faArrowCircleLeft = faArrowCircleLeft;
  faLayerGroup = faLayerGroup;
  faPrayingHands = faPrayingHands;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }
}
