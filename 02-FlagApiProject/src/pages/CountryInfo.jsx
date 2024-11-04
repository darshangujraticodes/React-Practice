import React from "react";
import { useParams } from "react-router-dom";

function CountryInfo() {
  const { countryName } = useParams();

  const countryDisplayName = countryName.replaceAll("-", " ");

  console.log("countryPage | Selected country Name =", countryDisplayName);

  return <div>CountryInfo</div>;
}

export default CountryInfo;
