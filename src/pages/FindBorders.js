import Form from "react-bootstrap/Form";

import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import CountryService from "../services/CountryService";

function FindBorders() {
  const [loading, setLoading] = useState(false);

  const regions = ["africa", "americas", "asia", "europe", "oceania"];

  const regionsList = regions.map(item=>(
    <option key={item}>{item}</option>
  ))

  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleSelectRegion = (e) => {
    setSelectedRegion(e.target.value);
  };

  const [regionCountryList, setRegionCountryList] = useState([]);

  useEffect(() => {
    if (selectedRegion) {
      setLoading(true);
      CountryService.getCountriesByRegion(selectedRegion).then((res) => {
        setRegionCountryList(res.data.map(item=>(
          <option key={item.cca3}>{item.name.common}</option>
        )));
        setLoading(false);
      });
    }
  }, [selectedRegion]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Buscar limítrofes de un país</h1>
      <Form.Group className="mb-4" controlId="formRegion">
        <Form.Label>Región</Form.Label>
        <Form.Select size="lg" onChange={handleSelectRegion} value={selectedRegion}>
        <option></option>
          {regionsList}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formCountryList">
        <Form.Label>País</Form.Label>
        <Form.Select size="lg" onChange={null}>
          {regionCountryList}
        </Form.Select>
      </Form.Group>
    </div>
  );
}

export default FindBorders;
