import { useEffect, useState } from "react";
import ResultsTable from "../components/ResultsTable";
import CountryService from "../services/CountryService";

import Button from "react-bootstrap/Button";

function ByRegion() {
  const regions = ["africa", "americas", "asia", "europe", "oceania"];

  const [countryData, setCountryData] = useState([]);

  const [selectedRegion, setSelectedRegion] = useState(null);

  useEffect(() => {
    if (selectedRegion) {
      CountryService.getCountriesByRegion(selectedRegion).then((res) =>
        setCountryData(res.data)
      );
    }
  }, [selectedRegion]);

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  }

  const regionsButtons = regions.map((item) => (
    <Button variant="primary" onClick={()=>handleSelectRegion(item)} key={item}>
      {item}
    </Button>
  ));

  return (
    <div className="App">
      ByRegion
      <div>{regionsButtons}</div>
      <ResultsTable seedData={countryData} />
    </div>
  );
}

export default ByRegion;
