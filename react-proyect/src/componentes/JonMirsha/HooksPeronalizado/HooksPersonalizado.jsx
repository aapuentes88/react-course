import React from 'react'
import { useFetchJon } from '../Hooks/useFetchJon'


const HooksPersonalizado = () => {

    let url = "https://pokeapi.co/api/v2/pokemon"

    let {data, isPending, error} = useFetchJon(url)

    console.log(data)
    console.log(isPending)
    console.log(error)



  return (
    <h2>HooksPersonalizado</h2>
  )
}

export default HooksPersonalizado