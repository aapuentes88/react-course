import React, { useState, useEffect } from 'react'
import { helpHttp } from '../../helpers/helpHttp';
import CrudForm from './CrudForm'
import CrudTable from "./CrudTable";
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import { createAction, deleteAction, noAction, noData, readAllAction, readAllData, updateAction } from '../../actions/crudApiActions';
import { useDispatch, useSelector } from 'react-redux';

const CrudApi = () => {

  // const [db, setDb] = useState(null)
  //const [state, dispatch] = useReducer(crudApiReducer, crudApiInitialState)
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const {db} = state.crud

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
        // setDb(res)
        dispatch(readAllAction(res))
        setError(null)
      } else {
        // setDb(null)
        dispatch(noAction())
        setError(res)
      }
    })
    // return () => {

    // }

    setLoading(false)

    // }, 1500);

  }, [url, dispatch])


  const createData = (data) => {
    data.id = Date.now()
    let options = { headers: { "content-type": "application/json" }, body: data, }
    api.post(url, options).then((res) => {
      if (!res.err && !(res instanceof TypeError)) {
        // setDb([...db, res])
        dispatch(createAction(res))
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
        // setDb(db.map((item) => (item.id === res.id) ? res : item))
        dispatch(updateAction(res))
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
          // setDb(db.filter((item) => item.id !== id))
          dispatch(deleteAction(id))
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
    <div className='container'>
      <h2>CrudApi</h2>
      <article className='grid-1-2'>
        <CrudForm createData={createData} updateData={updateData}
          dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
        {loading && <Loader />}
        {error && <Message msg={`Error : ${error.err ? error.statusText : error.message}`} bgColor='#dc3545' />}
        {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
      </article>
    </div>
  )
}

export default CrudApi