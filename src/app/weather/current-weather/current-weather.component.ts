import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { WeatherCardComponent } from "../../components/weather-card/weather-card.component";

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    WeatherCardComponent
],
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  city: string = '';
  weatherData: any = {};

  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.weatherService.currentCity$.subscribe((city) => {
      this.city = city;
      this.getWeatherData();
    });
  }

  getWeatherData() {
    this.weatherService.getCurrentWeather(this.city).subscribe((data) => {
      this.weatherData = data;
    });
  }

  navigateToForecast() {
    this.weatherService.setCurrentCity(this.city);
    this.router.navigate(['/forecast']);
  }
}
