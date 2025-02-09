import React, { useState } from "react";
import Child from "./Child";
import { useDispatch, useSelector } from "react-redux";
import { addData, dataIncrement } from "../features/info/dataSlice";

function Parent() {
  const data = useSelector((state) => state.dataStoreReducer.value);

  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-3">
        <h2>Parent Data = {data}</h2>

        <Child />

        <div className="">
          <button
            className="submitBtn"
            onClick={() => dispatch(dataIncrement())}
          >
            Click Me!
          </button>
        </div>
      </div>
    </>
  );
}

export default Parent;
