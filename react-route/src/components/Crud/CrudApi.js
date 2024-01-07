import React, { useState, useEffect } from 'react'
import { Route, Routes, HashRouter, Link } from 'react-router-dom'
import { helpHttp } from '../../helpers/helpHttp';
import CrudForm from './CrudForm'
import CrudTable from "./CrudTable";
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import Error404 from '../../pages/Error404'


const CrudApi = () => {

  const [db, setDb] = useState(null)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  let api = helpHttp()
  let url = "http://localhost:5000/santos"

  useEffect(() => {
    // setTimeout(() => {


    setLoading(true)
    // api.get(url).then((res) => { esto me genera warnings al no meter la variable api abajo
    helpHttp().get(url).then((res) => {
      if (!res.err && !(res instanceof TypeError)) {
        setDb(res)
        setError(null)
      } else {
        setDb(null)
        setError(res)
      }
    })
    // return () => {

    // }

    setLoading(false)

    // }, 1500);

  }, [url])


  const createData = (data) => {
    data.id = Date.now()
    let options = { headers: { "content-type": "application/json" }, body: data, }
    api.post(url, options).then((res) => {
      if (!res.err && !(res instanceof TypeError)) {
        setDb([...db, res])
        setError(null)
      } else {
        setError(res)
      }
    })


  }

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`
    let options = { headers: { "content-type": "application/json" }, body: data, }
    api.put(endpoint, options).then((res) => {
      if (!res.err && !(res instanceof TypeError)) {
        setDb(db.map((item) => (item.id === res.id) ? res : item))
        setError(null)
      } else {
        setError(res)
      }
    })


  }

  const deleteData = (id) => {

    let isDelete = window.confirm(`Esta seguro de borrar el elemento con id ${id}`)
    if (isDelete) {
      let endpoint = `${url}/${id}`
      let options = { headers: { "content-type": "application/json" }, }
      api.del(endpoint, options).then((res) => {
        if (!res.err && !(res instanceof TypeError)) {
          setDb(db.filter((item) => item.id !== id))
          setError(null)
        } else {
          setError(res)
        }
      })
    }
    else
      return
  }

  return (
    <div>

      <HashRouter>
        <header>
          <h2>CrudApi con Rutas</h2>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/santos">Santos</Link>
          <Link to="/santos/add">Add</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/santos" element={<article> {loading && <Loader />}
            {error && <Message msg={`Error : ${error.err ? error.statusText : error.message}`} bgColor='#dc3545' />}
            {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
          </article>} />
          <Route path="/santos/add" element={<article className='grid-1-2'>
            <CrudForm createData={createData} updateData={updateData}
              dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
          </article>} />
          <Route path="/santos/edit/:id" element={<article className='grid-1-2'>
            <CrudForm createData={createData} updateData={updateData}
              dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
          </article>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default CrudApi