function CountryDataDetail({countryData}) {

    const languagesData = Object.values(countryData.languages).map(item=>(
      <li key={item}>{item}</li>
      )
    )

    const currencyData = Object.values(countryData.currencies).map(item=>(
      <p key={item.symbol}>{item.name} - Símbolo: {item.symbol}</p>
      )
    )

    const otherLanguagesData = Object.entries(countryData.translations).map((item, index)=>(
      <li key={item[1].common+index}>{item[0]} -- {item[1].common}</li>
      )
    )

    return (
      <div className="row">
          <h1>Detalle del país {countryData.name.common}</h1>
          <div className="col-6">
              <div><span className="label">Población:</span> <span>{countryData.population}</span></div>
              <div><span className="label">Miembro de la ONU:</span> {countryData.unMember ? 'Sí' : 'No'}</div>
              <div><span className="label">Idiomas:</span><ul>{languagesData}</ul></div>
              <div><span className="label">Monedas:</span>{currencyData}</div>
              <div><span className="label">Nombre en otros idiomas:</span><ul>{otherLanguagesData}</ul></div>
          </div>
          <div className="col-6">
              <img src={countryData.flags.png} className="mediumFlag" alt="flag"/>
              {/* <div *ngIf="weatherData">
              <div><p className="label">Temperatura Actual:</p> <p>{{weatherData.main.temp - 273.15 | number}} °C</p></div>
              <div><p className="label">Presión atmosférica</p> <p>{{weatherData.main.pressure}} hectopascales</p></div>
              <div><p className="label">Descripción:</p> <p>{{weatherData.weather[0].description | titlecase}}</p></div>
              </div>*/}
          </div> 
      </div>
    );
  }
  
  export default CountryDataDetail;