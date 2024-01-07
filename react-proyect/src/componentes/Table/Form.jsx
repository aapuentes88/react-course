import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Form = ({addCharacter}) => {

    const initialState = { name: '', job: '' }
    const [character, setCharacter] = useState(initialState)
    const {name, job} = character

    const handleSubmit = (e) => {
        
        e.preventDefault();
        // if (!todo.nombre.trim()) {
        if (!name.trim()) {
            e.target[0].focus();
            return Swal.fire({
                title: "Error!",
                text: "Nombre ogligatorio",
                icon: "error",
            });
        }
        // if (!todo.descripcion.trim()) {
        if (!job.trim()) {
            e.target[1].focus();
            return Swal.fire({
                title: "Error!",
                text: "Descripción ogligatoria",
                icon: "error",
            });
        }

        // agregar character
        console.log("Init addCharacter");
        addCharacter({
            name: name,
            job: job
        });
        console.log("End addCharacter");

        Swal.fire({
            title: "Éxito",
            text: "¡Todo agregado!",
            icon: "success",
        });


        
    }

    const handleChange = (e) => {

        const {name, value} = e.target

        setCharacter((prev) => ({
                    ...prev,
                    [name]: value,
                }));
    }

    return (
        <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange} />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={job}
        onChange={handleChange} />
        <input type="button" value="Submit" onClick={handleSubmit} />
    </form>
    )
}

export default Form