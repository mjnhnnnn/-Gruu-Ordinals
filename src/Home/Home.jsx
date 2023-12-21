import React from "react";
import "./Home.css";
import {
  Intro,
  Arbiexdex,
  StakeandFarming,
  Lottery,
  Launchpad,
  ArbiexSecurity,
  Roadmap,
  Tokenomic,
  SupportMore,
  OurPartners,
  JoinOut,
  Weareon,
  Weareon2,
} from "./Section";

export default function Home() {
  return (
    <div className="cls-body">
      <section
        className="py-5 intro "
        style={{
          backgroundImage: `url("https://cartoonito.cartoonnetworkasia.com/assets/img/module/bkg-dots.png")`,
        }}
      >
        <Intro />
      </section>
      <section
        className="py-5 weareon2"
        style={{
          backgroundImage: `url("	https://cartoonito.cartoonnetworkasia.com/assets/img/module/bkg-dots.png")`,
        }}
      >
        <Weareon2 />
      </section>
      <section
        className="py-5 weareon"
        style={{
          backgroundImage: `url("	https://cartoonito.cartoonnetworkasia.com/assets/img/module/bkg-dots.png")`,
        }}
      >
        <Weareon />
      </section>

      {/* <section className="py-5 ai decentralized">
        <Arbiexdex />
      </section>

      <section className="py-5 ai">
        <StakeandFarming />
      </section>

      <section className="py-5 ai">
        <Lottery />
      </section>

      <section className="py-5 ai">
        <Launchpad />
      </section>

      <section className="py-5 counter-info">
        <ArbiexSecurity />
      </section>

      <section className="roadmap py-5">
        <Roadmap />
      </section>

      <section className="tokenomic py-5">
        <Tokenomic />
      </section>

      <section className="py-5 support">
        <SupportMore />
      </section>

      <section className="py-5">
        <OurPartners />
      </section>

      <section className="py-5 joinoutcmnt">
        <JoinOut />
      </section> */}
    </div>
  );
}
