import "./styles.css";
import React from "react";
import Home from "./components/Home";
import SignIn from "./components/Signup";
import Welcomepage from "./components/Welcomepage";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
