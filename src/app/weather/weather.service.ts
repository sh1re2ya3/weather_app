import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private currentCitySubject = new BehaviorSubject<string>('London');
  currentCity$ = this.currentCitySubject.asObservable();
  private apiKey = '4328cf8bb0b8279b0f07625a01b4415d';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) {}

  setCurrentCity(city: string) {
    this.currentCitySubject.next(city);
  }

  getCurrentCity(): string {
    return this.currentCitySubject.value;
  }

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}weather?q=${city}&appid=${this.apiKey}&units=metric`).pipe(
      catchError(error => {
        return of({ message: 'Unable to fetch current weather data' });
      })
    );;
  }
  getForecast(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}forecast/daily?q=${city}&cnt=14&appid=${this.apiKey}&units=metric`).pipe(
      catchError(error => {
        console.error('Error fetching forecast data:', error);
        // Return a dummy object on error
        return of(this.getDummyForecast());
      }))
    }

    private getDummyForecast() {
      return {
        "city": {
          "id": 3163858,
          "name": "Zocca",
          "coord": {
            "lon": 10.99,
            "lat": 44.34
          },
          "country": "IT",
          "population": 4593,
          "timezone": 7200
        },
        "cod": "200",
        "message": 0.0582563,
        "cnt": 14,
        "list": this.generateDummyForecastData()
      };
    }
  
    
  // Generates dummy data for 14 days
    
  private generateDummyForecastData() {
    const dummyData = [];
    const weatherConditions = [
      { main: 'Clear', description: 'clear sky', icon: '01d' },
      { main: 'Clouds', description: 'few clouds', icon: '02d' },
      { main: 'Rain', description: 'light rain', icon: '10d' },
      { main: 'Rain', description: 'moderate rain', icon: '10d' },
      { main: 'Thunderstorm', description: 'thunderstorm', icon: '11d' },
      { main: 'Snow', description: 'snow', icon: '13d' },
      { main: 'Mist', description: 'mist', icon: '50d' }
    ];
  
    for (let i = 0; i < 14; i++) {
      const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
      
      dummyData.push({
        "dt": Math.floor(Date.now() / 1000) + (i * 86400), // Date in Unix timestamp, 1 day interval
        "sunrise": Math.floor(Date.now() / 1000) + (i * 86400) - 3600,
        "sunset": Math.floor(Date.now() / 1000) + (i * 86400) + 3600,
        "temp": {
          "day": 295 + Math.random() * 5, // Random temperature between 295K and 300K
          "min": 290 + Math.random() * 5,
          "max": 295 + Math.random() * 5,
          "night": 290 + Math.random() * 5,
          "eve": 295 + Math.random() * 5,
          "morn": 290 + Math.random() * 5
        },
        "feels_like": {
          "day": 295 + Math.random() * 5,
          "night": 290 + Math.random() * 5,
          "eve": 295 + Math.random() * 5,
          "morn": 290 + Math.random() * 5
        },
        "pressure": 1013 + Math.random() * 10, // Random pressure
        "humidity": 50 + Math.random() * 30, // Random humidity
        "weather": [randomWeather], // Use the randomly selected weather condition
        "speed": 2 + Math.random() * 3, // Random wind speed
        "deg": 200 + Math.random() * 100, // Random wind degree
        "gust": 3 + Math.random() * 3, // Random gust
        "clouds": 50 + Math.random() * 30, // Random cloud percentage
        "pop": Math.random(), // Random precipitation probability
        "rain": Math.random() * 10 // Random rainfall
      });
    }
    return dummyData;
  }
  
  
  
  }
  
  
