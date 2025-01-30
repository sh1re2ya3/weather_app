import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = signal(this.isLocalStorageAvailable() && !!localStorage.getItem('token'));


  private mockUser = {
    username: 'curious',
    password: 'Pass@123',
  };

  private isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }

  get isLoggedIn() {
    return this.isAuthenticated();
  }

  login(username: string, password: string): boolean {
    if (username === this.mockUser.username && password === this.mockUser.password) {
      if (this.isLocalStorageAvailable()) {
        localStorage.setItem('token', 'dummy-jwt-token');
      }
      this.isAuthenticated.set(true);
      return true; // Login successful
    }
    return false; // Invalid credentials
  }

  logout() {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('token');
    }
    this.isAuthenticated.set(false);
  }
}