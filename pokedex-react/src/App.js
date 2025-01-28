import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import PokemonDetails from "./components/PokemonDetails";

const App = () => {
  return (
      <div>
        <h1>Pokedex</h1>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
      </div>
  );
};

export default App;
