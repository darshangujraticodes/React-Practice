import React from "react";

function FlagCard({
  countryFlagImg,
  countryName,
  countryPopulation,
  countryCapital,
  countryRegion,
}) {
  return (
    <div className="flagCardWrap  my-3  ">
      <div className="flagImgWrap  ">
        <img src={countryFlagImg} className="flagImg" alt={countryName} />
      </div>
      <div className="flagContentWrap p-4  text-md">
        <h3 className="text-2xl font-medium">{countryName}</h3>
        <p className=" mt-2">
          Population : <span>{countryPopulation}</span>{" "}
        </p>
        <p className="mt-1">
          Region : <span>{countryRegion}</span>{" "}
        </p>
        <p className="mt-1">
          Capital : <span>{countryCapital}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default FlagCard;