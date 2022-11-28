import React from "react";

function Flipbox() {
  return (
    <>
      <div className="centerflipcards">
        <div class="square-flip">
          <div className="square">
            <div className="square-container">
              <h2 className="textshadow">Lorem Ipsum</h2>
              <h3 className="textshadow">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
              </h3>
            </div>
            <div className="flip-overlay"></div>
          </div>
          <div className="square2">
            <div className="square-container2">
              <div className="align-center"></div>
              <h2>Lorem Ipsum Lorem Ipsum Lorem Ipsum </h2>
            </div>
            <div className="flip-overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flipbox;
