import React, { useState } from "react";

function NumberCounter() {
  let [counter, setCounter] = useState(0);

  const countHandler = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3"> Number Counter </h2>

        <div className="d-flex justify-content-center">
          <div className="count-wrap">
            <h3 className="text-center "> {counter} </h3>
            <button onClick={countHandler}>Click to Count</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NumberCounter;
