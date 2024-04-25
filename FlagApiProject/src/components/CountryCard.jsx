import React from "react";
import indiaFlag from "../assets/indiaflag.svg";

function CountryCard() {
  return (
    <>
      <div className="country-card">
        <div className="flag-img-wrap">
          <img src={indiaFlag} alt="" />
        </div>
        <div class="card-text">
          <h3 class="card-title">India</h3>
          <p>
            <b>Population: </b>1,38,00,04,385
          </p>
          <p>
            <b>Region: </b>Asia
          </p>
          <p>
            <b>Capital: </b>New Delhi
          </p>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
