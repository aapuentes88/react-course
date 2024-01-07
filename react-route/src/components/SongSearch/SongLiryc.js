import React from 'react'

const SongLiryc = ({lyric, search}) => {
  return (
    <div>
    <h4>SongLiryc</h4>
    <h6>{search.song} {lyric.title}</h6>
    <p>{lyric.body}</p>
    </div>
  )
}

export default SongLiryc