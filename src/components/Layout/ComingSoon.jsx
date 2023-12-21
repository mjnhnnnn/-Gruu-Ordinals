import React from "react";
import "./comingsoon.css";
export default function ComingSoon() {
  return (
    <>
      <div className="py-5 comingsoon">
        <div className="container">
          <div className="c-title">Coming Soon</div>
          <p className="c-desc">
            In the meantime, Signup for our monthly newsletter to stay up to
            date.
          </p>
          <div className="c-subcribe">
            <input
              className="rounded-pill"
              type="text"
              placeholder="Email Adress"
            />
            <button className="rounded-pill ">Signup</button>
          </div>
          <div className="c-icon"></div>
        </div>
      </div>
    </>
  );
}
