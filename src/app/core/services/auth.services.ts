import { Injectable } from '@angular/core';
import { USERS } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userKey = 'loggedUser';

  login(username: string, password: string): boolean {

    const user = USERS.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem(this.userKey, JSON.stringify(user));
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.userKey);
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  getUser() {
    const data = localStorage.getItem(this.userKey);
    return data ? JSON.parse(data) : null;
  }
}