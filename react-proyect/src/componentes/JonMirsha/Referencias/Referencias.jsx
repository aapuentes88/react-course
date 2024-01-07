import React, { useRef } from 'react'

const Referencias = () => {

    let refBtn = useRef()
    let refMenu = useRef()

    const handleToggleMenu = (e) => {

        //Vanilla JavaScript
        //   const $menu = document.getElementById("menu")
        //     if(e.target.textContent === "Menu"){
        //         e.target.textContent = "Cerrar"
        //         $menu.style.display = "block"
        //     } else {
        //         e.target.textContent = "Menu"
        //         $menu.style.display = "none"
        //     }

        
        if (refBtn.current.textContent === "Menu") {
            refBtn.current.textContent = "Cerrar"
            refMenu.current.style.display = "block"
        } else {
            refBtn.current.textContent = "Menu"
            refMenu.current.style.display = "none"
        }

    }

    return (
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refBtn} onClick={handleToggleMenu}>Menu</button><br />
            <nav id="menu" ref={refMenu} style={{ display: "none" }}>
                <a href="#" >Seccion 1</a><br />
                <a href="#" >Seccion 2</a><br />
                <a href="#" >Seccion 3</a><br />
                <a href="#" >Seccion 4</a><br />
                <a href="#" >Seccion 5</a><br />
            </nav>

        </>
    )
}

export default Referencias