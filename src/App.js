import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import MSLA from "./pages/MSLA";
import PixelByPixel from "./pages/PixelByPixel";
import Socials from "./pages/Socials";
import Vtuber from "./pages/Vtuber";
import Spooo from "./pages/Spooo";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/Login" element={<Login />} />
              <Route path="/About" element={<About />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/MSLA" element={<MSLA />} />
              <Route path="/PbPS" element={<PixelByPixel />} />
              <Route path="/Socials" element={<Socials />} />
              <Route path="/Spooo" element={<Spooo />} />
              <Route path="/Vtuber" element={<Vtuber />} />
            </Route>
            <Route path="/" element={<Welcome />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
