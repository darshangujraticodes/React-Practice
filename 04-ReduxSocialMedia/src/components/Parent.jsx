import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [data, setData] = useState();

  return (
    <>
      <div>
        <h2>Parent Data = {data}</h2>

        <Child />

        <div className="">
          <button className="submitBtn">Click Me!</button>
        </div>
      </div>
    </>
  );
}

export default Parent;
