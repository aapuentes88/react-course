import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const initialForm = { id: null, name: "", constellation: "" }
const CrudForm = (props) => {

  const {createData, updateData, dataToEdit, setDataToEdit} = props

  const [form, setForm] = useState(initialForm)

  let navigate = useNavigate()

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
      console.log("entre a create", form.id)
      createData(form)
    } else {
      console.log("entre a update", form.id)
      updateData(form)
    }

    handleReset()
  }

  const handleReset = (e) => {
   setForm(initialForm)
   setDataToEdit(null)
   navigate("/santos")
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