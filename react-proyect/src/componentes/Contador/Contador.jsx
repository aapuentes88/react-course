import React from 'react'
import { useEffect, useState } from 'react'

const Contador = () => {

  const [contador, setContador] = useState(0)
  const aumentar = () => {
    setContador(contador + 1)
  }


  useEffect(() => {
    console.log(`contador cambio: ${contador}`);
  }, [contador]);

  return (
    <>
      <h1>contador</h1>
      <h2>{contador}</h2>
      <button
        className='btn btn-dark'
        onClick={aumentar}
      >Aumentar</button>
    </>

  )
}

export default Contador