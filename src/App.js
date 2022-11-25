import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formule from "./Page/Formule/Formule";
import Home from "./Page/Home/Home";
import Portfolio from "./Page/Portfolio/Portfolio";
import Profil_coach from "./Page/Profil_coach/Profil_coach";
import Profil_dev from "./Page/Profil_dev/Profil_dev";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil_developper" element={<Profil_dev />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/profil_coach" element={<Profil_coach />} />
        <Route path="/formule" element={<Formule />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
