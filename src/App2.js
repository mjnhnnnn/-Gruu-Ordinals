import "./App.css";
import { useState, useEffect, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ethers } from "ethers";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Staking from "./Staking/Staking";
import Home from "./Home/Home";
import ComingSoon from "./components/Layout/ComingSoon";
import Launchpad from "./Launchpad/Launchpad";
import Lottery from "./Lottery/Lottery";
import MintingToken from "./MintingToken/MintingToken";

export const ContextGetSigner = createContext();

function App2() {
  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [signerAddress, setSignerAddress] = useState(undefined);

  useEffect(() => {
    const onLoad = async () => {
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
    };
    onLoad();
  }, []);

  const isConnected = () => signer !== undefined;

  const getSigner = async () => {
    console.log("getSigner app2");
    let account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setSigner(account[0]);
    setSignerAddress(account[0]);
  };

  return (
    <>
      <ContextGetSigner.Provider value={getSigner}>
        <Header
          provider={provider}
          isConnected={isConnected}
          signerAddress={signerAddress}
          getSigner={getSigner}
          Link={Link}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Staking" element={<Staking />} />
          <Route path="/Launchpad" element={<Launchpad />} />
          <Route path="/Lottery" element={<Lottery />} />
          <Route path="/MintingToken" element={<MintingToken />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        {/* <Footer /> */}
      </ContextGetSigner.Provider>
    </>
  );
}
export default App2;
