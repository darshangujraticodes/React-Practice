import React, { useState } from "react";
import rightArrow from "../assets/next.png";
import leftArrow from "../assets/back.png";

function ReactComp2() {
  const [leftBasket, setLeftBasket] = useState(0);
  const [rightBasket, setRightBasket] = useState(10);

  const leftPushHandle = () => {
    console.log("left btn click");
    setLeftBasket(() => leftBasket + 1);
    setRightBasket(() => rightBasket - 1);
  };

  const rightPushHandle = () => {
    console.log("right btn click");
    setLeftBasket(() => leftBasket - 1);
    setRightBasket(() => rightBasket + 1);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3">
              <h2 className="text-center mt-3">Apple Task </h2>
            </div>
            <div className="col-md-3">
              <div className="content-wrap">
                <h2>Basket 1</h2>
                <h3>Apple Count = {leftBasket} </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img-wrap d-flex justify-content-center">
                <button>
                  <img
                    src={leftArrow}
                    onClick={leftPushHandle}
                    className="arrImg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img-wrap d-flex justify-content-center">
                <button>
                  <img
                    src={rightArrow}
                    onClick={rightPushHandle}
                    className="arrImg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="content-wrap ">
                <h2>Basket 2</h2>
                <h3>Apple Count = {rightBasket} </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReactComp2;
