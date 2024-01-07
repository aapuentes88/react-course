import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import MyApp from './MyApp';
import reportWebVitals from './reportWebVitals';

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import Inicio from './routes/Inicio';
import NoEncontrada from './routes/NoEncontrada';
import Post from './routes/Post';

import UserProvider from './context/UserProvider';
import RutaProtegida from './routes/RutaProtegida';
import RequireAuth from './componentes/Auth/RequireAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<MyApp />}>
            <Route index element={<Inicio />} />
            <Route path='blog' element={<Blog />} />
            <Route path='blog/:id' element={<Post />} />
            <Route path='contacto' element={<Contacto />} />
            <Route
              path="protegida"
              element={
                <RequireAuth>
                  <RutaProtegida />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  {/* <MyApp /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
