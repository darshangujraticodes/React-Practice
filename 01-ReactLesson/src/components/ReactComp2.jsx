import React, { useState } from "react";
import rightArrow from "../assets/next.png";
import leftArrow from "../assets/back.png";

function ReactComp2() {
  const totalAppleCount = 10;

  const [leftBasket, setLeftBasket] = useState(totalAppleCount);
  const [rightBasket, setRightBasket] = useState(0);

  const leftPushHandle = () => {
    if (leftBasket === totalAppleCount) {
      setLeftBasket(10);
      setRightBasket(0);
      console.log("dsds");
    } else {
      console.log("left btn click");
      setLeftBasket(() => leftBasket + 1);
      setRightBasket(() => rightBasket - 1);
    }
  };

  const rightPushHandle = () => {
    if (rightBasket === totalAppleCount) {
      setLeftBasket(0);
      setRightBasket(10);
      console.log("dsds");
    } else {
      console.log("right btn click");
      setLeftBasket(() => leftBasket - 1);
      setRightBasket(() => rightBasket + 1);
    }
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
                <h3>
                  Apple Count = {leftBasket}
                  {leftBasket === 0 ? (
                    <p>(Basket is Empty)</p>
                  ) : leftBasket === 10 ? (
                    <p>(Basket is Full)</p>
                  ) : (
                    <p></p>
                  )}
                </h3>
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
                <h3>
                  Apple Count = {rightBasket}
                  {rightBasket === 0 ? (
                    <p> (Basket is Empty) </p>
                  ) : rightBasket === 10 ? (
                    <p> (Basket is Full) </p>
                  ) : (
                    <p> </p>
                  )}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReactComp2;
