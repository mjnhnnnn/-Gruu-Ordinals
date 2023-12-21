import React from "react";

export default function OurPartners() {
  return (
    <div className="container">
      <h2 className="mb-5 text-center support_title ">Our partners</h2>
      <div className={`list-item-dex`}>
        <div>
          <a href="https://www.pinksale.finance" target="_blank">
            <img
              data-aos="fadeIn "
              src="https://powercyclefinance.com/wp-content/uploads/2022/12/pinksale-logo-text-white-e1645700608897-1-1024x304.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="https://www.dexview.com" target="_blank">
            <img
              data-aos="fadeIn "
              src="https://www.memeai.world/wp-content/uploads/2023/01/dexviewwhite-1024x241.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              data-aos="fadeIn "
              src="https://loudchain.co/wp-content/uploads/2021/11/coinmarketcap-logo.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              data-aos="fadeIn "
              src="https://static.coingecko.com/s/coingecko-logo-white-ea42ded10e4d106e14227d48ea6140dc32214230aa82ef63d0499f9c1e109656.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img data-aos="fadeIn " src="./audit.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
