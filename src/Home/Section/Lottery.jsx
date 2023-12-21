import React from "react";

export default function Lottery() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-sm-6 order-2 order-sm-1">
          <b className={`ai-title mb-3 d-block `}>Lottery</b>
          <p className="ai-desc">
            Our lottery function is one of the most exciting features of our
            DeFi project, offering users the chance to win attractive prizes
            through a completely random draw. What sets our lottery apart is the
            fact that the results are entirely determined by a random algorithm,
            with no external interference or manipulation possible.
          </p>
          <div className="kevach"></div>
        </div>
        <div className={`col-12 col-sm-6 order-1 order-sm-2`}>
          <img className="ai-img mb-3 rounded" src="./lottery.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
