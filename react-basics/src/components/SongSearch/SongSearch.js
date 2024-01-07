import React, {useState, useEffect} from 'react'
import { helpHttp } from '../../helpers/helpHttp'
import Loader from '../Loader/Loader'
import SongDetails from './SongDetails'
import SongForm from './SongForm'

const SongSearch = () => {

    const [search, setSearch] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [biography, setBiography] = useState(null)
    const [loading, setLoading ] = useState(false)

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
        return () => {
          
        }
      }, [search])

    const handleSearch = (data) => {
        setSearch(data)
    }

  return (
    <>
    <h2>SongSearch</h2>
    <SongForm handleSearch={handleSearch}/>
    {loading && <Loader/>}
    {search && !loading && <SongDetails search = {search} lyric = {lyric} biography = {biography}/>}
    </>
  )
}

export default SongSearch