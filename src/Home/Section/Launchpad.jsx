import React from "react";

export default function Launchpad() {
  return (
    <div className="container">
      <div className="row align-items-center relative-index-2">
        <div className="col-12 col-sm-6 order-2">
          <b className={`ai-title mb-3 d-block `}>Launchpad</b>
          <p className="ai-desc">
            Our launchpad is a key component of our DeFi project, offering users
            access to some of the most promising new projects in the
            cryptocurrency space. We carefully vet each project before listing
            on our platform, ensuring that only the most reputable and promising
            opportunities are presented to our community.
          </p>
          <div className="kevach"></div>
        </div>
        <div className={`col-12 col-sm-6 order-1`}>
          <img className="ai-img rounded mb-3" src="./lauchpad.jpg" alt="" />
        </div>
      </div>
      <div className="gradient-Launchpad"></div>
    </div>
  );
}
