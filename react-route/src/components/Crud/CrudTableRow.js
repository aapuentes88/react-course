import React from 'react'
import { useNavigate } from 'react-router-dom'

const CrudTableRow = ({ data, setDataToEdit, deleteData }) => {
  const { name, constellation, id } = data
  let navigate = useNavigate()

  const handleClick = () => {
    setDataToEdit(data)
    navigate(`/santos/edit/${id}`)
  }
  return (
    <tr ><td>{name}</td>
      <td>{constellation}</td>
      <td><button onClick={handleClick}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button></td></tr>
  )
}

export default CrudTableRow