import React, { useState } from "react";
import Style from "./css/BgColorSection.module.css";

function BgColorChange() {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("#f5f5f5");

  const handleAddBtnClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <section
        className={Style.bgColorSection}
        style={{ backgroundColor: color }}
        id="bgColor"
      >
        <div className="container">
          <div className="row">
            <div>
              <h2 className={Style.h2}>useState Practice</h2>
            </div>
            <div className="buttonWrapper container mt-5">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className={Style.btnWrap}>
                    <button
                      className={`${Style.colorBtn} ${Style.btn1} `}
                      onClick={() => setColor("#43baff")}
                    >
                      Blue
                    </button>

                    <button
                      className={`${Style.colorBtn} ${Style.btn2} `}
                      onClick={() => setColor("#915BE2")}
                    >
                      Purple
                    </button>

                    <button
                      className={`${Style.colorBtn} ${Style.btn3} `}
                      onClick={() => setColor("#DAA520")}
                    >
                      Golden
                    </button>

                    <button
                      className={`${Style.colorBtn} ${Style.btn4} `}
                      onClick={() => setColor("#f5f5f5")}
                    >
                      White
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="countWrapper">
              <button
                onClick={() => setCount(count + 1)}
                className={`${Style.colorBtn} ${Style.btn1} `}
              >
                Add + 1
              </button>

              <button
                onClick={handleAddBtnClick}
                className={`${Style.colorBtn} ${Style.btn1} `}
              >
                Add + 1
              </button>
              <p className="py-3">Count Value = {count}</p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default BgColorChange;
