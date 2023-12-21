import React from "react";

export default function ArbiexSecurity() {
  return (
    <div className="container">
      <div>
        <h2 className="mb-5 text-center counter-info-title">
          {/* <span className="color_change ">ARBIEX</span> */}
          Arbiex Security And Safety Certification
        </h2>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-4 col-md-4">
            <div className="counters__link border rounded">
              <div className="counters__img-wrap">
                <img
                  alt="img"
                  decoding="async"
                  loading="lazy"
                  src="https://assets.coingecko.com/coins/images/17377/large/4cC4Fgs.png?1627450990"
                  className="counters__img"
                  _mstalt="32942"
                />
              </div>
              <p className="counters__item">
                <span
                  className="counters__number numscroller roller-title-number-1 scrollzip isShown"
                  data-slno="1"
                  data-min="0"
                  data-max="20"
                  data-delay="2"
                  data-increment="2"
                >
                  KYC
                </span>
                <font _mstmutation="1"> KYC BY PINKSALE</font>
              </p>
              <a
                href="https://pinksale.notion.site/ArbiEx-KYC-Verification-01bbef436dbb4fcfaa03994de1a410ab"
                target="_blank"
                class="text-beta"
              >
                Check here
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-4">
            <div className="counters__link border rounded">
              <div className="counters__img-wrap">
                <img
                  style={{ height: "60px", objectFit: "contain" }}
                  src="./audit.png"
                  alt=""
                />
                <a
                  href="https://github.com/Jacky3932/audit/blob/main/BlockSafu_Solidity_Smart_Contract_Audit_%26_KYC_Platform_with_Vulnerability.pdf"
                  target="_blank"
                  class="text-beta ms-3"
                >
                  Check here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
