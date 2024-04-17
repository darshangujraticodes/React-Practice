import React from "react";
import pythonBan from ".././assets/pythonBanner.jpeg";
import reactBan from ".././assets/reactBanner.jpeg";
import javaBan from ".././assets/javaBanner.jpeg";
import Card from "./Card";

const ReactComp = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Card
                courseImg={reactBan}
                courseTitle="React Course for Beginner's"
                courseAuthor="Darshan Gujrati"
                coursePrice="50000"
              />
            </div>

            <div className="col-md-4">
              <Card
                courseImg={javaBan}
                courseTitle="Java Course for Beginner's"
                courseAuthor="Rohit Pani"
                coursePrice="60000"
              />
            </div>

            <div className="col-md-4">
              <Card
                courseImg={pythonBan}
                courseTitle="Python Course for Beginner's"
                courseAuthor="Shyam gupta"
                coursePrice="80000"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReactComp;
