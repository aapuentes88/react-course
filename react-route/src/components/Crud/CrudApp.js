import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from "./CrudTable";

const initialDB = [
  { id: 1, name: "Seiya", constellation: "Pegaso", },
  { id: 2, name: "Shiryu", constellation: "Dragon", },
  { id: 3, name: "Hyoga", constellation: "Cisne", },
  { id: 4, name: "Shun", constellation: "Andromeda", },
  { id: 5, name: "Ikki", constellation: "Fenix", },
]

const CrudApp = () => {

  const [db, setDb] = useState(initialDB)
  const [dataToEdit, setDataToEdit] = useState(null)

  const createData = (data) => {
    data.id = Date.now()
    setDb([...db, data])
  }

  const updateData = (data) => {
    setDb(db.map((item) => (item.id === data.id) ? data : item))

  }

  const deleteData = (id) => {
    let isDelete = window.confirm(`Esta seguro de borrar el elemento con id ${id}`)
    if (isDelete)
      setDb(db.filter((item) => item.id !== id))
    else
      return
  }

  return (
    <div>
      <h2>CrudApp</h2>
      <article className='grid-1-2'>
      <CrudForm createData={createData} updateData={updateData}
        dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
      <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
      </article>
    </div>
  )
}

export default CrudApp