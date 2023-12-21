import React from "react";
import BgAnimation from "../../components/BackgrooundAnimation/BackgroundAnimation";

export default function Intro() {
  return (
    <>
      <div className={` container`}>
        <div className="row g-4 row-cols-1 row-cols-lg-2">
          <div className="in_content col-sm-12 col-lg-8 ">
            <h1 className="in_content-name ">
              About us{" "}
              <img
                src="	https://cartoonito.cartoonnetworkasia.com/assets/img/module/header/spacer.png"
                alt=""
              />
            </h1>
            <p className="in_content-desc">
              The meme coin inspired by the iconic character "Gru" from the
              beloved Minion series. Gruu operates on the DRC20 protocol, with a
              total supply of 1 billion tokens. This whitepaper outlines the
              unique features, tokenomics, and vision behind Gruu as it sets out
              to create a fun and engaging community within the cryptocurrency
              space.
            </p>
            <a
              className="btn btn-connect in_content-btn flex justify-center px-5 py-3 rounded-pill actived ms-3"
              href="https://doggy.market/gruu"
              target="_blank"
            >
              Buy TOKEN
            </a>
          </div>
          <div className="col-sm-12 col-lg-4 ">
            <img
              className="in_content-img"
              style={{
                maxWidth: "100%",
                borderRadius: "20px",
                marginTop: "106px",
              }}
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/406801182_659571563005753_40225189794519861_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGYOvJZZfFQIgEeR9XoSSt9sEAhHtg3deiwQCEe2Dd16P9f0tX213ySbs9U57o6fdBvNsXZfkGzyXgtg-cmLPGB&_nc_ohc=3dMeydNkBvIAX86p_JH&_nc_oc=AQm37umfE-yNEzr_tr1c0j9ME-pRS99q6-dE-JTVHFEBTu8a1W7ngLRtzGRmkcdKLQKptyqsyfXwTxXeLjbAGoWB&_nc_ht=scontent.fhan14-1.fna&oh=03_AdTGnsVLnJHv8pQn4KAIdvgyvISb_eG9n2jkeqUDnGMUmw&oe=65ABB959"
              alt=""
            />
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
      <img
        className="intro-icon-3"
        src="https://cartoonito.cartoonnetworkasia.com/assets/img/module/about/bkg-right-top.png"
        alt=""
      />
      <img
        className="intro-icon-4"
        src="https://cartoonito.cartoonnetworkasia.com/assets/img/module/about/bkg-right-top.png"
        alt=""
      />
    </>
  );
}
