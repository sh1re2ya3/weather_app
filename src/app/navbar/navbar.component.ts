import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() cityChange = new EventEmitter<string>();
  cities: string[] = ['London', 'New York', 'Tokyo', 'Paris', 'Berlin', 'Delhi'];
  selectedCity: string = 'London';
  constructor(private router:Router, private authService:AuthService) {}
  onCityChange(event: any) {
    this.cityChange.emit(this.selectedCity);
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log('Signed out');
  }
}
