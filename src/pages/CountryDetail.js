import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

import CountryService from "../services/CountryService";
import CountryDataDetail from "../components/CountryDataDetail";

function CountryDetail() {
  const [countryData, setCountryData] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    if (id) {
      CountryService.getCountryById(id).then((res) => {
        setCountryData(res.data[0]);      }
      );
    }
  }, [id]);

  return (
    <div className="App">
      <h1>Detalle del país {id} {countryData?.name?.common}</h1>
      <CountryDataDetail />
    </div>
  );
  }
  
  export default CountryDetail;