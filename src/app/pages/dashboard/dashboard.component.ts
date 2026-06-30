import { Component } from '@angular/core';

import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavbarComponent,
    Sidebar,
    Footer
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {}