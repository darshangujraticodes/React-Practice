import React from "react";

function InfoCard() {
  let name = "Darshan";
  let profession = "Full Stack Developer";
  let passion = "Teacher";

  return (
    <>
      <div className="cardWrapper">
        <p>
          Hi! Student {name} here, <br />
          Welcome you to CS Techtube Channel <br />
          I am <br />
          {profession} by Profession <br />
          {passion} by Passion
        </p>
      </div>
    </>
  );
}

export default InfoCard;
