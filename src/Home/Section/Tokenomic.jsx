import React from "react";

export default function Tokenomic() {
  return (
    <div className="container">
      <h2 className="text-center mb-5">Tokenomic</h2>
      <div className="row relative-index-2">
        <div className={`col-12 col-sm-8`}>
          <img
            className="img-fluid rounded"
            src="https://scontent.fhan9-1.fna.fbcdn.net/v/t1.15752-9/330177623_598552092330726_494769844619342975_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5mvqrXeA4qgAX9BgGiY&_nc_ht=scontent.fhan9-1.fna&oh=03_AdQPmBt4M691rgro2C27rYddjzeLWtLaa6QBhIX9epJNpg&oe=643FE258"
            alt=""
          />
        </div>
        <div className="col-12 col-sm-4">
          <div className="d-flex align-items-center" style={{ height: "100%" }}>
            <ul className="tokenomic-list text-white">
              <li>Team locked for 370 days</li>
              <li>Stake locked for 45 days</li>
              <li>Cex listing locked for 45 days</li>
              <li>Airdrop locked for 40 days</li>
              <li>Liquidity locked for 370 days</li>
              <li>Tax = 0%</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="gradient-Tokenomic"></div>
    </div>
  );
}
