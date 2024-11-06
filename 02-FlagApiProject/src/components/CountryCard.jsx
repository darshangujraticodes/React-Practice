import React, { useContext, useEffect } from "react";

import { assets } from "../assets/assetsData";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function CountryCard({
  countryFlag,
  countryName,
  countryTimeZone,
  countryLanguage,
  countryCapital,
  countryContinent,
  countryMapLink,
  countryIcon,
  countryBorderNation,
}) {
  const { flagData } = useContext(ThemeContext);

  const languageValues = Object.values(countryLanguage);

  // console.log(languageValues, typeof languageValues);

  // console.log(countryBorderNation);
  let borderNation = [];
  const flagDataCopy = flagData;

  if (countryBorderNation) {
    for (let k of countryBorderNation) {
      // console.log(k, typeof k);
      let filterNation = flagDataCopy.filter((item) => {
        if (item.cca3 == k) {
          borderNation.push(item.name.common);
        }

        return 0;
      });
      console.log("border nation = ", k, filterNation);
    }
  }

  console.log("borderNation list = ", borderNation);

  let nationList = "";

  for (let k of borderNation) {
    nationList = nationList + k + ", ";
  }

  let languageStringVal = "";

  for (let k of languageValues) {
    languageStringVal = languageStringVal + k + ", ";
  }

  // console.log("k values = ", languageStringVal);

  return (
    <div>
      <div className="row">
        <div className=" col-md-6 ">
          <div className="countryInfoFlagImageWrap flex justify-end ">
            <img src={countryFlag} alt={countryName} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="countryInfoFlagContent  text-xl ">
            <h1 className="text-4xl font-medium countryName">
              {countryName} <span className="ml-2">{countryIcon}</span>{" "}
            </h1>
            <p className="mt-2">
              Capital : <span>{countryCapital}</span>
            </p>
            <p className="flex  flex-row items-center justify-start  my-3">
              Google Map :{" "}
              <Link
                to={countryMapLink}
                target="_blank"
                className=" mapbtn ml-4 mt-3 md:mt-0 flex items-center gap-2"
              >
                <span>Locate in Map </span>
                <span>
                  <i className="fa-solid fa-earth-americas"></i>
                </span>
              </Link>
            </p>
            <p className="mt-2">
              Language : <span>{languageStringVal}</span>
            </p>
            <p className="mt-2">
              Timezones : <span>{countryTimeZone}</span>
            </p>
            <p className="mt-2">
              Continents : <span>{countryContinent}</span>
            </p>

            {countryBorderNation && (
              <p className="mt-2">
                Border Countries : <span>{nationList}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
