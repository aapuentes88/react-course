import React, {useState} from 'react'

const initialForm = {artist:"", song:"",}

const SongForm = ({handleSearch, handleSaveSong}) => {

  const [form, setForm] = useState(initialForm)
  const [isDisable, setIsDisable] = useState(true)

  const handleChange = e => {
        setForm({...form, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(!form.artist || !form.song) {
    alert("Datos incompletos")
    setIsDisable(true)
    return
    }

    handleSearch(form)
    setForm(initialForm)
    setIsDisable(false)
}


  return (
    <div>
    <h3>SongForm</h3>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Nombre del artista" name="artist" onChange={handleChange} value={form.artist}/>
    <input type="text" placeholder="Nombre de la cancion" name="song" onChange={handleChange} value={form.song}/>
    <input type="submit" value="Enviar"/>
    <input type="button" onClick={handleSaveSong} value="Agregar" disabled = {isDisable && "disabled"}/>
    </form>
    </div>
  )
}

export default SongForm