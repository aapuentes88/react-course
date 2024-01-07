import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";


const CrudContext = createContext()

const CrudProvider = ({children}) => {

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
    const data = {db, dataToEdit, error, loading, createData, setDataToEdit, updateData, deleteData}
    return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>
} 
export {CrudProvider}
export default CrudContext