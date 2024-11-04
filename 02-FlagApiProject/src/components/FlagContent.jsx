import React, { useEffect, useState } from "react";
import FlagCard from "./FlagCard";

function FlagContent() {
  const flagAPI = "https://restcountries.com/v3.1/all";

  const [flagData, setFlagData] = useState();
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const fetchFlagData = async () => {
      try {
        const response = await fetch(flagAPI);
        const data = await response.json();

        setFlagData(data);
      } catch (error) {
        setApiError(true);
        console.log(error);
      }
    };

    fetchFlagData();
    console.log("API Fetch Error = ", apiError);
    console.log("api flagdata", flagData);
  }, []);

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
