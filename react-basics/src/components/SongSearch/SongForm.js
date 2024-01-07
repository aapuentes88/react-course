import React, {useState} from 'react'

const initialForm = {artist:"", song:"",}

const SongForm = ({handleSearch}) => {

  const [form, setForm] = useState(initialForm)

  const handleChange = e => {
        setForm({...form, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(!form.artist || !form.song) {
    alert("Datos incompletos")
    return
    }

    handleSearch(form)
    setForm(initialForm)
}


  return (
    <>
    <h3>SongForm</h3>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Nombre del artista" name="artist" onChange={handleChange} value={form.artist}/>
    <input type="text" placeholder="Nombre de la cancion" name="song" onChange={handleChange} value={form.song}/>
    <input type="submit" value="Enviar"/>
    </form>
    </>
  )
}

export default SongForm