import React from 'react'
import Swal from "sweetalert2";
// import { useState } from "react";
import { useFormulario } from '../../hooks/useFormulario';

const ControlForm = ({addTodo}) => {

    // const [todo, setTodo] = useState({
    //     todoNombre: "",
    //     todoDescripcion: "",
    //     todoEstado: "pendiente",
    //     todoCheck: false,
    // });

    const initialState = {
        nombre: "todo 1",
        descripcion: "des todo",
        estado: "pendiente",
        prioridad: false,
    };

    // const [todo, setTodo] = useState(initialState);
    const [inputs, handleChange, reset] = useFormulario(initialState);

    const { nombre, descripcion, estado, prioridad } = inputs;

    // const [error, setError] = useState(false);

    // const handleChange = (e) => {
    //     const { name, value, checked, type } = e.target;

    //     console.log(name + " " + value + " " + checked + " " + type + " ")
    //     console.log(e.target)
    //     setTodo((prev) => ({
    //         ...prev,
    //         [name]: type === "checkbox" ? checked : value,
    //     }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const { todoNombre, todoDescripcion } = todo;

    //     // pequeña validación
    //     if (!todoNombre.trim() || !todoDescripcion.trim()) {
    //         console.log("campos vacíos");
    //         setError(true);
    //         return;
    //     } else {
    //         setError(false);
    //     }

    //     // Enviar todo a un array!
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (!todo.nombre.trim()) {
        if (!nombre.trim()) {
            e.target[0].focus();
            return Swal.fire({
                title: "Error!",
                text: "Nombre ogligatorio",
                icon: "error",
            });
        }
        // if (!todo.descripcion.trim()) {
        if (!descripcion.trim()) {
            e.target[1].focus();
            return Swal.fire({
                title: "Error!",
                text: "Descripción ogligatoria",
                icon: "error",
            });
        }

        // agregar todo
        addTodo({
            // nombre: todo.nombre,
            // descripcion: todo.descripcion,
            // estado: todo.estado === "pendiente" ? false : true,
            // prioridad: todo.prioridad,
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === "pendiente" ? false : true,
            prioridad: prioridad,            
            id: Date.now(),
        });
        // console.log(todo);

        Swal.fire({
            title: "Éxito",
            text: "¡Todo agregado!",
            icon: "success",
        });

        // limpiar form
        // setTodo(initialState);
        reset()
    };

    // const PintarError = () => (
    //     <div className="alert alert-danger">Todos los campos obligatorios</div>
    // );

    return (
        <div className="container mt-2 my-2 mb-2 py-2 pb-2">
            <h2>Formulario</h2>
            {/* {error && <PintarError />} */}
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    // name="todoNombre"
                    name="nombre"
                    // value={todo.todoNombre}
                    // value={todo.nombre}
                    value={nombre}
                    onChange={handleChange}
                />
                <textarea
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    // name="todoDescripcion"
                    name="descripcion"
                    // value={todo.todoDescripcion}
                    // value={todo.descripcion}
                    value={descripcion}
                    onChange={handleChange}
                />
                <select
                    className="form-control mb-2"
                    // name="todoEstado"
                    name="estado"
                    // value={todo.todoEstado}
                    // value={todo.estado}
                    value={estado}
                    onChange={handleChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        // id="flexCheckDefault"
                        id="idCheckbox"
                        // checked={todo.todoCheck}
                        // checked={todo.prioridad}
                        checked={prioridad}
                        onChange={handleChange}
                        // name="todoCheck"
                        name="prioridad"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Dar prioridad
                    </label>
                </div>
                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default ControlForm