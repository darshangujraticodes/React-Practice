import React from "react";
import GrandSubChild from "./GrandSubChild";

function GrandChild() {
  return (
    <>
      <div>
        <h2>GrandChild Data = </h2>

        <GrandSubChild />
      </div>
    </>
  );
}

export default GrandChild;
