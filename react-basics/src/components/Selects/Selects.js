import React, {useState} from 'react'
import SelectList from './SelectList'

const Selects = () => {


    const [state, setState] = useState("")
    const [twon , setTwon] = useState("")
    const [suburb, setSuburb] = useState("")

  return (
    <>
    <h2>Selects Anidados</h2>
    <h3>Mexico</h3>
    <SelectList tittle="estado" url="http://localhost:5000/Estados" handleChange={(e) => setState(e.target.value)}/>
    {state && <SelectList tittle="municipios" url="http://localhost:5000/Municipios" handleChange={(e) => setTwon(e.target.value)}/>}
    {twon && <SelectList tittle="colonia" url="http://localhost:5000/Colonias" handleChange={(e) => setSuburb(e.target.value)}/>}
    <pre><code>{state} - {twon} - {suburb}</code></pre>
    </>
  )
}

export default Selects