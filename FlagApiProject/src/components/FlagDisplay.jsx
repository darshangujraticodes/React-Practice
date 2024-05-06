import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function FlagDisplay({ searchQuery }) {
  const URL_LINK = "https://restcountries.com/v3.1/all";
  const [flagData, setFlagData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let filterData = flagData.filter((val) =>
    val.name.common.toLowerCase().includes(searchQuery)
  );

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);

      try {
        const response = await fetch(URL_LINK);
        const jsonData = await response.json();
        setFlagData(jsonData);
      } catch (error) {
        setError("Unable to Fetch Data !");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
    console.log("API DATA =", flagData);
    console.log("API Error =", error);
  }, []);

  console.log("flag search query data ", searchQuery);

  return (
    <>
      <div className="display-country-card">
        <div className="container">
          <div className="row">
            {filterData.map((val) => (
              <div
                key={val.name.common}
                className="col-md-3 col-6 justify-center"
              >
                <CountryCard
                  countryFlagImg={val.flags.svg}
                  countryName={val.name.common}
                  countryCapital={val.capital}
                  countryPopulation={val.population}
                  countryRegion={val.region}
                />
              </div>
            ))}
            {}
          </div>
        </div>
      </div>
    </>
  );
}

export default FlagDisplay;
