import React, { useEffect } from 'react'
import ControlForm from './ControlForm'
import Todo from './Todo'
import { useState } from "react";

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((old) => [...old, todo]);
    };

    const deleteTodo = (id) => {
        setTodos((old) => old.filter((item) => item.id !== id));
    };
    
    const editarTodo = (id) => {
        const editTodo = todos.map((item) =>
            item.id === id ? { ...item, estado: !item.estado } : item
        );
        setTodos(editTodo);
    };

    useEffect(() => {
        console.log("Leer todos local");
        if (localStorage.getItem("todos")) {
            setTodos(JSON.parse(localStorage.getItem("todos")));
        }
    }, []);
    
    
    useEffect(() => {
        console.log("Guardar todo local");
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    
    return (
        <>
            <ControlForm addTodo={addTodo} />

            <h2>TodoList</h2>
            <ul className="list-group list-group-numbered mt-2 my-2 mb-2 py-2 pb-2">
                {todos.map((item) => (
                    <Todo key={item.id} todo={item} deleteTodo={deleteTodo} editarTodo={editarTodo}/>
                ))}
            </ul>

        </>
    )
}

export default TodoList