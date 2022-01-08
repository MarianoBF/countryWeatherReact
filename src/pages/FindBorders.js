import Form from "react-bootstrap/Form";

import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import CountryService from "../services/CountryService";
import CountryDataDetail from "../components/CountryDataDetail";

function FindBorders() {
  const [loading, setLoading] = useState(false);

  const regions = ["africa", "americas", "asia", "europe", "oceania"];

  const regionsList = regions.map(item=>(
    <option key={item}>{item}</option>
  ))

  const [selectedRegion, setSelectedRegion] = useState('');
  const [regionCountryList, setRegionCountryList] = useState([]);

  const handleSelectRegion = (e) => {
    setSelectedRegion(e.target.value);
  };


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

  const [selectedCountry, setSelectedCountry] = useState('');
  const [borderCountryList, setBorderCountryList] = useState([]);

  const handleSelectCountry = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    if (selectedCountry) {
      setLoading(true);
      CountryService.searchCountryByName(selectedCountry).then((res) => {
        setBorderCountryList(res.data[0].borders.map(item=>(
          <option key={item}>{item}</option>
        )));
        setLoading(false);
      });
    }
  }, [selectedCountry]);

  const [selectedBorder, setSelectedBorder] = useState('');
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleSelectedBorder = (e) => {
    setSelectedBorder(e.target.value);
  };

  useEffect(() => {
    if (selectedBorder) {
      setLoading(true);
      CountryService.getCountryById(selectedBorder).then((res) => {
        setSelectedDetail(res.data[0]);
        setLoading(false);
      });
    }
  }, [selectedBorder]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>Ver detalles de países limítrofes</h1>
      <Form.Group className="mb-4" controlId="formRegion">
        <Form.Label>Seleccioná Región</Form.Label>
        <Form.Select size="lg" onChange={handleSelectRegion} value={selectedRegion}>
        <option></option>
          {regionsList}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formCountryList">
        <Form.Label>Seleccioná País</Form.Label>
        <Form.Select size="lg" onChange={handleSelectCountry} value={selectedCountry}>
          <option></option>
          {regionCountryList}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formCountryList">
        <Form.Label>Seleccioná un Limítrofe</Form.Label>
        <Form.Select size="lg" onChange={handleSelectedBorder} value={selectedBorder}>
          <option></option>
          {borderCountryList}
        </Form.Select>
      </Form.Group>
      {selectedDetail &&
      <CountryDataDetail countryData={selectedDetail}/>
      }
    </>
  );
}

export default FindBorders;
