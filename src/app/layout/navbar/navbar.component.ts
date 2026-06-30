import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.auth.getUser();
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}