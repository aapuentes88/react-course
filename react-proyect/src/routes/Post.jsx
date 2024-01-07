import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Post = () => {

    let params = useParams()

    const [data, error, loading] = useFetch(
        "https://jsonplaceholder.typicode.com/posts/" + params.id
    )

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error !== "") {
        return <h1>{error}</h1>;
    }

    return (
        <div>            
          <h1>Post</h1>
          <h2>{data.id} - {data.title}</h2>
          <p>{data.body}</p>
        </div>
    )
}

export default Post