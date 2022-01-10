import { useEffect, useState } from "react";
import ResultsTable from "../components/ResultsTable";
import Loading from "../components/Loading";
import CountryService from "../services/CountryService";

import Button from "react-bootstrap/Button";

function ByRegion() {
  const regions = ["africa", "americas", "asia", "europe", "oceania"];

  const [countryData, setCountryData] = useState([]);

  const [selectedRegion, setSelectedRegion] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedRegion) {
      setLoading(true);
      CountryService.getCountriesByRegion(selectedRegion).then((res) => {
        setCountryData(res.data);
        setLoading(false);
      });
    }
  }, [selectedRegion]);

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };

  const regionsButtons = regions.map((item) => (
    <Button
      className="m-2"
      variant="primary"
      onClick={() => handleSelectRegion(item)}
      key={item}
    >
      {item}
    </Button>
  ));

  if (!countryData || loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <h2>Listar países de una región</h2>
      <div>{regionsButtons}</div>
      <ResultsTable seedData={countryData} />
    </div>
  );
}

export default ByRegion;
