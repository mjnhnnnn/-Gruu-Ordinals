import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const path = location.pathname;
  // console.log(path === "/Staking");
  if (path === "/") {
    return (
      <div
        className=" footer-wrap"
        // style={{ backgroundImage: `url("/banner2.jpg")` }}
      >
        <div className="container">
          <footer className={`row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5`}>
            <div
              className="col-6 mb-5 divlogofooter"
              style={{ margin: "0 auto" }}
            >
              <a
                style={{ marginLeft: "5px" }}
                href="/"
                className="d-flex align-items-center link-dark text-decoration-none mb-4"
              >
                {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
                <img
                  className="header_logo"
                  src="/logo2_png.png"
                  alt=""
                  width="90"
                  height="90"
                />
              </a>
              <p className="text-white">© 2023 ARBIEX</p>
            </div>

            <div className="col-6 col-sm-3 mb-5">
              <h5 className="mb-4 h-30 footer-head">Social</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="https://twitter.com/arbi_ex"
                    className="nav-link p-0 text-white"
                  >
                    Twitter
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="https://t.me/ArbiExglobal"
                    className="nav-link p-0 text-white"
                  >
                    Telegram
                  </a>
                </li>
                {/* <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Medium
                  </a>
                </li> */}
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm-3 mb-5">
              <h5 className="mb-4 h-30 footer-head">Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="https://arbiex.gitbook.io/arbiex.io/"
                    className="nav-link p-0 text-white"
                  >
                    About us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Council
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Apply for IDO
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Whitepaper
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Become a partner
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm-3 mb-5">
              <h5 className="mb-4 h-30 footer-head">Products</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Swap
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Staking
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Launchpad
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Minting Token
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Lottery
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Farming
                  </a>
                </li>

                {/* <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Hosting
                  </a>
                </li> */}
              </ul>
            </div>
            {/* <div className="col mb-3">
              <h5 className="mb-4 h-30 footer-head">Developers</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Documentation
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    API
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Status
                  </a>
                </li>
              </ul>
            </div> */}
          </footer>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
