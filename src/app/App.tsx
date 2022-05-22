import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppContainer from "./containers/AppContainer";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./services/ethers-service";

function App(): JSX.Element {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AppContainer />
    </Web3ReactProvider>
  );
}

export default App;
