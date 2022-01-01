import { useEffect } from "react";
import SearchInput from "../components/SearchInput";
import CountryService from "../services/CountryService";

function ByRegion() {


  useEffect(()=>{
    CountryService.getCountriesByRegion().then(
      res=>console.log(res)
    )
  })

    return (
      <div className="App">
        ByRegion
        <SearchInput/>
      </div>
    );
  }
  
  export default ByRegion;