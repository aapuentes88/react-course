import React from 'react'
import Message from '../Message/Message'
import SongArtist from './SongArtist'
import SongLiryc from './SongLiryc'

const SongDetails = ({search, lyric, biography}) => {

  if(!lyric && !biography) return null
  console.log("3", lyric)
  return (
    <>
    <h3>SongDetails</h3>
    {lyric.err || lyric.name === "AbortError" ? <Message msg={`Error no existe la cancion '<em>${search.song}</em>'`} bgColor="#dc3545"/>:<SongLiryc/>}
    {biography.artists? <SongArtist/>:<Message msg={`Error no existe el interprete "<em>${search.artist}</em>"`} bgColor="#dc3545"/>} 
    </>
  )
}

export default SongDetails