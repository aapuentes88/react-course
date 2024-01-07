import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    let {username} = useParams()

  return (
    <div>
        <h3>User Profile</h3>
        <p>User name <b>{username}</b></p>

    </div>
  )
}

export default User