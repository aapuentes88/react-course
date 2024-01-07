import React from 'react'
import SongTableRow from './SongTableRow'

const SongTable = ({mySongs, handleDeleteSong}) => {
  return (
    <div>
        <h3>Table de Canciones Favoritas</h3>
        <table>
            <thead>
                <tr>
                    <th colSpan="2"> Artist </th>
                    <th> Cancion </th>
                    <th> Acciones </th>
                </tr>
            </thead>
            <tbody>
                {mySongs.length > 0 ? (mySongs.map((item, index) => <SongTableRow key={index} el = {item} id={index} handleDeleteSong={handleDeleteSong}/>)) : (<tr><td colSpan="4"> Sin canciones </td></tr>)}
            </tbody>
        </table>

    </div>
  )
}

export default SongTable