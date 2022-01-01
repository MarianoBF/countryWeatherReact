import http from "./http-common";

class UsersDataService {
    getCountriesByRegion(region) {
      return http.get("/region/"+region);
    }
  
  }
  
  export default new UsersDataService();
  