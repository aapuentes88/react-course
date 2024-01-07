import React from 'react'
import { useNavigate } from 'react-router-dom'

const SongTableRow = ({el, id, handleDeleteSong}) => {

    const {search, lyric, biography} = el
    //console.log(el)
    //console.log("search :", search, "lyric :", lyric, "biography :", biography)
    let avatar = biography.artists[0].strArtistThumb
    let idArtist = biography.artists[0].idArtist
    let strArtist = biography.artists[0].strArtist
    let avatarStyle = {
      width: "auto",
      height: "40px"
    }
    let navigate = useNavigate()
  return (
    <tr>
        <td><img style={avatarStyle} src={ avatar/*"https://placeimg.com/40/40/music"*/} alt={idArtist} /></td>
        <td>{idArtist}</td>
        <td>{strArtist}</td>
        <td>
            <button onClick={(e) => navigate(`/canciones/${id}`)}>Ver</button>
            <button onClick={(e) => handleDeleteSong(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default SongTableRow