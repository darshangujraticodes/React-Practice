import React from "react";
import ReactComp from "../components/ReactComp";
import ReactComp2 from "../components/ReactComp2";
import ReactComp3 from "../components/ReactComp3";
import NumberCounter from "../components/NumberCounter";

function HomePage() {
  return (
    <>
      <div>
        <h1 className="text-center  mt-3">React Practice</h1>
      </div>

      <ReactComp />
      <ReactComp2 />
      <ReactComp3>
        {{
          id: 10,
          name: "harry",
          job: "web developer",
          salary: 500000,
        }}
      </ReactComp3>
      <NumberCounter />
    </>
  );
}

export default HomePage;
