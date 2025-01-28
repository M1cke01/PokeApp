import React from "react";
import { useParams, Link } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";

interface ParamsTypes {
    name: string;
}

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

    if(loading) return <p>Cargando datos del pokemon...</p>;

    if(!data) {
        return <p>No se eoncontraron datos</p>
    }

    return (
        <div>
            <Link to="/">Volver</Link>
            <h2>{data.name.toUpperCase()}</h2>
            <img src={data.sprites.front_default} alt={data.name} />
            <p>Altura: {data.height / 10} m</p>
            <p>Peso: {data.weight / 10} kg</p>
            <ul>
                {data.types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonDetails;