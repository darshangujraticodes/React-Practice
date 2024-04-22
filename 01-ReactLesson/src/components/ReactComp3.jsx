import React from "react";

function ReactComp3({ children }) {
  console.log("Children prop", children);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="head-wrap">
                <h3>Children Prop Practice</h3>
              </div>
            </div>
            <div className="col-12"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReactComp3;
