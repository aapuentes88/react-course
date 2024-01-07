import React from 'react'
import Message from '../Message/Message'
import SongArtist from './SongArtist'
import SongLiryc from './SongLiryc'

const SongDetails = ({search, lyric, biography}) => {

  if(!lyric && !biography) return null
  return (
    
    <div>
    <h3>SongDetails</h3>

    <article className='grid-1-2'>
    <div>
    {lyric.err || lyric.name === "AbortError" ? <Message msg={`Error no existe la cancion '<em>${search.song}</em>'`} bgColor="#dc3545"/>:<SongLiryc lyric={lyric} search={search}/>}
    </div>
    <div>
    {biography.artists? <SongArtist biography={biography} search={search} />:<Message msg={`Error no existe el interprete "<em>${search.artist}</em>"`} bgColor="#dc3545"/>} 
    </div>
    </article>

    </div>
    
  )
}

export default SongDetails