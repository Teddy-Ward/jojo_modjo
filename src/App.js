import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <React.Fragment>
        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </main>
      </React.Fragment>
    </>
  );
}

export default App;
