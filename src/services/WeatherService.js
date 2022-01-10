import httpWeather from "./WeatherURL";

class WeatherService {
  appid = "dbb813b9b0607467b6238f2c5c550e69";

  getWeatherForCountry(country) {
    return httpWeather.get("weather?appid=" + this.appid + "&lang=es&q=" + country);
  }
}

export default new WeatherService();
