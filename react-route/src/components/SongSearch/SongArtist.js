import React from 'react'

const SongArtist = ({biography, search}) => {
  let avatar = biography.artists[0].strArtistThumb
  let idArtist = biography.artists[0].idArtist
  let strArtist = biography.artists[0].strArtist

  return (
    <div>
    <h4>SongArtist</h4>
    <img src={ avatar} alt={idArtist} />
    <h6>{search.artist} {idArtist} {strArtist}</h6>
    <p>{biography.artists[0].strBiographyEN}</p>
    </div>
  )
}

export default SongArtist