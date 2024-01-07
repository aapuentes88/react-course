import React from 'react'
import "./Estilos.css"
import "./Estilos.scss"
import moduleStyles from "./Estilos.module.css"

const Estilos = () => {
    let myStiles = {
        borderRadius:".5rem",
         margin:"2rem auto",
         maxWidth: "50%",
        }
  return (
    <>
    <section className='estilos'>
    <h2>Estilos CSS en react</h2>
    <h3 className="bg-react">Estilos en hoja css externo</h3>
    <h3 className="bg-react" style={{borderRadius:"25rem", margin:"1rem"}}>Estilos en linea</h3>
    <h3 className="bg-react" style={myStiles}>Estilos en linea</h3>
    <h3 className="bg-react" /*Esto se  hace en index.css */>agregando normalize con
    <br/>
    <code>@import-normalize </code>
    </h3>
    <h3 className={moduleStyles.error}>Estilos con Modulos</h3>
    <h3 className={moduleStyles.success}>Estilos con Modulos</h3>
    <h3 className="bg-sass" >Estilos SASS</h3>
    </section>
    </>
  )
}

export default Estilos