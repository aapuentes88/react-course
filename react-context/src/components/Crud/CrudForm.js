import React, { useState, useEffect, useContext } from 'react'
import CrudContext from './CrudContext'

const initialForm = { id: null, name: "", constellation: "" }
const CrudForm = () => {

  const {createData, updateData, dataToEdit, setDataToEdit} = useContext(CrudContext)


  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.constellation) {
      alert("Datos incompletos")
      return
    }

    if (form.id === null) { 
      createData(form)
    } else {
      updateData(form)
    }

    handleReset()
  }

  const handleReset = (e) => {
   setForm(initialForm)
   setDataToEdit(null)
  }

  useEffect(() => {
    if(dataToEdit)
      setForm(dataToEdit)
      else
      setForm(initialForm)
    return () => {
      
    }
  }, [dataToEdit])
  
  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input  type='text' name="name" value={form.name} placeholder="Nombre" onChange={handleChange} />
        <input  type='text' name="constellation" value={form.constellation} placeholder="Constellation" onChange={handleChange} />
        
        <input type='submit' value="Enviar" />
        <input type='reset' value="Limpiar" onClick={handleReset} />
      </form>

    </div>
  )
}

export default CrudForm