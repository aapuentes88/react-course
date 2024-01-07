import React, {useState, useCallback} from 'react'
import ContadorHijo from './ContadorHijo'

const Contador = () => {

const [cont, setCont] = useState(0)
const [input, setInput] = useState("")
// const sumar = () => setCont(cont + 1) 
//useCallback memoriza funciones
const sumar = useCallback( () => setCont(cont + 1), [cont])

// const restar = () => setCont(cont - 1)
const restar = useCallback( () => setCont(cont - 1), [cont])


  return (
    <div  style={{textAlign:"center"}}>
        <h2>Contador</h2>
        <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        </nav>
        <h3>{cont}</h3>
        <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} />
        <ContadorHijo contador={cont} sumar={sumar} restar={restar}/>
        </div>
  )
}

export default Contador