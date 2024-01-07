import React, {useState, useEffect} from 'react'
import { HashRouter, Routes, Link, Route } from 'react-router-dom'
import { helpHttp } from '../../helpers/helpHttp'
import Loader from '../Loader/Loader'
import SongDetails from './SongDetails'
import SongForm from './SongForm'
import Error404 from '../../pages/Error404'
import SongTable from './SongTable'
import SongPage from '../../pages/SongPage'

const mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || []

const SongSearch = () => {

    const [search, setSearch] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [biography, setBiography] = useState(null)
    const [loading, setLoading ] = useState(false)
    const [mySongs, setMySongs ] = useState(mySongsInit)

    useEffect(() => {
        if(search === null) return
      
        const fetchData = async () => {
            const {artist,song } = search


            let artistUrl = `https://theaudiodb.com/api/v1/json/2/artist.php?i=${artist}`
            //`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
            let songUrl = `https://jsonplaceholder.typicode.com/posts/${song}` 
            // `https://api.lyrics.ovh/v1/${artist}/${song}`


            setLoading(true)

            const [artistRes, songRes] = await Promise.all([helpHttp().get(artistUrl),
                                                      helpHttp().get(songUrl)])
            setBiography(artistRes)
            setLyric(songRes)

            setLoading(false)

            console.log("1", artistRes)
            console.log("2", songRes)

        }

        fetchData()

        localStorage.setItem("mySongs", JSON.stringify(mySongs))
        return () => {
          
        }
      }, [search, mySongs])

    const handleSaveSong = () => {
      alert("Salvando cancion")

      const currentSong = {search, lyric, biography}
      let songs = [...mySongs,currentSong]
      setMySongs(songs)
      localStorage.setItem("mySongs", JSON.stringify(songs))
      //setMySongs((mySongs) => [...mySongs,currentSong])
      setSearch(null)
      

    }

    const handleDeleteSong = (id) => {
      let isDelete = window.confirm(`Desea eliminar la cancion con id ${id}`)
      if(isDelete) {
        let songs = mySongs.filter((item, index) => index !== id )
        setMySongs(songs)
        localStorage.setItem("mySongs", JSON.stringify(songs))
      }
    }

    const handleSearch = (data) => {
        setSearch(data)
    }

  return (
    <div>  
    <HashRouter>
      <header>
      <h2>SongSearch</h2>
      <Link to="/">Home</Link>
      </header>
      {loading && <Loader/>}
      
      <Routes>
        <Route path="/" element={
          <div>
          <article className='grid-1-2'>
          <SongForm handleSearch={handleSearch} handleSaveSong={handleSaveSong}/>
          <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong}/>
          </article>
          <article className='grid-1-2'>
          {search && !loading && <SongDetails search = {search} lyric = {lyric} biography = {biography}/>}
          </article>
          </div>
        }/>
        <Route path="/canciones/:id" element={<SongPage mySongs = {mySongs}/>}  />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
    
    </div>
  )
}

export default SongSearch