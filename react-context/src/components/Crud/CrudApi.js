import React, { useContext } from 'react'
import CrudForm from './CrudForm'
import CrudTable from "./CrudTable";
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import CrudContext from './CrudContext';

const CrudApi = () => {

  const {db, error, loading} = useContext(CrudContext)

  return (
    <div>
      <h2>CrudApi con Context API</h2>
      <article className='grid-1-2'>
        
        <CrudForm  />
        {loading && <Loader />}
        {error && <Message msg={`Error : ${error.err ? error.statusText : error.message}`} bgColor='#dc3545' />}
        {db && <CrudTable/>}

      </article>
    </div>
  )
}

export default CrudApi