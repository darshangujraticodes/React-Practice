import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, showData } from "../features/info/dataSlice";

function GrandSubChild() {
  const [inputNumber, setInputNumber] = useState("");

  const dispatch = useDispatch();

  const data = useSelector((state) => state.dataStoreReducer.value);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(addData(parseInt(inputNumber)));
  };

  console.log(data, inputNumber);

  return (
    <>
      <div>
        <h2>Grand Subchild Data = {data}</h2>

        <div>
          <form onSubmit={formSubmitHandler}>
            <div>
              <input
                type="number"
                value={inputNumber}
                onChange={(e) => setInputNumber(e.target.value)}
                placeholder="Enter Number"
              />
            </div>
            <div>
              <input
                type="submit"
                className="submitBtn"
                value="Store Input Value!"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default GrandSubChild;
