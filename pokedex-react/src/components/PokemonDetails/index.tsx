import React from "react";
import { useParams, Link } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";

interface Pokemon {
    name: string;
    sprites: {
        front_default:string;
    };
    height: number;
    weight: number;
    types: { type: { name: string } }[];
}

const PokemonDetails: React.FC = () => {
    const { name } = useParams<Record<string, string>>();
    const { data, loading } = usePokemon<Pokemon> (
        `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    if(loading) return <p style={{ textAlign: "center", fontSize: "18px"}}>Cargando datos del pokemon...</p>;

    if(!data) {
        return <p style={{ textAlign: "center", fontSize: "18px"}}>No se encontraron datos</p>
    }

    return (
        <div tyle={{ padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
            <Link to="/"  style={{ display: "inline-block", marginBottom: "20px", color: "#007BFF", textDecoration: "none" }}>Volver</Link>
            <h2 style={{ fontSize: "36px", color: "#333", marginBottom: "20px" }}>{data.name.toUpperCase()}</h2>
            <img 
            src={data.sprites.front_default} 
            alt={data.name} 
            style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",}}
            />
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>Altura: {data.height / 10} m</p>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>Peso: {data.weight / 10} kg</p>
            <ul>
                {data.types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonDetails;