"use client";

import './WhoAreWe.css';
import React from "react";

const WhoAreWe = () => {
  return (
    <div className="waw-wrapper">
      <div className="container">
        <div className="waw-container">
          {/*Head of the WaW*/}
          <div className="waw-head">
            <span className="tag">Who are we</span>
            <span className="title">
              {" "}
              Delivering high-quality medical supplies with
              reliability & precision
            </span>
            <span className="des"> How Our Supply Chain Operates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
