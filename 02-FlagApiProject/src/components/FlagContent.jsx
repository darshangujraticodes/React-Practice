import React, { useContext, useEffect, useState } from "react";
import FlagCard from "./FlagCard";
import { ThemeContext } from "../context/ThemeContext";

function FlagContent() {
  const { flagData } = useContext(ThemeContext);

  return (
    <>
      <div className="FlagDisplayWrapper py-5">
        <div className="containerWrap">
          <div className="row">
            {!flagData ? (
              <div>
                <p>Loading Flag Details ...</p>
              </div>
            ) : (
              flagData?.map((item, index) => (
                <div key={item.name.common} className="col-md-3">
                  <FlagCard
                    countryFlagImg={item.flags.svg}
                    countryName={item.name.common}
                    countryPopulation={item.population}
                    countryRegion={item.region}
                    countryCapital={item.capital}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FlagContent;
