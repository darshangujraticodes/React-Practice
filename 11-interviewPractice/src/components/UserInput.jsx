import React, { forwardRef, useRef } from "react";

const UserInput = ({ ref }) => {
  return (
    <>
      <div>
        <input type="text" ref={ref} placeholder="Enter value" />
      </div>
    </>
  );
};

export default UserInput;
