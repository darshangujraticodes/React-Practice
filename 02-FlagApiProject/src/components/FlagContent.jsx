import React, { useContext, useEffect, useState } from "react";
import FlagCard from "./FlagCard";
import { ThemeContext } from "../context/ThemeContext";

function FlagContent() {
  const { flagData } = useContext(ThemeContext);

  const [flagCountryList, setFlagCountryList] = useState();
  const [searchquery, setSearchQuery] = useState("");

  const searchFilter = () => {
    const countrySearchValue = flagData?.filter((item) =>
      item.name.common.toLowerCase().includes(searchquery.toLowerCase())
    );
    setFlagCountryList(countrySearchValue);
  };

  useEffect(() => {
    searchFilter();

    console.log(flagCountryList);
  }, [searchquery]);

  useEffect(() => {
    setFlagCountryList(flagData);

    console.log(flagCountryList);
  }, [flagData]);

  return (
    <>
      <div className="FlagDisplayWrapper py-5">
        <div className="containerWrap">
          <div className="searchInputWrap">
            <input
              type="text"
              className=" inputText "
              placeholder="Search Your Favourite Country ..."
              value={searchquery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="searchIcon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>

          <div className="row">
            {!flagCountryList ? (
              <div>
                <p>Loading Flag Details ...</p>
              </div>
            ) : (
              flagCountryList?.map((item, index) => (
                <div key={item.name.common} className="col-md-3">
                  <FlagCard
                    countryFlagImg={item.flags.svg}
                    countryName={item.name.common}
                    countryPopulation={item.population}
                    countryRegion={item.region}
                    countryCapital={item.capital}
                    countryBorder={item.borders}
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
