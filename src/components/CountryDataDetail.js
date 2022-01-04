function CountryDataDetail({countryData}) {

    if (!countryData) {
      return (
        <div>
          Loading
        </div>
      )
    }

    const languagesData = Object.values(countryData.languages).map(item=>(
      <li>{item}</li>
      )
    )

    const currencyData = Object.values(countryData.currencies).map(item=>(
      <p>{item.name} - Símbolo: {item.symbol}</p>
      )
    )

    const otherLanguagesData = Object.values(countryData.translations).map(item=>(
      <p>{item.common}</p>
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


              {/* <div><p className="label">Moneda:</p> <p *ngFor="let currency of countryData.currencies">{{currency.name}}</p></div>
              <div><p className="label">Nombre en otros idiomas:</p> <p *ngFor="let trans of countryData.translations | keyvalue"><span className="language">{{trans.key}}:</span> {{trans.value}}</p></div> */}
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