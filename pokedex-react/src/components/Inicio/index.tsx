import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Pokemon {
    name: string;
}

const Inicio: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=3").then((response) => {
            setPokemonList(response.data.results);
            setLoading(false);
        });
    }, []);

    const filtroPokemon = pokemonList.filter((pokemon) => 
        pokemon.name.toLowerCase().includes(search.toLowerCase())
);

return (
    <div>
        <input
            type="text"
            placeholder="Buscar pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        {loading ? (
            <p>cargando pokemon...</p>
        ) : (
            <ul>
                {filtroPokemon.map((pokemon) => (
                    <li key={pokemon.name}>
                        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
);
};

export default Inicio;