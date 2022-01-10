import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <Link to={"/pais/" + item.cca3}>
      <div key={item.cca3}>
        <img src={item.flags.png} className="smallFlag" alt="flag" />
        <p>{item.name.common}</p>
      </div>
    </Link>
  ));

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h2>Listado de banderas</h2>
      <div className="flagsGrid">{flags}</div>;
    </>
  );
}

export default Flags;
