

import React, {useState} from 'react'
import { useFetch } from '../../hooks/useFetch'
import Loader from '../Loader/Loader'
import Message from '../Message/Message'

const SelectList = ({tittle, url, handleChange}) => {

    const {data, error, loading} = useFetch(url)

    if(!data) return null
    if(error){
      return <Message msg={`Erros : ${error.status} : ${error.statusText}`} bgColor="#dc3545"/>
    }

    let id = `select-${tittle}`
    let options = data.response[tittle]

    console.log(options)
    return (
    <>
    {/* <h3>SelectList</h3> */}
    {loading && <Loader/> }
    <label htmlFor={id}> {tittle} </label>
    <select name={id} id={id} onChange={handleChange}>
        <option value="" > Elige un {tittle} </option>
        {data &&  options.map((item, index) => <option key={index} value={item}> {item} </option>)}
    </select>
    </>
  )
}

export default SelectList