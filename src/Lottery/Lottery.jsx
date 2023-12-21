import React from "react";
import "./lottery.css";
export default function Lottery() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="Lottery-card">
          <div className="d-flex justify-content-between mb-3">
            <p>Lottery round: 0</p>
            <p>Tickets sold: 0</p>
          </div>

          <div className="content text-center">
            <div className="head">Win up to $10,000!</div>
            <div className="body">00:00:00</div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button type="button" className="btn btn-connect rounded-pill">
            Buy sticker
          </button>
        </div>
      </div>
    </section>
  );
}
