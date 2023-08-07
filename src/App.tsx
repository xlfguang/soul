import "./App.css";
import Index from "@/pages/index";
import About from "@/pages/about";
import Introduction from "@/pages/Introduction";
import { Route, Routes } from "react-router-dom";
import Head from "./components/web/Head";

function App() {
  const connectWallet = () => {};
  return (
    <>
      <Head connectWallet={connectWallet}></Head>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
      {/* <Web />
      <Phone /> */}
    </>
  );
}

export default App;
