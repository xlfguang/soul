import "./App.css";
import Index from "@/pages/index";
import About from "@/pages/about";
import { Route, Routes } from "react-router-dom";
import Head from "./components/web/Head";

function App() {
  return (
    <>
      <Head></Head>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Web />
      <Phone /> */}
    </>
  );
}

export default App;
