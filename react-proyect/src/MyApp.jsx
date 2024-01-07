// import React from 'react' //No es necesario
import './App.css';

import Contador from "./componentes/Contador/Contador";
import { Formulario } from "./componentes/Personajes/Formulario";
import Frutas from "./componentes/Frutas/Frutas";
import Table from "./componentes/Table/Table";
import TodoList from "./componentes/Todo/TodoList";

import { useState } from "react";
import PintarPersonajes from "./componentes/Personajes/PintarPersonajes";
import SimpleCRUD from "./componentes/CRUD/SimpleCRUD"
import { WelcomeES6, WelcomeES7, Events } from "./componentes/JonMirsha/Class/Welcome";
import CicloVida from "./componentes/JonMirsha/Class/CicloVida"
import AjaxApi from "./componentes/JonMirsha/Class/AjaxApi"

import RelojHooks from "./componentes/JonMirsha/RelojHooks/RelojHooks"
import AjaxHooks from "./componentes/JonMirsha/AjaxHooks/AjaxHooks";


import Navbar from "./componentes/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import HooksPersonalizado from "./componentes/JonMirsha/HooksPeronalizado/HooksPersonalizado";
import Referencias from "./componentes/JonMirsha/Referencias/Referencias";
import FormularioJon from "./componentes/JonMirsha/Formulario/FormularioJon";
import Estilos from "./componentes/JonMirsha/Estilos/Estilos";

const MyApp = () => {

  const titulo = "Mi primera APP";
  const colores = {
    primary: "text-primary",
    info: "text-info",
    danger: "text-danger",
  };

  const user = true;

  const SaludoBienvenida = () => <h2 className="text-warning">Bienvenido!</h2>;

  const SaludoDespedida = () => (
    <h2 className="text-secondary">Usuario offline</h2>
  );

  const frutas = ["🍉", "🍌", "🍓"];

  const saludoClick = (name) => {
    console.log("Saludo! " + name);
  };

  const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]

  const [nombre, setNombre] = useState("");

  console.log("Prototype :", Object.getPrototypeOf(Events))

  return (
    <div className="container">

      <Navbar/>
           <div className="container">
                <Outlet />
            </div>
            <hr />

      <Contador />
      <h1 className={colores.primary}>{titulo}</h1>
      <hr />

      {user ? <SaludoBienvenida /> : <SaludoDespedida />}
      <hr />

      {/* Uso de props */}
      <Frutas frutasApp={frutas} />
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => saludoClick("bluuweb")}
      >
        Click!
      </button>
      <hr />

      {
        console.log("initApp render Table")
      }

      {
        console.log(characters)
      }

      <Table charactersData={characters} ></Table>
      <hr />

      {
        console.log("endApp render Table")
      }

      <TodoList />
      <hr />

      <Formulario setNombre={setNombre} />
      <button
        className="btn btn-success mt-2"
        onClick={() => setNombre("")}
      >
        Reiniciar
      </button>
      <PintarPersonajes nombre={nombre} />
      <hr />

      <SimpleCRUD />
      <hr />

      <WelcomeES6 />
      <hr />

      <WelcomeES7 />
      <hr />
      
      <Events/>
      <hr />
      
      <CicloVida/>
      <hr />
      
      <AjaxApi/>
      <hr />
      
      <RelojHooks/>
      <hr />
      
      <AjaxHooks />
      <hr />
      
      <HooksPersonalizado />
      <hr />
      
      <Referencias />
      <hr />
      
      <FormularioJon />
      <hr />
      
      <Estilos />

    </div>
  );


}

export default MyApp