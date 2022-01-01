import http from "./http-common";

class UsersDataService {
    getCountriesByRegion() {
      return http.get("/region/americas");
    }
  
  }
  
  export default new UsersDataService();
  