import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import CountryService from "../services/CountryService";

function Flags() {
  const [countryData, setCountryData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    CountryService.getAllCountries().then((res) => {
      setCountryData(
        res.data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
      );
      setLoading(false);
    });
  }, []);

  const flags = countryData.map((item) => (
    <div key={item.cca3}>
      <img src={item.flags.png} className="smallFlag" alt="flag" />
      <p>{item.name.common}</p>
    </div>
  ));

  if (loading) {
    return <Loading />;
  }

  return <div className="flagsGrid">{flags}</div>;
}

export default Flags;
