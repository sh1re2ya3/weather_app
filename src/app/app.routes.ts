import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CurrentWeatherComponent } from './weather/current-weather/current-weather.component';
import { ForecastComponent } from './weather/forecast/forecast.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'current-weather', component: CurrentWeatherComponent ,canActivate: [authGuard] },
  { path: 'forecast', component: ForecastComponent ,canActivate: [authGuard] },
];
