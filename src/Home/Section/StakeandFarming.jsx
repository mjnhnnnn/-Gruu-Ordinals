import React from "react";

export default function StakeandFarming() {
  return (
    <div className="container">
      <div className="row align-items-center relative-index-2">
        <div className="col-12 col-sm-6 order-2">
          <b className={`ai-title mb-3 d-block `}>Stake & Farming Pool</b>
          <p className="ai-desc">
            Our project includes a range of yield farming and staking
            opportunities, which offer users the chance to earn attractive
            returns on their cryptocurrency holdings. These features operate on
            the Arbitrum network, providing fast, secure, and low-cost
            transactions for all users.
          </p>
          <div className="kevach"></div>
        </div>
        <div className={`col-12 col-sm-6 order-1`}>
          <img className="ai-img rounded mb-3" src="./famming.jpg" alt="" />
        </div>
      </div>
      <div className="gradient-StakeandFarming"></div>
    </div>
  );
}
