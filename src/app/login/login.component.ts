import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.services';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

login() {

  if (!this.username || !this.password) {
    alert('Por favor completa los campos');
    return;
  }

  const success = this.auth.login(this.username, this.password);

  if (success) {
    this.router.navigate(['/dashboard']);
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}
}