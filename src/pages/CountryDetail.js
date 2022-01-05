import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

import CountryService from "../services/CountryService";
import CountryDataDetail from "../components/CountryDataDetail";
import Loading from "../components/Loading";

function CountryDetail() {
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      CountryService.getCountryById(id).then((res) => {
        setCountryData(res.data[0]);  
        setLoading(false)
      }
      );
    }
  }, [id]);

  if (!countryData || loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="App">
      <CountryDataDetail countryData={countryData} />
    </div>
  );
  }
  
  export default CountryDetail;