import React from 'react'
import { BrowserRouter as Router, Route, Navigate, Routes, HashRouter, Link } from 'react-router-dom'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import BasicMenu from './BasicMenu'
import User from '../pages/User'
import Products from './Products'
import PrivateRoute from './PrivateRoute'
import ReactTopics from '../pages/ReactTopics'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

const BasicConcept = () => {
    return (
        <div>
            <h2>Hash Router</h2>
            <HashRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </HashRouter>
            <hr />
            <h2>BasicConcept</h2>
            <Router>
                <BasicMenu />
                <Routes>
                    {/* <Route path="/" element={ <h3>Home</h3> } />  */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/user/:username" element={<User />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/acerca" element={<Navigate to="/about" replace />} />
                    <Route path="/contacto" element={<Navigate to="/about" replace />} />
                    <Route path="/react/*" element={<ReactTopics />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<PrivateRoute path="/dashboard" element={<Dashboard />} />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Router>
        </div>
    )
}

export default BasicConcept