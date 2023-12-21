import React from "react";
import BgAnimation from "../../components/BackgrooundAnimation/BackgroundAnimation";

export default function Intro() {
  return (
    <>
      <div className={` container`}>
        <div className="row g-4 row-cols-1 row-cols-lg-2">
          <div className="in_content col-sm-12 col-lg-8 ">
            <h1 className="in_content-name ">
              Introding Meme Token{" "}
              <img
                src="	https://cartoonito.cartoonnetworkasia.com/assets/img/module/header/spacer.png"
                alt=""
              />
            </h1>
            <p className="in_content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque voluptate illum, delectus aliquid eveniet possimus
              suscipit reiciendis qui. Aliquam nam pariatur blanditiis
              consectetur nulla eveniet facilis asperiores ipsum perspiciatis
              cupiditate.
            </p>
            <a
              className="btn btn-connect in_content-btn flex justify-center px-5 py-3 rounded-pill actived ms-3"
              href="https://www.pinksale.finance/launchpad/0x9072270fBe37aeC43e5E99DB8da6C288Ced5d9E3?chain=Arbitrum"
              target="_blank"
            >
              Buy TOKEN
            </a>
          </div>
        </div>
      </div>
      <img
        className="intro-icon-1"
        src="https://cartoonito.cartoonnetworkasia.com/assets/img/module/about/bkg-right-bottom.png"
        alt=""
      />
      <img
        className="intro-icon-2"
        src="https://cartoonito.cartoonnetworkasia.com/assets/img/module/about/bkg-right-top.png"
        alt=""
      />
      {/* <div className="container">
        <div className="row g-4 row-cols-1 row-cols-lg-2">
          <div className="in_content col-sm-12 col-lg-7 " data-aos="fadeIn ">
            <h1 className="in_content-name ">The ultimate defi platform</h1>
            <p className="in_content-desc">
              Arbiex is a new project on the Arbitrum ecosystem, designed to
              provide users with the best trading experience and advanced
              project development solutions. With the main functions of swap,
              launchpad, and support for minting tokens, Arbiex is a
              full-featured and versatile platform for the blockchain community.
            </p>
            <a
              className="btn btn-connect in_content-btn flex justify-center px-5 py-3 rounded-pill actived"
              href="https://docs.arbiex.io/about-us/whats-arbiex"
              target="_blank"
            >
              Docs
            </a>
            <a
              className="btn btn-connect in_content-btn flex justify-center px-5 py-3 rounded-pill ms-3 actived"
              href="https://www.pinksale.finance/launchpad/0x9072270fBe37aeC43e5E99DB8da6C288Ced5d9E3?chain=Arbitrum"
              target="_blank"
            >
              Our presale
            </a>
            <div className="in_content-footer">
              Built on
              <img src="/build_on.png" alt="" />
            </div>
          </div>
          <div className="in_img-vid col-sm-12 col-lg-5 ">
            <div>
              <img
                src="/khung_logo.png"
                alt=""
                className="in_img-vid--khunglogo"
              />
              <img
                src="/khung_traidat.png"
                alt=""
                className="in_img-vid--khungtraidat"
              />
              <div className="waviy">
                <span style={{ "--i": 1 }}>a</span>
                <span style={{ "--i": 2 }}>r</span>
                <span style={{ "--i": 3 }}>b</span>
                <span style={{ "--i": 4 }}>i</span>
                <span style={{ "--i": 5 }}>e</span>
                <span style={{ "--i": 6 }}>x</span>
                <span style={{ "--i": 7 }}>.</span>
                <span style={{ "--i": 8 }}>i</span>
                <span style={{ "--i": 9 }}>o</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="gradient-intro"></div> */}
      {/* <div className="gradient-intro02"></div> */}
    </>
  );
}
