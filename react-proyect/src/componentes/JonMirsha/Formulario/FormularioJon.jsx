import React, { useState } from 'react'

const FormularioJon = () => {
  //Forma Avanzada de usar formularios
  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,[e.target.name]:e.target.value
    })
  }

  const handleChecked = (e) => {
    setForm({
      ...form,[e.target.name]:e.target.checked
    })
  }

    const handleSubmit = (e) => {
    e.preventDefault()
    alert("el formulario se ha enviado")
  }

  return (
    <>
      <h2>FormularioJon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name"
          value={form.name} onChange={(e) => handleChange(e)}
        />
        <p>Elige tu sabor JS favorito </p>
        <input type="radio" name="sabor" id="vanilla" value="vanilla"
        /*checked usar defaultChecked react*/ defaultChecked onChange={(e) => handleChange(e)} />
        <label htmlFor="vanilla">Vanilla</label>
        <input type="radio" name="sabor" id="react" value="react" onChange={(e) => handleChange(e)} />
        <label htmlFor="react">React</label>
        <input type="radio" name="sabor" id="angular" value="angular" onChange={(e) => handleChange(e)} />
        <label htmlFor="angular">Angular</label>
        <input type="radio" name="sabor" id="vue" value="vue" onChange={(e) => handleChange(e)} />
        <label htmlFor="vue">Vue</label>
        <input type="radio" name="sabor" id="svelte" value="svelte" onChange={(e) => handleChange(e)} />
        <label htmlFor="svelte">Svelte</label>
        <p>Elige tu lenguaje JS favorito </p>
        <select name="lenguaje" defaultValue="js" onChange={(e) => handleChange(e)}>
          <option value="">-------</option>
          <option value="js">JavaScript</option>
          <option value="php">Php</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>

        <br />
        <label htmlFor="terminos">Acepto los terminos y condiciones </label>
        <input type="checkbox" name="terminos" id="terminos" value=""
          /*defaultChecked*/ onChange={(e) => handleChecked/(e)} />
        <br />
        <input type="submit" />
      </form>
    </>
  )
  //Forma sencilla de usar formularios en react formularios controlados
  // const [name, setName] = useState("")
  // const [sabor, setSabor] = useState("")
  // const [lenguaje, setLenguaje] = useState("")
  // const [terminos, setTerminos] = useState(false)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   alert("el formulario se ha enviado")
  // }

  // return (
  //   <>
  //     <h2>FormularioJon</h2>
  //     <form onSubmit={handleSubmit}>
  //       <label htmlFor="name">Nombre</label>
  //       <input type="text" id="name" name="name"
  //         value={name} onChange={(e) => setName(e.target.value)}
  //       />
  //       <p>Elige tu sabor JS favorito </p>
  //       <input type="radio" name="sabor" id="vanilla" value="vanilla"
  //       /*checked usar defaultChecked react*/ defaultChecked onChange={(e) => setSabor(e.target.value)} />
  //       <label htmlFor="vanilla">Vanilla</label>
  //       <input type="radio" name="sabor" id="react" value="react" onChange={(e) => setSabor(e.target.value)} />
  //       <label htmlFor="react">React</label>
  //       <input type="radio" name="sabor" id="angular" value="angular" onChange={(e) => setSabor(e.target.value)} />
  //       <label htmlFor="angular">Angular</label>
  //       <input type="radio" name="sabor" id="vue" value="vue" onChange={(e) => setSabor(e.target.value)} />
  //       <label htmlFor="vue">Vue</label>
  //       <input type="radio" name="sabor" id="svelte" value="svelte" onChange={(e) => setSabor(e.target.value)} />
  //       <label htmlFor="svelte">Svelte</label>
  //       <p>Elige tu lenguaje JS favorito </p>
  //       <select name="lenguaje" defaultValue="js" onChange={(e) => setLenguaje(e.target.value)}>
  //         <option value="">-------</option>
  //         <option value="js">JavaScript</option>
  //         <option value="php">Php</option>
  //         <option value="py">Python</option>
  //         <option value="go">Go</option>
  //         <option value="rb">Ruby</option>
  //       </select>

  //       <br />
  //       <label htmlFor="terminos">Acepto los terminos y condiciones </label>
  //       <input type="checkbox" name="terminos" id="terminos" value=""
  //         defaultChecked onChange={(e) => setTerminos(e.target.checked)} />
  //       <br />
  //       <input type="submit" />
  //     </form>
  //   </>
  // )
}

export default FormularioJon