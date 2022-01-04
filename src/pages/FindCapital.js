import { useState, useEffect } from "react";

import CountryService from "../services/CountryService";
import ResultsTable from "../components/ResultsTable";
import SearchInput from '../components/SearchInput';

function FindCapital() {
  const [countryData, setCountryData] = useState([]);

  const  [capital, setCapital] = useState(null);

  useEffect(() => {
    if (capital) {
      CountryService.searchCountryByCapital(capital).then((res) =>
        setCountryData(res.data)
      );
    }
  }, [capital]);

  const handleSearch = (search) => {
    setCapital(search)
  }

  return (
    <div className="App">
      <h1>Buscar país por capital</h1>
      <SearchInput handleSearch={handleSearch}/>
      <ResultsTable seedData={countryData} />
    </div>
  );
  }
  
  export default FindCapital;