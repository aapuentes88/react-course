import React, { useState, useEffect } from 'react'

function Pokemon({ name, avatar }) {
    return (
        <figure><img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}

const AjaxHooks = () => {
    const [pokemons, setPokemons] = useState([])

    //Para usar async await en una funcion effecto se recomienda crear una funcion asyn interna
    //y no volver async la funcion que se pasa por parametro al effecto
    useEffect(() => {

        let url = "https://pokeapi.co/api/v2/pokemon"

        //Funcion async
        const getPokemons = async (url) => {

            let res = await fetch(url)
            let json = await res.json()

            json.results.forEach(async (item) => {
                let res = await fetch(item.url)
                let json = await res.json()

                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                }

                // let pokem = [...pokemons]
                // setPokemons( [...pokem, pokemon])
                setPokemons((prevPok) => [...prevPok, pokemon])//revisar esto
            })
        }

        //   return () => {
        //     second
        //   }

        getPokemons(url)

    }, [])

    // console.log("pokes ",pokemons)

    return (
        (
            <>
                <h2>Peticiones asincronas de hooks</h2>
                {
                    pokemons === 0 ? <h3>Cargando......</h3> :
                        pokemons.map((item, index) =>
                            (<Pokemon key={index} name={item.name} avatar={item.avatar} />))
                }
            </>
        )
    )
}

export default AjaxHooks