import http from "./http-common";

class UsersDataService {

    getAllCountries() {
      return http.get("/all");
    }

    getCountriesByRegion(region) {
      return http.get("/region/"+region);
    }

    searchCountryByName(country) {
      return http.get("/name/"+country);
    }
    searchCountryByCapital(capital) {
      return http.get("/capital/"+capital);
    }

    getCountryById(id) {
      return http.get("/alpha/"+id);
    }
  
  }
  
  export default new UsersDataService();
  