import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { faUserPlus, faSignInAlt, faHome, faLink, faSignOutAlt, faTree, faMagic, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faSignup = faUserPlus;
  faLogin = faSignInAlt;
  faHome = faHome;
  faLink = faLink;
  faLogout = faSignOutAlt;
  faTree = faTree;
  faLogo = faAmbulance;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
