import React from "react";
import InfoCard from "./InfoCard";
import appDev from "../assets/appdev.jpg";
import seoService from "../assets/seo.jpeg";

function HeroContent() {
  return (
    <>
      <section className=" ">
        <div className="container">
          <div className="row">
            <h2 className="text-center text-white pb-4">
              Component and Props Practice
            </h2>
            <div className="col-md-4">
              <InfoCard
                cardImg={
                  "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
                }
                cardTitle={"Website Development"}
                cardInfo={
                  "Our web solutions can help build a strong brand identity and take  your business to new heights. "
                }
                cardCTA={"Enquire Now !"}
              />
            </div>

            <div className="col-md-4">
              <InfoCard
                cardImg={appDev}
                cardTitle={"App Development"}
                cardInfo={
                  "Transform your Ideas into Innovative Apps which Drive Growth and Efficiency. "
                }
                cardCTA={"Enquire Now !"}
              />
            </div>

            <div className="col-md-4">
              <InfoCard
                cardImg={seoService}
                cardTitle={"Seo Growth "}
                cardInfo={
                  "Our web solutions can help build a strong brand identity and take  your business to new heights. "
                }
                cardCTA={"Enquire Now !"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroContent;
