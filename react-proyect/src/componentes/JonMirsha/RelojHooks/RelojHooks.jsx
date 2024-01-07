import React from 'react'
import { useState, useEffect } from 'react'

const Reloj = (props) => {

    return (
        <>
            <h3>{props.hora}</h3>
        </>
    )

}

const RelojHooks = () => {

    const [hour, setHour] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)


    // const iniciar = (e) => { }

    // const detener = (e) => { }

    const tictac = (v) => setVisible(v)

    useEffect(() => {
        let temporizador

        if (visible) {
            temporizador = setInterval(() => {
                setHour(new Date().toLocaleTimeString())
            }, 1000)
        } else {
            clearInterval(temporizador)

        }

        return () => {
            clearInterval(temporizador)
        }
    }, [visible])


    return (
        <>
            <h2>Reloj Hora</h2>
            {visible && <Reloj hora={hour} />}
            <button
                className="btn btn-sm btn-secondary "
                onClick={() => tictac(true)}
            >Iniciar</button>
            <button
                className="btn btn-sm btn-secondary "
                onClick={() => tictac(false)}
            >Detener</button>
        </>
    )
}

export default RelojHooks