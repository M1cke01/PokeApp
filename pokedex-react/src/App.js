import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio/index.tsx";

const App = () => {
  return (
      <div>
        <h1>Pokedex</h1>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </div>
  );
};

export default App;
