import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const Navbar = () => {

    const { user } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                {/* <Link className="btn btn-outline-primary" to="/">
                    Inicio
                </Link>
                <Link className="btn btn-outline-primary" to="/blog">
                    Blog
                </Link>
                <Link className="btn btn-outline-primary" to="/contacto">
                    Contacto
                </Link> */}
                <Link to="/">
                    {user ? "Juanito" : "SinConexión"}
                </Link>
                <NavLink className="btn btn-outline-primary" to="/">
                    Inicio
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/blog">
                    Blog
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/contacto">
                    Contacto
                </NavLink>
            </div>
        </nav>
  )
}

export default Navbar