import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from "../../components/weather-card/weather-card.component";

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    WeatherCardComponent
],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  city: string = '';
  forecastData: any[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.currentCity$.subscribe((city) => {
      this.city = city;
      this.getForecastData();
    });
  }

  getForecastData() {
    this.weatherService.getForecast(this.city).subscribe((data) => {
      this.forecastData = data.list;
    });
  }
}
