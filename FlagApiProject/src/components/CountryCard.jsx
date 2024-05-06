import React from "react";

function CountryCard({
  countryFlagImg,
  countryName,
  countryCapital,
  countryPopulation,
  countryRegion,
}) {
  return (
    <>
      <div className="country-card">
        <div className="flag-img-wrap">
          <img src={countryFlagImg} alt={`${countryName + " Flag"}`} />
        </div>
        <div className="card-text">
          <h3 className="card-title">{countryName}</h3>
          <p>
            <b>Population: </b>
            {countryPopulation.toLocaleString("en-IN")}
          </p>
          <p>
            <b>Region: </b>
            {countryRegion}
          </p>
          <p>
            <b>Capital: </b>
            {countryCapital}
          </p>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
