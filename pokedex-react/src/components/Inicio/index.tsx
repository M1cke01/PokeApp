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
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=60").then((response) => {
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
            style={{
                padding: "10px",
                width: "100%",
                maxWidth: "400px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                marginBottom: "20px",
                fontSize: "16px",
            }}
        />
        {loading ? (
            <p>cargando pokemon...</p>
        ) : (
            <ul>
                {filtroPokemon.map((pokemon) => (
                    <li key={pokemon.name}
                        style={{
                                marginBottom: "10px",
                                fontSize: "18px",
                                backgroundColor: "#f5f5f5",
                                borderRadius: "5px",
                                padding: "10px",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    >     
                        <Link to={`/pokemon/${pokemon.name}`}
                        style={{
                            textDecoration: "none",
                            color: "#007bff",
                            fontWeight: "bold",
                        }}
                        >
                            {pokemon.name}</Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
);
};

export default Inicio;