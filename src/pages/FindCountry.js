import { useState, useEffect } from "react";

import CountryService from "../services/CountryService";
import ResultsTable from "../components/ResultsTable";
import SearchInput from "../components/SearchInput";
import Loading from "../components/Loading";

function FindCountry() {
  const [countryData, setCountryData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (country) {
      setLoading(true);
      CountryService.searchCountryByName(country).then((res) => {
        setCountryData(res.data);
        setLoading(false);
      });
    }
  }, [country]);

  const handleSearch = (search) => {
    setCountry(search);
  };


  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <h2>Buscar país</h2>
      <SearchInput handleSearch={handleSearch} />
      <ResultsTable seedData={countryData} />
    </div>
  );
}

export default FindCountry;
