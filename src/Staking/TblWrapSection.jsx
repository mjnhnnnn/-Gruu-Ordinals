import React, { useState } from "react";
// import { BsFillCaretDownFill } from "react-icons/fa";
import "./Staking.css";

export default function TblWrapSection(props) {
  const { row } = props;
  const [show, setShow] = useState(false);

  const handleClick = (isShow) => {
    setShow(!show);
    row.showDetails = !isShow;
  };

  return (
    <div className="tblwrap-section">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-xl-2 margin-no-xl d-flex align-items-center">
          <div className="tbl-img-name">
            <div className="tbl-img important">
              <img
                src={row.img}
                alt=""
                className="rounded-circle"
                width="50"
                height="50"
              />
              <img
                src={row.img_thum}
                alt=""
                className="tbl-img--clone rounded-circle"
              />
            </div>
            <div>
              <p className="name">{row.name}</p>
              <span className="desc">{row.name}</span>
            </div>
          </div>
        </div>
        <div className="col-9 col-sm-11 col-md-11 col-xl-8">
          <div className="row tbl-content">
            <div className="col-6 col-sm-3">
              <p>{row.earned_name}</p>
              <span className="text-green">{row.Earned}</span>
            </div>
            <div className="col-3  d-none d-xl-block">
              <p>Total Staked</p>
              <span className="d-block">{row.totalStakedDxl}</span>
              <small>{row.totalStakedUsd}</small>
            </div>
            <div className="col-3">
              <p>APR</p>
              <span className="text-green">{row.apr}</span>
            </div>
            <div className="col-3 d-none d-xl-block">
              <p>Ends in</p>
              <span>{row.endIn}</span>
            </div>
          </div>
        </div>
        <div className="col-3 col-sm-1  col-md-1 col-xl-2 d-flex align-items-center justify-content-center">
          <p
            className="btn-details"
            onClick={() => handleClick(row.showDetails)}
          >
            {row.showDetails ? `Hide` : "Details"}

            {row.showDetails ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            )}
          </p>
        </div>
        <div
          className={
            row.showDetails
              ? "col-12 mt-3 details-wrap-effect open"
              : "col-12 mt-3 details-wrap-effect"
          }
        >
          <div className="details">
            <div className="details-wrap d-flex justify-content-between flex-wrap">
              <div className="left order-2 order-xl-1">
                <div className="d-flex flex-column">
                  <p className="d-flex justify-content-between">
                    <span>APR:</span>
                    <span className="text-green">{row.apr}</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    <span>Total staked:</span>
                    <span className="text-end d-flex flex-column">
                      {row.totalStakedDxl} <small>{row.totalStakedUsd}</small>
                    </span>
                  </p>
                  <p className="d-flex justify-content-between">
                    <span>Ends in:</span>
                    <span>{row.endIn}</span>
                  </p>
                  <button className="rounded-pill">See Token Info</button>
                  <button className="rounded-pill">View Contract</button>
                </div>
              </div>
              <div className="right order-1 order-xl-2">
                <div className="start-staking">
                  <p>START STAKING</p>
                  <button className="rounded-pill">Connect Wallet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
