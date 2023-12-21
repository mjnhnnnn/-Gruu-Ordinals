import React from "react";
import "./MintingToken.css";

export default function MintingToken() {
  return (
    <>
      {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <iframe
                style={{
                  boxShadow: "0px 10px 16px rgba(0, 0, 0, 0.08)",
                  background: "#fff",
                  borderRadius: "8px",
                  width: "100%",
                  maxWidth: "430px",
                }}
                frameborder="0"
                width="100%"
                height="552px"
                src="https://www.pinksale.finance/launchpad/token/create?chain=Arbitrum"
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-5">
        <div className="container">
          <div className="MintingToken rounded">
            <form>
              {/* class validate : valid */}
              <div class="form-group mb-3 ">
                <label for="exampleInputEmail1">
                  Name <span style={{ color: "red", fontSize: "16px" }}>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ex: Ethreum"
                />
                <small id="emailHelp" class="form-text text-muted">
                  Token name cannot be blank
                </small>
              </div>
              <div class="form-group mb-3">
                <label for="exampleInputEmail1">
                  Symbol{" "}
                  <span style={{ color: "red", fontSize: "16px" }}>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ex: ETH"
                />
                <small id="emailHelp" class="form-text text-muted">
                  tokenSymbol is a required field
                </small>
              </div>
              <div class="form-group mb-3">
                <label for="exampleInputEmail1">
                  Total supply{" "}
                  <span style={{ color: "red", fontSize: "16px" }}>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ex: 100000"
                />
                <small id="emailHelp" class="form-text text-muted">
                  totalSupply is a required field
                </small>
              </div>
              <div className="text-center mt-3">
                <button type="submit" class="btn btn-connect">
                  Create token
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
