import React, { useRef, useState } from "react";
import UserInput from "./UserInput";

const ForwardRefHook = () => {
  const [inputData, setInputData] = useState();

  const inputRef = useRef();

  const handleUseRefClick = () => {
    inputRef.current.value = 5000;
    inputRef.current.focus();
  };

  return (
    <>
      <div>
        <h2>useRef Hook </h2>

        <UserInput ref={inputRef} />

        <div>
          {/* <input type="text" ref={inputRef} placeholder="Enter value" /> */}

          <button onClick={handleUseRefClick}>Click to Test</button>
        </div>

        <h2>ForwardRef Hook </h2>
      </div>
    </>
  );
};

export default ForwardRefHook;
