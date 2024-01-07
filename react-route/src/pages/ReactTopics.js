import React from 'react'
import { Link, Routes, Route ,useMatch, useParams, useResolvedPath } from 'react-router-dom'

const ReactTopics = () => {

    const match = useMatch("/react/:topic")
    const url = useResolvedPath("").pathname;
    const topic = useParams();
    console.log("match", match)
    console.log("url", url)
    console.log("topic", topic)

    return (
        <>
            <h3>ReactTopics</h3>
            <ul>
                <li>
                    <Link to={`${url}/jxs`} >  JSX  </Link>
                </li>
                <li>
                    <Link to={`${url}/props`} >  Props  </Link>
                </li>
                <li>
                    <Link to={`${url}/state`} >  State  </Link>
                </li>
                <li>
                    <Link to={`${url}/component`} >  Components  </Link>
                </li>
            </ul>
            <Routes>
            <Route index element={<h3>Elige un tema de React</h3>}  />
            {match && (<Route path=":topic" element={<h3>  Dynamic route for {match.params.topic} </h3>}  />)}
            </Routes>
        </>
    )
}

export default ReactTopics