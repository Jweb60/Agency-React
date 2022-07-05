import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leboncoindelimmo from "./pages/Leboncoindelimmo";
import AVendre from "./pages/AVendre";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-vendre" element={<AVendre />} />
        <Route path="/le-bon-coin-de-l-immo" element={<Leboncoindelimmo />} />

        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
    
      </Routes>
    </BrowserRouter>
  );
};

export default App;
