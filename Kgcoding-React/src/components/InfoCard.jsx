import React from "react";
import style from "./css/InfoCard.module.css";

function InfoCard({ cardImg, cardTitle, cardInfo, cardCTA }) {
  let name = "Darshan";
  let profession = "Full Stack Developer";
  let passion = "Teacher";

  return (
    <>
      <div className="cardWrapper mb-5">
        <div className="card">
          <img
            src={cardImg}
            style={{ width: "100%", height: "240px" }}
            alt=""
          />
          <div className="card-body">
            <h5 className={style.cardTitle}>{cardTitle}</h5>
            <p className={style.cardText}>{cardInfo}</p>
            <a href="#" className="btn btn-primary">
              {cardCTA}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
