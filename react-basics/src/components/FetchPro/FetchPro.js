import React, {Suspense} from 'react'
import {fetchData} from './../../FetchData/fetchData'

const apiData = fetchData("http://jsonplaceholder.typicode.com/users")

const FetchPro = () => {    

  const data = apiData.read()
  console.log(data)
  return (
    <div>
        <h1>Fetch like a PRO</h1>
        <Suspense fallback={<div>Loading....</div>}>
          <ul className='card'>
            {data?.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </Suspense>

    </div>
  )
}

export default FetchPro