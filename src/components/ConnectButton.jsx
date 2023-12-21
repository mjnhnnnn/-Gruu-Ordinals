import React, { useContext } from "react";
import PageButton from "./../components/PageButton";
import { ContextGetSigner } from "../App2";

const ConnectButton = (props) => {
  const { isConnected, signerAddress, getSigner, provider } = props;
  const displayAddress = `${signerAddress?.substring(0, 10)}...`;

  const funcGetSigner = useContext(ContextGetSigner);
  // console.log(funcGetSigner);

  const connectBtnClick = () => {
    // getSigner(provider);
    funcGetSigner(provider);
    console.log(funcGetSigner(provider));
  };

  return (
    <>
      {isConnected() ? (
        <div className="buttonContainer">
          <PageButton name={displayAddress} />
        </div>
      ) : (
        <div
          className="btn my-2 connectButton"
          onClick={() => connectBtnClick()}
        >
          Connect Wallet
        </div>
      )}
    </>
  );
};

export default ConnectButton;
