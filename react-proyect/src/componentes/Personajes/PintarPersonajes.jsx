import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import Personaje from "./Personaje";
import Loading from "./Loading";

const PintarPersonajes = ({ nombre }) => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        obtenerCharacter(nombre);
    }, [nombre]);

    const obtenerCharacter = async (nombre) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
            );

            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `no existe ${nombre}`,
                    icon: "error",
                });
            }

            const data = await res.json();
            // console.log([...data.results]);
            setPersonajes([...data.results]);
        } catch (error) {
            // console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Error de servidor`,
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="row mt-2">
            {personajes.map((item) => (
                <Personaje key={item.id} character={item} />
            ))}
        </div>
    );
};

export default PintarPersonajes;
