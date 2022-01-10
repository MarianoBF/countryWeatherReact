import axios from "axios";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather?appid=dbb813b9b0607467b6238f2c5c550e69&lang=es&q=",
});
