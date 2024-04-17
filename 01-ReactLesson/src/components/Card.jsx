import React from "react";
import "../index.css";

function Card({ courseImg, courseTitle, courseAuthor, coursePrice }) {
  return (
    <>
      <div className="boot-card-wrap my-3">
        <div className="card-img-wrap d-flex justify-content-center">
          <img className="card-img " src={courseImg} alt={courseTitle} />
        </div>
        <div className="card-content-wrap mt-3 px-3">
          <h4 className=" m-0">{courseTitle}</h4>
          <p className="authorName">{courseAuthor}</p>
          <h5>₹ {coursePrice}</h5>
        </div>
      </div>
    </>
  );
}

export default Card;
