import React from "react";

export default function Weareon() {
  return (
    <>
      <div className={` container`}>
        <h2 className="text-center ">We are on:</h2>
        <div className="wrap">
          <a href="https://t.me/GruuDrc20" target="blank">
            <img className="sc1" src="./tele2.png" alt="" />
          </a>
          <a href="https://twitter.com/gruudrc20" target="blank">
            <img src="./tw2.png" alt="" />
          </a>
        </div>

        {/* <div className="row g-4 row-cols-1 row-cols-lg-2">we are on</div> */}
      </div>
    </>
  );
}
