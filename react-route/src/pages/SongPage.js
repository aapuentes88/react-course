import React from 'react'
import { useParams } from 'react-router-dom'
import SongDetails from '../components/SongSearch/SongDetails'

const SongPage = ({mySongs}) => {

    let {id} = useParams()
    console.log("id : ", id)
    console.log("mySongs : ", mySongs)
    console.log("mySongs[id] : ", mySongs[id])

    let {search, lyric, biography} = mySongs[id]
  return (
    <SongDetails search = {search} lyric = {lyric} biography = {biography} />
  )
}

export default SongPage