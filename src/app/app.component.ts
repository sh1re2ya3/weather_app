import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherService } from './weather/weather.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  imports: [ CommonModule,RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  showNavbar = true;

  constructor(private weatherService: WeatherService, private router:Router,private authService:AuthService) {}
  ngOnInit() {
     // Listen to route changes to toggle navbar visibility
     this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide navbar on login route
        this.showNavbar = event.url !== '/login';
      }
    });
  }
  onCityChange(selectedCity: string): void {
    this.weatherService.setCurrentCity(selectedCity);
  }
}
