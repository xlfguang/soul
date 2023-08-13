import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "@/pages/index";
import About from "@/pages/about";
import Introduction from "@/pages/Introduction";
import Agreemen from "@/pages/agreemen";
import Policy from "@/pages/policy";
import Head from "./components/web/Head";

function App() {
  const connectWallet = () => {};

  return (
    <>
      <Head connectWallet={connectWallet} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/NFT" element={<About />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/agreemen" element={<Agreemen />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </>
  );
}

export default App;
