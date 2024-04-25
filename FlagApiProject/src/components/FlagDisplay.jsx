import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function FlagDisplay() {
  const URL_LINK = "https://restcountries.com/v3.1/all";
  const [flagData, setFlagData] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <CountryCard />
    </>
  );
}

export default FlagDisplay;
