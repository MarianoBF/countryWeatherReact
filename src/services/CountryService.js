import httpCountry from "./CountryURL";

class CountryService {
  getAllCountries() {
    return httpCountry.get("/all");
  }

  getCountriesByRegion(region) {
    return httpCountry.get("/region/" + region);
  }

  searchCountryByName(country) {
    return httpCountry.get("/name/" + country);
  }
  searchCountryByCapital(capital) {
    return httpCountry.get("/capital/" + capital);
  }

  getCountryById(id) {
    return httpCountry.get("/alpha/" + id);
  }
}

export default new CountryService();
