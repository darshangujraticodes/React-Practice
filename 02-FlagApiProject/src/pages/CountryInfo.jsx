import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import CountryCard from "../components/CountryCard";

function CountryInfo() {
  const { countryName } = useParams();

  const { flagData } = useContext(ThemeContext);

  const flagDataCopy = flagData;

  const countryDisplayName = countryName.replaceAll("-", " ");

  let filterData;
  if (flagDataCopy) {
    filterData = flagDataCopy.filter(
      (item) => item.name.common === countryDisplayName
    );
  }

  return (
    <section className="py-10 countryInfoSection">
      <div className="containerWrap">
        <div className="mb-8 ml-3">
          <Link to="/" className=" backBtn text-xl">
            <span>
              <i className="fa-solid fa-arrow-left"></i>
            </span>
            <span className="ml-2">Back</span>
          </Link>
        </div>

        {!flagDataCopy ? (
          <p className=" capitalize text-3xl text-center">
            You Have Not Selected Any Country
          </p>
        ) : (
          filterData?.map((item, index) => (
            <div key={index + 1} className="">
              <CountryCard
                countryFlag={item.flags.svg}
                countryName={item.name.common}
                countryCapital={item.capital}
                countryLanguage={item.languages}
                countryMapLink={item.maps.googleMaps}
                countryContinent={item.continents}
                countryTimeZone={item.timezones}
                countryIcon={item.flag}
                countryBorderNation={item.borders}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default CountryInfo;
