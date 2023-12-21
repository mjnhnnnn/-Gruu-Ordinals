import React, { useState, useEffect, useRef } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { useLocation } from "react-router-dom";
import { Toast } from "primereact/toast";
import "../../css/menumobile.css";
import "../../css/header-responsive.css";
import "../../css/header.css";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
const { formatEther } = ethers.utils;

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "multiple-providers-web3modal",
      infuraId: "2943713c7b254b5eb3d4f68a10ea05c3", // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      appName: "multiple-providers-web3modal",
      infuraId: "2943713c7b254b5eb3d4f68a10ea05c3", // required
    },
  },
};
const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions,
});

export default function Header(props) {
  const { isConnected, signerAddress, getSigner, provider_coppy, Link } = props;
  const pathName = useLocation().pathname;
  const [show, setShow] = useState(false);
  const [showInfoConnect, setShowInfoConnect] = useState(false);
  const dataHeader = [
    {
      name: "Swap",
      icon: "",
      beta: true,
      linkTo: "/Swap",
    },
    {
      name: "Staking",
      icon: "",
      beta: true,
      linkTo: "/Staking",
    },
    {
      name: "More",
      icon: "",
      beta: true,
      linkTo: "/More",
    },
  ];
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Connect Wallet",
      life: 3000,
    });
  };

  const showWarn = () => {
    toast.current.show({
      severity: "warn",
      summary: "Disconnect",
      detail: "Disconnect Wallet",
      life: 3000,
    });
  };
  const [provider, setProvider] = useState();
  const [wallet, setWallet] = useState("");
  const [connection, setConnection] = useState();
  const [balance, setBalance] = useState("");
  const connectWallet = async () => {
    try {
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection, "any");
      const signer = provider.getSigner(0);
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      setWallet(address);
      setConnection(connection);
      setProvider(provider);
      setBalance(formatEther(balance));
      showSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  const disconnectWallet = () => {
    web3Modal.clearCachedProvider();
    setWallet("");
    setProvider(undefined);
    setBalance("");
    showWarn();
  };

  useEffect(() => {
    if (connection && provider) {
      connection.on("accountsChanged", async ([currentAccount]) => {
        console.log("accountsChanged: ", currentAccount);
        const balance = await provider.getBalance(currentAccount);
        setWallet(currentAccount);
        setBalance(formatEther(balance));
      });
      connection.on("chainChanged", () => {
        window.location.reload();
      });
      connection.on("connect", (info) => {
        console.log(info);
      });
      connection.on("disconnect", (error) => {
        console.log(error);
      });
    }
  }, [connection, provider]);
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  const cutString = (s) => {
    const start = s.substr(0, 6);
    const end = s.substr(s.length - 4);
    return `${start}...${end}`;
  };
  const handleDisconnect = () => {
    disconnectWallet();
    setShowInfoConnect(!showInfoConnect);
  };
  const handleClickCNMobile = () => {
    if (wallet) {
      disconnectWallet();
      setShowInfoConnect(!showInfoConnect);
    } else {
      connectWallet();
      setShow(false);
      setShowInfoConnect(!showInfoConnect);
    }
  };
  return (
    <>
      <Toast ref={toast} />
      <div
        className="menu-mobile"
        // style={{ backgroundImage: `url("/banner2.jpg")` }}
      >
        <div className="mb-head">
          <div className="mb-logo">
            <Link to="/" onClick={() => setShow(false)}>
              <img
                className=""
                src="/logo3.png"
                alt=""
                width="45"
                height="45"
              />
            </Link>
            <Link to="/" onClick={() => setShow(false)}>
              <img
                className=""
                src="/logo2.png"
                alt=""
                width="45"
                height="45"
              />
            </Link>
          </div>
          <div className="mb-icon">
            {show ? (
              <svg
                onClick={() => setShow(!show)}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            ) : (
              <svg
                // onClick={() => setShow(!show)}
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </div>
        </div>
        <div
          className={
            show ? "overlay-menulist-mobile show" : "overlay-menulist-mobile"
          }
          // style={{ backgroundImage: `url("/banner2.jpg")` }}
        >
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="infoWallet-mobile">
              {wallet && (
                <div className="info-connect no-absolute">
                  <div className="head">
                    <div>{cutString(wallet)}</div>
                    <button onClick={handleClickCNMobile}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-power"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.5 1v7h1V1h-1z" />
                        <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                      </svg>
                    </button>
                  </div>
                  <div className="body">
                    <small className="text-center d-block">ETH Balance</small>
                    <div className="text-center eth">
                      {parseFloat(balance).toFixed(4)} ETH
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="text-center btn-connect-mobile">
              {!wallet ? (
                <button
                  className="btn btn-connect rounded-pill"
                  onClick={handleClickCNMobile}
                >
                  Connect Wallet
                </button>
              ) : (
                <button
                  className="btn btn-connect rounded-pill"
                  onClick={handleClickCNMobile}
                >
                  Disconnect
                </button>
              )}
            </div>

            <ul className="nav row lists-menu-mobile">
              {dataHeader.map((e, index) => (
                <li key={e.name + index} className="col-12">
                  <Link
                    onClick={() => setShow(false)}
                    to={e.linkTo}
                    className={
                      pathName === `${e.linkTo}`
                        ? "nav-link  text-white header-link active "
                        : "nav-link  text-white header-link "
                    }
                  >
                    {e.name}
                    {e.beta && <div className="text-beta">beta</div>}
                    {e.icon !== "" && (
                      <svg
                        width="17"
                        height="23"
                        viewBox="0 0 17 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.50798 22.6666C2.21999 22.6666 0.184692 17.4959 0.184692 14.9906C0.184692 13.2652 0.721929 12.1359 1.0887 11.5612C1.0887 12.4532 1.31211 13.2412 1.70988 13.6946C1.8134 13.8235 1.94272 13.9278 2.08895 14.0003C2.23518 14.0728 2.39486 14.1118 2.55706 14.1146C3.25701 14.1146 3.72709 13.5812 3.72709 12.7812C3.72709 12.2826 3.43136 11.9452 3.11883 11.5879C2.74044 11.1559 2.34397 10.7079 2.34397 9.87857C2.34397 8.87324 2.93286 7.92124 3.32804 7.3959C3.32804 9.1159 4.44642 9.83857 5.09731 9.98257L5.35559 10.0412L5.31685 9.77457C5.31685 9.75857 5.10118 8.09057 6.37453 6.4559C6.53467 6.25057 6.70385 6.04257 6.87303 5.83457C7.76282 4.7399 8.68103 3.60924 8.68103 2.40924C8.67702 1.72957 8.53951 1.0578 8.27681 0.43457C11.0302 1.99457 10.9888 4.1679 10.7008 5.35857C10.6272 5.66524 10.2863 7.2319 10.8532 7.98257C10.9531 8.11368 11.0819 8.21835 11.2287 8.28791C11.3756 8.35747 11.5364 8.38991 11.6978 8.38257C12.2945 8.38257 12.7723 8.0079 13.0784 7.29857C13.1664 7.09039 13.236 6.8744 13.2863 6.65324C14.6281 8.2199 14.291 9.64524 13.7486 10.5866C13.2514 11.4479 13.1107 12.3319 13.3896 12.8399C13.4698 12.984 13.5877 13.1018 13.7298 13.1799C13.8718 13.2579 14.0323 13.2931 14.1929 13.2812C14.343 13.2841 14.492 13.2532 14.6294 13.1905C14.7668 13.1279 14.8893 13.0351 14.9884 12.9186C15.4197 12.4239 15.505 11.5172 15.505 10.9066C16.0461 11.6866 16.7073 12.8866 16.7073 14.5692C16.7073 15.9026 16.2359 17.9426 14.9161 19.6706C13.8739 21.0372 11.9135 22.6666 8.50798 22.6666Z"
                          fill="#9747FF"
                        ></path>
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="menu-mobile-line"></div>
            <div className="menu-mobile-footer">
              <div className="row text-white">
                <div className="col-12">
                  <p className="footer-staking-logo mb-2">
                    <div className="d-flex justify-content-between">
                      <span>gruu-drc20.org/</span>
                      <div>
                        <a href="https://twitter.com/arbi_ex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </a>
                        <a href="https://t.me/ArbiExglobal">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-telegram"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                          </svg>
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-discord"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </p>
                </div>
                <div className="col-12">
                  <p className="coppyright mt-1" style={{ fontSize: "14px" }}>
                    © Copyright 2023 gruu-drc20.org | All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={`p-3 fixed-top-ok`}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center  mb-2 mb-lg-0 text-white text-decoration-none header_logo_link"
            >
              <img
                style={{ marginRight: "9px" }}
                className="header_logo"
                src="/logo3.png"
                alt=""
                width="90"
                height="90"
              />
            </Link>
            <Link
              to="/"
              className="d-flex align-items-center  mb-2 mb-lg-0 text-white text-decoration-none header_logo_link"
            >
              <img
                className="header_logo"
                src="/logo2.png"
                alt=""
                width="90"
                height="90"
              />
            </Link>
            <div className="text-header">Gruu Ordinals</div>
            {/* 
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 px-5">
              {dataHeader.map((e, index) => (
                <li key={e.name + index}>
                  <Link
                    to={e.linkTo}
                    className={
                      pathName === `${e.linkTo}`
                        ? "nav-link px-4 text-white header-link active "
                        : "nav-link px-4 text-white header-link "
                    }
                  >
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul> */}

            {/* <div className="text-end div-btn-connect">
              {showInfoConnect && (
                <div className="info-connect ">
                  <div className="head">
                    <div>{cutString(wallet)}</div>
                    <button onClick={handleDisconnect}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-power"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.5 1v7h1V1h-1z" />
                        <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                      </svg>
                    </button>
                  </div>
                  <div className="body">
                    <small className="text-center d-block">ETH Balance</small>
                    <div className="text-center eth">
                      {parseFloat(balance).toFixed(4)} ETH
                    </div>
                  </div>
                </div>
              )}

              {!wallet ? (
                <button
                  className="btn btn-connect rounded-pill"
                  onClick={connectWallet}
                >
                  Connect
                </button>
              ) : (
                <div className="btn-disconnect">
                  <button
                    className="btn btn-connect rounded-pill"
                    // onClick={disconnectWallet}
                    onClick={() => setShowInfoConnect(!showInfoConnect)}
                  >
                    {cutString(wallet)}
                    {showInfoConnect ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-up ms-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down ms-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}
