import React, { useContext } from 'react'
import CrudContext from './CrudContext'

const CrudTableRow = ({data}) => {

  const { setDataToEdit, deleteData } = useContext(CrudContext)

  const { name, constellation, id } = data


  return (
    <tr ><td>{name}</td>
      <td>{constellation}</td>
      <td><button onClick={() => setDataToEdit(data)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button></td></tr>
  )
}

export default CrudTableRow