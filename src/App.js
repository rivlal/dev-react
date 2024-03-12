import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";





const App = () => {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="/about" element={<About/>}/>
    //   {/* path="*" fonctionne si jamais l'url ne correspons à rien de déclaré au dessus */}
    //   <Route path="*" element={<Home/>}/>
    // </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

