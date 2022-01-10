import httpWeather from "./WeatherURL";

class WeatherService {

  getWeatherForCountry(country) {
    return httpWeather.get(country);
  }
}

export default WeatherService;