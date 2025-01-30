# Weather App

This is a weather app that displays current weather data as well as a forecast for selected cities. It utilizes Angular 19 for the front-end and fetches weather data from an external weather API (e.g., OpenWeather API). The app includes a weather card component to display weather information and forecasts, along with an interactive city selector.

## Features

- **Current Weather**: Displays real-time weather information such as temperature, humidity, wind speed, cloudiness, and more for a selected city.
- **Weather Forecast**: Displays a 7-day weather forecast with temperature, humidity, wind speed, and precipitation details.
- **City Selector**: Allows users to select the city and view its current weather and forecast.
- **Responsive Layout**: Optimized for both small (mobile) and large (web) screens.

## Technologies Used

- **Angular**: Front-end framework used to build the app.
- **Bootstrap**: For responsive design and layout.
- **Material UI**: Angular Material components for UI elements like the toolbar, card, and select dropdown.
- **SCSS**: Styling for the app.
- **Weather API**: (e.g., OpenWeather API) to fetch weather data.

## Project Setup

Follow the instructions below to run this project locally.

### Prerequisites

1. **Node.js**: Ensure that you have Node.js installed on your system. You can check this by running:

   ```bash
   node -v

2. **Angular CLI**: Install Angular CLI globally by running::

   npm install -g @angular/cli

3. **API Key**: You'll need an API key for fetching weather data. You can get one from OpenWeather:

   npm install -g @angular/cli

## Install Dependencies
Install the necessary project dependencies by running:

    npm install

## Add Your API Key
    Open weather/weather.service.ts.
    Replace the apiKey value of apiKey with your OpenWeather API key.
    
## Running the App
    Run the app locally by using the following command:
        ng serve
This will start the development server at http://localhost:4200/. You can view the app by navigating to this URL in your browser.

Build the App for Production
To build the app for production, run:

## Note
I have added fallback dummy object while using API response (for forecast page since hat API was behaving erratically), so that UI functionality can be assessed without dependance on external API.