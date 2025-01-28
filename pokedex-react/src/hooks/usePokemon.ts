import axios from "axios";
import { useState, useEffect} from "react";

interface Pokemon {
    name: string;
    sprites: {
        front_default: string;
    };
    height: number;
    weight: number;
    types: { type: { name: string } }[];
}

const usePokemon = <T> (url: string) => {
    const [data, setData] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
            setLoading(false);
        }). catch((error) => {
            console.error("error al obtener pokemon:", error);
            setLoading(false);
        });
    }, [url]);

    return { data, loading };
};

export default usePokemon;