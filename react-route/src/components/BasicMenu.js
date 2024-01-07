import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Products from './Products';

const BasicMenu = () => {
    return (
        <nav>
            <ol>
                <li>
                    <span>Link html (Not recomended)   </span>
                    <a href="/" >Home</a>
                    <a href="/about" >About Us</a>
                    <a href="/contact" >Contact</a>
                </li>
                <li>
                    <span>Route Link Component </span>
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About Us</Link>
                    <Link to="/contact" >Contact</Link>
                </li>
                <li>
                    <span>Route NavLink Component </span>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <span>Params  </span>
                    <Link to="/user/aapuentes" >Albert</Link>
                    <Link to="/user/jguevara" >Joe</Link>                    
                </li>
                <li>
                    <span>Query Params  </span>
                    <Link to="/products" >Products</Link>                   
                </li>
                <li>
                    <span>Redirecciones</span>
                    <Link to="/acerca" >  Acerca  </Link>
                    <Link to="/contacto" >  Contacto  </Link>                    
                </li>
                <li>
                    <span>Rutas anidadas</span>  
                    <Link to="/react" >  React  </Link>                
                </li>
                <li>
                    <span>Rutas privadas</span>  
                    <Link to="/login" >  Login  </Link>  
                    <Link to="/dashboard" >  Dashboard  </Link>                              
                </li>
            </ol>
        </nav>
    )
}

export default BasicMenu